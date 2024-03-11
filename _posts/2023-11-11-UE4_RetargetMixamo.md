---
layout: post
title: Mixamo 애니메이션 리타깃 꿀팁
date: 2023-11-11
category: 
 - challenge
tag:
 - 1|Animation
 - 1|Retarget
 - 1|Bone-Transform
 - 1|Blender
 - 1|Mixamo
thumbnail: /style/image/portfolio_thumbnails/UE4/Retarget.png
icon: idea
related: 
 - /2023-10-11-UE5-RetargetUpdate
---

플러그인 없이 임포트한 외부 애니메이션을 쉽게 `Retarget` 하는 방법과 한 땀 한 땀 본 트렌스폼 작업 후기

* content
{:toc}

## 요약

- 주요 문제 : 임포트한 Mixamo 애니메이션 리타깃 중 본 뒤틀림 현상 발생
- 해결 방안 : 캐릭터의 스켈레톤에 Mixamo의 `T-Pose`를 적용해 리타깃
- 그 외 시도한 방법들 : 
    1. `Additive Layer Track`을 통한 `Bone Transform` 수정 작업 후 애니메이션 생성
    2. `Blender` 루트 본 생성 작업
    3. `Assign Skeleton`으로 다수의 스켈레탈 메시와 스켈레톤 공유
- 이루어낸 성과 :  
    1. 목표한 기능 구현
    2. 다수의 캐릭터 스켈레탈 메쉬와 애니메이션 공유
    3. 주어진 에셋에 제한된 결과물 보단 내 입맛에 맞게 커스터마이징하고 싶은 개발 욕심 충족  

*언리얼에 지원되는 기능 또는 각종 [리타깃 관련 Plugin](https://www.unrealengine.com/marketplace/en-US/product/free-bone-snapper) [^11] 들을 사용할 수 있지만, 이후 심화적인 작업에 도움이 될 것 같아 스스로 학습을 위해 시도를 해보았고, 예상보다 쉬운 방법을 알아낼 수 있었습니다*

---

## Retarget

각 본들의 미세한 회전 각들은 모두 애니메이션 리타깃 시 영향을 주기 때문에 리타깃을 할 때 가장 중요한 부분은 리타깃을 하는 두 `Skeleton`의 `Retarget Base Pose`가 정확히 일치해야 한다는 점이다  

> When we retarget animations for Skeletons that have more similar Base Poses, we get better-looking results  
[(Unreal Engine Documentation > Retarget Manager)](https://docs.unrealengine.com/4.26/en-US/AnimatingObjects/SkeletalMeshAnimation/Persona/BasePoseManager/) [^21]  


두 팔의 위치, 각 등허리를 구성한 본들이 구부러진 정도, 두 다리의 벌어진 정도 등 오차가 크지 않으면 당장 눈에 띄지 않을 수 있지만, 더 많은 애니메이션들을 리타깃하고 변형 시 언제 어떻게 뒤틀릴지 모르는 일이다  
무료 애니메이션 애셋들을 찾아 다양한 출처를 옮겨다니면 이러한 미세한 오차 등 문제에 취약할 수 밖에 없고,  
실제로 나의 프로젝트에도 애니메이션 뒤틀림 문제가 생겼다  

![StrangeRetarget](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/1aa1fe38-3765-49d1-a435-9716323b4836)

Mixamo의 애니메이션을 YBot skeleton으로 임포트한 뒤 YBot의 Base pose를 UE4 Mannequin의 A-Pose와 유사하게 변형 후 프로젝트의 캐릭터 skeleton으로 리타깃을 하는 과정에서 본들의 Transform 오차로 각종 틀어짐이 발생한 문제였다  

### T-Pose Setup

언리얼의 `Retarget` 상세방법은 관련 Post를 참고해주세요  
> [UE5 리타깃 어떻게 달라졌을까](2023-10-11-UE5-RetargetUpdate)  


Mixamo의 애니메이션들의 Base pose인 T-Pose는 [Mixamo 홈페이지](https://www.mixamo.com/#/?page=1&query=T&type=Motion%2CMotionPack) [^22] 에서 내려받을 수 있다

![1](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/82cc904c-9acb-4695-9c34-34fcf9d2a487)
![2](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/bf82cd3e-3b25-4e65-b89b-1be6b30dc7c1)
![3](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/409c5840-263c-47c1-a1cd-a1c64b16b518)
![4](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/93bb9741-f38d-47a4-b57d-3d23ba368a01)


### Additive Layer Track

본 트랜스폼의 오차로 인한 미세한 뒤틀림은 어쩔 수 없이[Additive Layer Track](https://docs.unrealengine.com/4.26/en-US/AnimatingObjects/SkeletalMeshAnimation/AnimHowTo/LayerEditing/) [^23] 으로 한 땀 한 땀 조작을 해주었다  
Additive Layer Track은 애니메이션 시퀀스에 특정 본의 트렌스폼(position, rotation, scale)에 대한 Curve를 보여주고, 수정 시 Curve에 키를 추가해 해당 프레임에 변형을 적용해준다  

![AdditiveLayerTrack](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/6df71b1d-e286-44dc-a051-f01a8d206953)  
*여러의미로 물리치료를 해주었다*

포즈오차로 인한 리타깃 문제를 알기 전엔 캐릭터의 뒤틀린 손가락부터 등뼈까지 맞춰주기도 했지만,  
수십개의 애니메이션들과 여러 스켈레탈 메시에도 적용해줘야 하는 단순 반복작업이 비효율적이라 판단했다  
리타깃 오류 사례를 검색해 주요문제를 해결한 뒤, 크게 눈에 띄는 경우에만 디테일 작업을 진행했다

---

## Blender Root

### Root Motion
![rootmotion](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/d500629f-238c-4c6c-bd49-c5707c4e67d4)
Mixamo의 Skeleton 구조는 언리얼 기본 Skeleton과 다르고,  
캐릭터 애니메이션의 기준점을 지정해주는 `Root`이 `Hips`로 지정되어있어 언리얼 에디터에서의 Root Motion 적용이 어렵다  
또한, Root가 있는 UE4 Mannequin에 Retarget 시 Root Motion기능이 작동하지 않는다

Mixamo에서 다운로드 옵션에 `In Place`이 있는 애니메이션만으로 작업을 할 수 밖에 없었고, 필요한 에셋을 구하는데 제한이 생기는 점이 기분 좋지 않았다  
![download_option](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/ca08617d-1755-46d9-b5c5-d76a69aef8c6)

나와 같은 불편함을 겪은 사람들의 의견을 검색해본 결과, [Blender 프로그램을 통해 애니메이션에 Root본을 삽입하는 plugin 기능을 알게 되었다](https://www.youtube.com/watch?v=gq8k5ZOBjww) [^31]  

### Mixamo Converter

평소 개발욕심이 충만한 내 성격 상 이미 만들어진 편리한 기능과 같은 plugin을 사용하는 것보단 하나하나 뜯어고치는 길을 택했겠지만, 다음 3가지 이유로 예외적으로 plugin기능에 도움을 얻기로 했다  

1. 외부의 무료 에셋을 사용하는 것으로 처음부터 나의 의도대로 만들어진 애니메이션이 아니다
2. 해당 애니메이션은 언리얼의 skeleton, 그리고 내가 또한 외부에서 가져온 무료 Skeletal Mesh에 적용되도록 맞춰진 애니메이션이 아니다
3. 앞서 본 트랜스폼 물리치료 작업으로 이미 많은 시간을 낭비하였고, 애니메이션관련 지식은 언리얼에디터를 통해 겨우 기초만 알고있는 상태로는 컨트롤불가한 영역이라 판단

따라서 튜토리얼에 나온 대로 [Blender프로그램(작업일자 기준 최신버전: 4.0.2)](https://www.blender.org/download/) [^32] 을 설치한 뒤 [Mixamo Converter 플러그인](https://github.com/enziop/mixamo_converter) [^33] 을 적용해 순식간에 Root본이 삽입된 애니메이션들을 임포트해 주었다  

![mixamo_converted](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/cded264f-e5b7-4d55-a49d-a91d2018f6d5)


## Unite Skeleton

## Reference

[^11]: [TLL(2023.09.23). Unreal Engine Marketplace. Free Bone Snapper](https://www.unrealengine.com/marketplace/en-US/product/free-bone-snapper)  

[^21]: [Unreal Engine. Documentation. Retarget Manager](https://docs.unrealengine.com/4.26/en-US/AnimatingObjects/SkeletalMeshAnimation/Persona/BasePoseManager/)  
[^22]: [Mixamo. Mixamo. Animations](https://www.mixamo.com/#/?page=1&query=T&type=Motion%2CMotionPack)  
[^23]: [Unreal Engine. Documentation. Editing Animation Layers](https://docs.unrealengine.com/4.26/en-US/AnimatingObjects/SkeletalMeshAnimation/AnimHowTo/LayerEditing/)  

[^31]: [OpenReality(2023.02.02).YouTube. Fix Mixamo Root Motion Animations in Unreal Engine UE4](https://www.youtube.com/watch?v=gq8k5ZOBjww)  
[^32]: [Blender Foundation. Blender. Download](https://www.blender.org/download/) 4.0.2  
[^33]: [enjiop(2022). GitHub. Mixamo_converter](https://github.com/enziop/mixamo_converter)  

[Giuseppe Portelli(2017.11.1). A clockwork berry. Automated foot sync markers using animation modifiers in Unreal Engine](http://www.aclockworkberry.com automated-foot-sync-markers-using-animation-modifiers-unreal-engine/)  




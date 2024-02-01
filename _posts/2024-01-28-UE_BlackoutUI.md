---
layout: post
title: UE NVIDIA 버그 에디터 검정UI 해결법
date:   2024-01-28
category: in-depth
thumbnail: /style/image/thumbnails/UIBlackout.png
icon: idea
---

* content
{:toc}

## 문제발생

![UIBlackout](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/3f758015-c896-4fe4-b0d8-a029950a0d1b)

이전 노트북에서 작업했을 땐 발생하지 않았던 검정 UI오류가 확인되어 검색을 해보았다.
처음엔 실행프로그램이 많아 과부하가 걸린거라 여기고 종료 후 재실행을 반복했으나,
너무 자주 발생해 검색해본 결과 [^1] 그래픽카드를 사용하는 PC에서 언리얼 엔진 뿐 아니라 모든 프로그램에서 흔히 발생하는 NVIDIA 버그임을 알게되었다

---
## 해결방법

언리얼 Dev Community에 올라온 YouTube영상 [^2] 을 참고했으며 NVIDIA 공식 홈페이지에서 Multiplane Overlay 비활성화 레지스트리 파일을 받아 재부팅해주면 된다
[![image](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/15c86f24-95f2-477b-a021-906d7a5b64f2)](https://nvidia.custhelp.com/app/answers/detail/a_id/5157)

레지스트리에 아래와 같이 `OverlayTestMode` 값이 추가되어있는걸 확인할 수 있다
![image](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/f912f230-8ae6-4964-8754-4efe8a0e74e5)


---

## Reference
[^1]: [Riev02(2021.01). Unreal Engine Dev Community. Unreal Editor menus turn black](https://forums.unrealengine.com/t/unreal-editor-menus-turn-black/477576/37)
[^2]: [UnrealityBites(2022.215). YouTube. UE4 Quick Bite: Editor Right-Click Menus Disappearing FIXED](https://www.youtube.com/watch?v=TouW23qBNmk&t=46s)
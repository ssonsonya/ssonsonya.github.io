---
layout: post
title: UE Crash:Assertion failed
date:   2024-01-09
category: challenge
tag:
- 1|Crash
- 9|AssertionFailed
thumbnail: /style/image/thumbnails/AssertionFailed.png
icon: idea
---

이전에 작업한 프로젝트가 Crash로 인해 실행이 불가한 상황이 발생했다  
![image](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/35712acc-e471-441b-9df0-3e45f048a398)

* content
{:toc}

## 문제발생

- 문제내용  
    GitHub에 저장한 완성된 프로젝트를 zip으로 내려받아 압축해제 후 실행  
    -> Crash Reporter창 팝업과 함께 에디터 실행 불가

- 에러메세지  
    Crash Reporter
    ```console
    Assertion failed: bUncompressMemorySucceeded
    [File:D:/Build/++UE4/Sync/Engine/Source/Runtime/Core/Private/Serialization/Archive.cpp] [Line: 763]
    Failed to uncompress data in [디렉토리]GreateHammer/Textures/Weapons/T_Weapon_Set2_Normal.uasset.
    Check log for details.
    ```

    log
    ```console
    appUncompressMemoryZLIB failed: Error: Z_DATA_ERROR, input data was corrupted or incomplete!
    FCompression::UncompressMemory - Failed to uncompress memory (130756/131072) 
    from address 000002772B1C6140 using format Zlib, this may indicate the asset is corrupt!
    ```

---

## 해결방법

에러메세지의 내용에 따르면, Asset Data `T_Weapon_Set2_Normal.uasset`이 손상되어 Crash가 발생했다고 한다  
해당 Asset파일을 새로 받아 직접 덮어씌워주었더니 해결되었다  

![Solved](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/435b7948-8cee-472f-9369-50b64ff03c2a)

정상 작동되어 언리얼 에디터가 실행된다  
![image](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/fb0531df-d879-4c03-b74c-b752f74f90a9)

GitHub에 binary data로 기록된 내용이 이동 중 PC환경등으로 인해 변형되어 파일이 손상됐을 가능성이 있다고 한다  
에디터 실행 자체가 되지 않는 오류라 당황스러웠지만, 다행히 에러메세지에 명시된 내용이 해결에 직접적인 도움이 되어 금방 해결할 수 있었다
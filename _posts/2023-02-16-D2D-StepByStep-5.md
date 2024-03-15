---
layout: post
title: DirectX 2D 기초 이론 복습 - 5
date:   2023-02-16
category: tutorial
thumbnail: /style/image/thumbnail_D2D_sbs.png
icon: book
related:
- next
- previous
---

* content
{:toc}

## 충돌구현
![D2D (123)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/ab0fd539-89ef-4f96-b26a-31e6f267a90e)
![D2D (124)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/9ba19a3c-e353-4287-b8c4-fec3f4680192)
![D2D (125)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/1bf8e1a5-be65-431d-83d2-1784cf3a3d20)
![D2D (126)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/d548b500-9e3a-417e-8be3-e4de3ced9427)
![D2D (127)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/a5b5b187-a9c9-4718-b931-5cf71eeb4aaf)
![D2D (128)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/30918004-9482-4b60-9f5c-2467a1cd513b)
![D2D (129)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/8d45a8ac-bca7-4ac6-a61d-c432f5c78230)
![D2D (130)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/1de3dc5f-1215-4730-bf8e-9b7689e7a4b9)
![D2D (131)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/c9f727b3-582c-4a77-bb78-9d8b4489a8a8)
![D2D (132)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/04876b80-f7b6-4916-8bc6-dc08f8ff6750)
![D2D (133)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/ef0d4214-cb45-4560-b756-9b61d7c2dbfb)
![D2D (134)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/d807173c-0fdc-40c8-855d-78ea49338a0a)
![D2D (135)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/dcd7376c-cf92-4f11-b40e-5c6d5b13b7e7)
![D2D (136)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/dafea36f-681e-4659-a517-d27b1306ac48)
![D2D (137)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/d0753bca-b5b7-46e6-80dd-c48d1e11c8a8)
![D2D (138)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/a71cfef7-4e08-4cb6-a1bf-c576b4d07ae2)
![D2D (139)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/1483603b-98a6-4a75-8469-a5f1528ee9cf)

## Adapter Info
![D2D (140)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/cb74cdeb-68df-44ec-94bc-d1ab7d865729)
![D2D (141)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/aa953a85-5b7e-4a80-ac5c-7ba3f5d6f4d1)
![D2D (142)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/6f5d2ef6-29c9-4fc1-bcd3-2e50648c1def)
![D2D (143)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/7dd13ad5-842d-4d77-b77e-372873062029)
![D2D (144)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/29f1467f-f05f-44ed-816d-c80b766be099)
![D2D (145)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/345bc847-3e27-427b-818e-74f5977a3b01)
![D2D (146)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/13993d1f-57b1-4c80-b8b6-5bf736475f32)

## 복사생성자
![D2D (147)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/49a4f533-da29-4de1-b84b-fb1de18af418)
![D2D (148)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/1f6af5e8-9ad1-42e7-a1c2-9c000cfe2633)

## Texture Rect
![D2D (149)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/f9fc0117-eb6a-4a04-af12-a966419dffe8)
![D2D (150)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/66afac9b-d7a8-4a0a-89b6-8d801e710fab)
![D2D (151)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/8d311a08-0235-40d8-8cb8-1e65a501f7b7)
![D2D (152)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/118f48d5-7e55-44ca-9090-004a53b4ef11)

## Texture RTV
![D2D (153)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/5bc58ea8-27b4-491b-b0e4-1d7221844a6d)
![D2D (154)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/4e3c5f3a-c164-4663-a456-f7f7b063b1e7)
![D2D (155)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/d7c0347d-e674-4a53-bf71-e387b9a7d6f0)
![D2D (156)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/eef67a1f-0484-4922-9476-39c98216b1c7)
![D2D (157)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/fc22114f-c1d8-49fc-b405-ecc2f4ec0652)

## Shader효과
![D2D (158)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/ad6bb237-42f3-4460-a953-890416d3b4b7)
![D2D (159)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/bb4599be-6080-4676-8f2d-4f58d47a2ecb)
![D2D (160)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/8e8bbf23-bdce-4ce5-84e1-f31dbd9cc68f)
![D2D (161)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/118ab12a-abd7-4d8a-b2d7-c7a1efe39c71)
![D2D (162)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/c369bcf5-ec79-4a55-b9ea-847182ebbe71)
![D2D (163)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/2c449a5d-d1b5-439d-8fef-ccaaef880542)
![D2D (164)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/3844f4da-4c8f-44fd-8a1d-80d2bf4d289c)
![D2D (165)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/b464ac69-790d-4fe8-9538-6b35ca2b3b4d)
![D2D (166)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/cfa21081-ea01-4f5c-8ae8-8a33c8d86213)
![D2D (167)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/3d1a9193-694a-4b58-bb61-061032bd6681)
![D2D (168)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/b88aaad3-c467-4935-aef1-7a9e8b63b8f5)
![D2D (169)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/3ddc66ba-a074-47b1-9119-183e9612e4fc)
![D2D (170)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/803d985b-624f-4163-bf01-c6b589bd73d3)
![D2D (171)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/1a43be36-cb6b-4a43-9c5f-d20db3761466)
![D2D (172)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/9c0d01e7-54b8-45eb-845b-180e99cb3b02)
![D2D (173)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/d6255472-5ec6-4bc0-bb1e-c08984e5d013)

***
학원에서 배운 내용을 복습하며 정리했습니다.
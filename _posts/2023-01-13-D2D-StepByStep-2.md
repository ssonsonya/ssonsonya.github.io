---
layout: post
title: DirectX 2D 기초 이론 복습 - 2
date:   2023-01-13
category: tutorial
tag:
- 2|Vertex
- 2|VertexShader
- 2|PixelShader
- 2|WVP
- 2|RS
- 2|PS
- 2|DS
- 2|UV
- 2|SRV
- 2|OM
thumbnail: /style/image/thumbnail_D2D_sbs.png
icon: book
related:
- next
- previous
---

* content
{:toc}

## 정점 Vertex

![D2D (20)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/00a9973c-bc0a-4be1-8470-207f1d9d8415)
![D2D (21)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/dc6add93-4867-4b0a-8d46-d495cad05394)
![D2D (22)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/2e200f52-1a4a-43cb-a45f-03cbc4bff9d3)
![D2D (23)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/8e111403-b343-4978-9e75-bd6ffdb00281)
![D2D (24)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/a07ee042-3f83-47bc-8bd3-fbe5cfe843a3)
![D2D (25)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/6ff705df-1df0-4482-8edb-b54eb8544781)
![D2D (26)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/ad261eac-56b4-4587-9b19-0e65d21702d3)
![D2D (27)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/66ee702d-9dc6-422f-a33d-1f6639ec311c)
![D2D (28)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/cb334201-62d8-413b-8588-1a98d767a031)

## 공간 변환
![D2D (29)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/9be83c13-3309-4d5a-b49f-ea900891e5a0)
![D2D (30)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/0f9d7b43-9e8b-4743-a920-278251a747bd)
![D2D (31)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/bd689cb1-55a0-47a4-87d0-58dbf06fc333)
![D2D (32)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/042ed542-5efa-4476-a958-c455dcd476a9)
![D2D (33)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/e7c4e41e-b70d-4f4b-a545-ee1fb35379ef)
![D2D (34)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/ca1bbcd6-14ca-408b-a96c-60695551f486)
![D2D (35)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/03d74b3e-6972-4dcf-8892-162f43b04a02)
![D2D (36)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/66aafc74-843e-48fa-93ff-6aa741a5f90a)
![D2D (37)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/5690e9e7-9f2c-4482-b6a3-1ae9bcc1d831)

## World, View, Projection
![D2D (38)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/16d0413b-8013-466e-a406-004811270e04)
![D2D (39)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/052d43a9-6cbc-4d32-9fd4-ba0fc621a55e)
![D2D (40)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/afd583cd-d8cf-4d3f-8533-c0123383480e)
![D2D (41)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/75a4de3c-6270-42c3-8373-1888fa352a5a)
![D2D (42)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/cd72b9cc-84fd-40c1-82fe-b72fd003d802)
![D2D (43)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/2c7b14be-f3cb-4300-8187-ceb6a44222f9)
![D2D (44)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/8c846cab-cbb0-4a57-8868-96f655674426)

## Rasterize State
![D2D (45)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/edbcd9eb-b6e6-4a83-8e93-898b53e9e174)
![D2D (46)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/b005c314-bfd2-47e1-87dc-d64c86d0bd8f)
![D2D (47)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/98e9e1a3-caab-4458-a1b6-300f51d2a939)
![D2D (48)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/c7b1fa1e-f1ae-41ad-8320-9e21dc0c41ea)
![D2D (49)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/97c623ea-d717-4c66-9d03-c807c4ab5a57)
![D2D (50)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/e8ac733b-1028-4e3e-93e2-bdc4a016a9e1)
![D2D (51)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/1516d870-7a28-4ce8-94c7-0ad7f4ced90d)
![D2D (52)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/95653e71-b759-437a-bfde-6a2673809aac)
![D2D (53)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/d1f521c0-1d83-4e97-a868-296331efc03b)

## 요약정리
![D2D (54)](https://github.com/ssonsonya/ssonsonya.github.io/assets/116151781/d099219b-099b-44d3-abd9-cbd0aca251d7)

***
학원에서 배운 내용을 복습하며 정리했습니다.
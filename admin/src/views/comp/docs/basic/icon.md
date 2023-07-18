---
title: icon
date: 2023-05-02 20:50:25
path: /pages/icon
category:
  - api
  - basic
---


# Icon

图标 [图标资源地址](https://icon-sets.iconify.design/)

<!-- more -->

## 基础用法

{{ basic }}

## 大小

{{ size }}

## 颜色

自定义颜色以及通过 `hoverColor` 设置滑入时的颜色

{{ color }}

## 手指样式

`cursor: pointer`

{{ pointer }}

## 旋转

rotateSpeed 可设置旋转速度

{{ rotate }}

## 图片图标

{{ image }}

## Iconfont 图标

{{ iconfont }}

## API

### Attributes

| 属性名         | 说明                                       | 类型              | 默认值   |
|-------------|------------------------------------------|-----------------|-------|
| icon        | 图标 _*_ https://icon-sets.iconify.design/ | string          | -     |
| size        | 图标大小                                     | string / number | -     |
| color       | 图标颜色                                     | string          | -     |
| hoverColor  | 滑入图标时的颜色                                 | string          | -     |
| rotate      | 是否旋转                                     | boolean         | false |
| rotateSpeed | 旋转速度                                     | number          | 2     |
| pointer      | 手指样式                                     | boolean         | false |

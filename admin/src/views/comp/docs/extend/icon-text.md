---
title: icon-text
date: 2023-04-07 15:25:11
path: /pages/icon-text
category:
  - api
  - extend
---

# IconText

文字与图标组合
<!-- more -->
## 基础用法

{{ basic }}

## 自定义大小

{{ size }}

## 颜色

{{ color }}

## 翻转

{{ reverse }}

## 图标文字边距

{{ distance }}

## 文字图标排列方向

{{ direction }}

## API

### Attributes

| 属性名        | 说明        | 类型                 | 默认值   |
|------------|-----------|--------------------|-------|
| text       | 文本 _\*_   | string             | —     |
| icon       | 图标 _\*_   | IconProps / string | —     |
| color      | 颜色        | string             | —     |
| hoverColor | 滑入颜色      | string             | —     |
| distance   | 图标与文字之间距离 | string / number    | —     |
| reverse    | 图标与文字位置翻转 | boolean            | false |
| size       | 大小        | string / number    | —     |
| direction  | 文字图标排列方向  | 'col' \| 'row'     | -     |
| pointer    | 手指样式      | boolean            | false |

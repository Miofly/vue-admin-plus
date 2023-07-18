---
title: avatar
date: 2023-05-02 21:10:50
path: /pages/avatar
category:
  - api
  - basic
---

# Avatar

Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。

<!-- more -->

## 基础用法

使用 `shape` 和 `size` 属性来设置 Avatar 的形状和大小。

{{ basic }}

## 展示类型

支持使用图片，图标或者文字作为 Avatar。

{{ types }}

## 回退行为

图片加载失败时的回退行为。

{{ fallback }}

## 适应容器

当使用图片作为用户头像时，设置该图片如何在容器中展示。与[ object-fit ](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
属性一致

{{ fit }}

## API

### Attributes

| 属性名     | 说明                           | 类型                                                        | 默认值     |
|---------|------------------------------|-----------------------------------------------------------|---------|
| icon    | 设置 Avatar 的图标类型，具体参考 Icon 组件 | string / IconProps                                        | —       |
| size    | Avatar 大小                    | number / 'large' \| 'default' \| 'small'`                 | default |
| shape   | Avatar 形状                    | 'circle' \| 'square'`                                     | circle  |
| src     | Avatar 图片的源地址                | `string`                                                  | —       |
| src-set | 图片 Avatar 的原生 `srcset` 属性    | `string`                                                  | —       |
| alt     | 图片 Avatar 的原生 `alt` 属性       | `string`                                                  | —       |
| fit     | 当展示类型为图片的时候，设置图片如何适应容器       | 'fill' \| 'contain' \| 'cover' \| 'none' \| 'scale-down'` | cover   |

### Events

| 属性名   | 说明        | 类型                   |
|-------|-----------|----------------------|
| error | 图片加载失败时触发 | `(e: Event) => void` |

### Slots

| 插槽名     | 说明        |
|---------|-----------|
| default | 自定义头像展示内容 |

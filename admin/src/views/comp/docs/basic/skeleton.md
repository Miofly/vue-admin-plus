---
title: skeleton
date: 2023-05-02 21:18:28
path: /pages/skeleton
category:
  - api
  - basic
---


# Skeleton

在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading 的视觉效果更好。

<!-- more -->

## 基础用法

基础的骨架效果。

{{ basic-usage }}

## 更多参数

可以配置骨架屏段落数量，以便更接近真实渲染效果。显示的数量会比传入的数量多 1，首行会被渲染一个长度 33%
的段首。

{{ configurable-rows }}

## 动画效果

我们提供了一个开关标志，表明是否显示加载动画， 调用 `animated` 如果真真是这样，所有的 `vft-skeleton`
的子节点将显示动画。

{{ animation }}

## 自定义样式

Vft 提供的排版模式有时候并不满足要求，当您想要用自己定义的模板时，可以通过一个具名
Slot `template` 来自己设定模板。

我们提供了不同的模板单元可供使用，具体可选值请看 API 详细描述。 另外，在构建您自己自定义的骨架时，您应该尽可能更接近于真正的DOM。
避免DOM因高度差而发生抖动。

{{ customized-template }}

## 加载状态

当 `Loading` 结束之后，我们往往需要显示真实的 UI， 可以通过 `loading` 属性的值来控制是否显示加载后的
DOM。 也可以通过具名插槽 `default` 来构建 loading 结束之后需要展示的真实 DOM 元素结构。

{{ loading-state }}

## 渲染多条数据

大多时候, 骨架屏都被用来渲染列表, 当我们需要在从服务器获取数据的时候来渲染一个假的 UI。 利用 `count`
这个属性就能控制渲染多少条假的数据在页面上

我们不推荐在浏览器中渲染过多的虚假 UI 元素，这样会消耗更多时间销毁骨架元素，从而引起性能问题。
为了用户体验，请尽量将 `count` 值保持在小一点的数值。

{{ rendering-with-data }}

## 防止渲染抖动

有的时候，API 的请求回来的特别快，往往骨架占位刚刚被渲染，真实的数据就已经回来了，用户的界面会突然一闪，
此时为了避免这种情况，就需要通过 `throttle` 属性来避免这个问题。

{{ avoiding-rendering-bouncing }}

## Skeleton API

### Skeleton 属性

| 属性名      | 说明                              | 类型         | 默认值   |
| -------- | ------------------------------- | ---------- | ----- |
| animated | 是否使用动画                          | boolean | false |
| count    | 渲染多少个 template, 建议使用尽可能小的数字     | number  | 1     |
| loading  | 是否显示加载结束后的 DOM 结构               | boolean | false |
| rows     | 骨架屏段落数量                         | number  | 3     |
| throttle | rendering delay in milliseconds | number  | 0     |

### Skeleton 插槽

| 插槽名      | 说明                                     | 作用域                        |
| -------- | -------------------------------------- | -------------------------- |
| default  | real rendering DOM                     | ^[object]`$attrs`          |
| template | content as rendering skeleton template | ^[object]`{ key: number }` |

## SkeletonItem API

### SkeletonItem Attributes

| 属性名     | 说明                                  | 类型                                                                                                       | 默认值  |
| ------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------- | ---- |
| variant | the current rendering skeleton type | 'p' \| 'text' \| 'h1' \| 'h3' \| 'caption' \| 'button' \| 'image' \| 'circle' \| 'rect'` | text |

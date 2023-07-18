---
title: switch
date: 2023-05-02 21:18:28
path: /pages/switch
category:
  - api
  - basic
---


# Switch

表示两种相互对立的状态间的切换，多用于触发「开/关」。

<!-- more -->

## 基础用法

绑定 `v-model` 到一个 `Boolean` 类型的变量。 可以使用 `--vft-switch-on-color`
属性与 `--vft-switch-off-color` 属性来设置开关的背景色。

{{ basic }}

## 尺寸

{{ sizes }}

## 文字描述

使用`active-text`属性与`inactive-text`属性来设置开关的文字描述。 使用 `inline-prompt` 属性来控制文本是否显示在点内。

使用`active-text`属性与`inactive-text`属性来设置开关的文字描述。

{{ text-description }}

## 显示自定义图标

使用 `inactive-icon` 和 `active-icon` 属性来添加图标。 您可以传递组件属性名的字符串（提前注册）或组件本身是一个
SVG Vue 组件。 Vft 提供了一组图标，您可以在 [icon component](/zh-CN/component/icon) 查看。

使用 `inactive-icon` 和 `active-icon` 属性来添加图标。 使用 `inline-prompt` 属性来控制图标显示在点内。

{{ custom-icons }}

## 扩展的 value 类型

你可以设置 `active-value` 和 `inactive-value` 属性， 它们接受 `Boolean`、`String` 或 `Number`
类型的值。

{{ extended-value-types }}

## 禁用状态

设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用。

{{ disabled }}

## 加载状态

设置`loading`属性，接受一个`Boolean`，设置`true`即加载中状态。

{{ loading }}

## 阻止切换

设置`beforeChange`属性，若返回 false 或者返回 Promise 且被 reject，则停止切换。

{{ prevent-switching }}

## Attributes

| 属性名                   | 说明                                                          | 类型                                            | 可选值                     | 默认值     |
| --------------------- | ----------------------------------------------------------- | --------------------------------------------- | ----------------------- | ------- |
| model-value / v-model | 绑定值，必须等于 `active-value` 或 `inactive-value`，默认为 `Boolean` 类型 | boolean / string / number                     | —                       | —       |
| disabled              | 是否禁用                                                        | boolean                                       | —                       | false   |
| loading               | 是否显示加载中                                                     | boolean                                       | —                       | false   |
| size                  | switch 的大小                                                  | string                                        | large / default / small | default |
| width                 | switch 的宽度                                                  | number / string                               | —                       | —       |
| inline-prompt         | 无论图标或文本是否显示在点内，只会呈现文本的第一个字符                                 | boolean                                       | —                       | false   |
| active-icon           | switch 状态为 `on` 时所显示图标，设置此项会忽略 `active-text`                | `string \| Component`                        | —                       | —       |
| inactive-icon         | switch 状态为 `off` 时所显示图标，设置此项会忽略 `inactive-text`             | `string \| Component`                        | —                       | —       |
| active-text           | switch 打开时的文字描述                                             | string                                        | —                       | —       |
| inactive-text         | switch 的状态为 `off` 时的文字描述                                    | string                                        | —                       | —       |
| active-value          | switch 状态为 `on` 时的值                                         | boolean / string / number                     | —                       | true    |
| inactive-value        | switch的状态为 `off` 时的值                                        | boolean / string / number                     | —                       | false   |
| active-color          | 当在 `on` 状态时的背景颜色(已废弃，请使用 CSS var `--vft-switch-on-color` )   | string                                        | —                       | —       |
| inactive-color        | `off` 状态时的背景颜色(已废弃，使用 CSS var `--vft-switch-of-color` )      | string                                        | —                       | —       |
| border-color          | 开关的边框颜色 ( 已废弃，使用 CSS var `--vft-switch-border-color` )       | string                                        | —                       | —       |
| name                  | switch 对应的 name 属性                                          | string                                        | —                       | —       |
| validate-event        | 改变 switch 状态时是否触发表单的校验                                      | boolean                                       | —                       | true    |
| before-change         | switch 状态改变前的钩子， 返回 `false` 或者返回 `Promise` 且被 reject 则停止切换  | `() => Promise<boolean> \| boolean` | —                       | —       |

## Events

| 事件名    | 说明                  | 回调参数      |
| ------ | ------------------- | --------- |
| change | switch 状态发生变化时的回调函数 | val，新状态的值 |

## 方法

| 方法    | 说明            | 参数 |
| ----- | ------------- | -- |
| focus | 使 Switch 获取焦点 | —  |

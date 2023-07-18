---
title: button
date: 2023-05-02 21:08:47
path: /pages/button
category:
  - api
  - basic
---


# Button

常用的操作按钮。

<!-- more -->

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

{{ basic }}

## 禁用状态

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

{{ disabled }}

## 链接按钮

{{ link }}

## 文字按钮

{{ text }}

## 图标按钮

{{ icon }}

## 按钮组

使用 `<vft-button-group>` 对多个按钮分组。

{{ group }}

## 加载状态按钮

点击按钮来加载数据，并向用户反馈加载状态。

通过设置 `loading` 属性为 `true` 来显示加载中状态。

您可以使用 `loading` 插槽或 `loadingIcon`属性自定义您的loading图标

ps: `loading` 插槽优先级高于`loadingIcon`属性

{{ loading }}

## 调整尺寸

使用 `size` 属性额外配置尺寸，可使用 `large` 和 `small` 两种值。

{{ size }}

## 自定义颜色

您可以自定义按钮颜色。

我们将自动计算 hover 和 active 颜色。

{{ custom }}

## Button API

### Button Attributes

| 属性名                                | 说明                                      | 类型                                                         | 默认值     |
|------------------------------------|-----------------------------------------|------------------------------------------------------------|---------|
| size                               | 尺寸                                      | large default small                                        | —       |
| type                               | 类型                                      | 'primary' \| 'success' \| 'warning'  \| 'danger' \| 'info' | —       |
| plain                              | 是否为朴素按钮                                 | boolean                                                    | false   |
| text                               | 是否为文字按钮                                 | boolean                                                    | false   |
| bg                                 | 是否显示文字按钮背景颜色                            | boolean                                                    | false   |
| link<VersionTag version="2.2.1" /> | 是否为链接按钮                                 | boolean                                                    | false   |
| round                              | 是否为圆角按钮                                 | boolean                                                    | false   |
| circle                             | 是否为圆形按钮                                 | boolean                                                    | false   |
| loading                            | 是否为加载中状态                                | boolean                                                    | false   |
| loading-icon                       | 自定义加载中状态图标组件                            | `string` `Component`                                       | Loading |
| disabled                           | 按钮是否为禁用状态                               | boolean                                                    | false   |
| icon                               | 图标组件                                    | `string`  `Component`                                      | —       |
| autofocus                          | 原生`autofocus` 属性                        | boolean                                                    | false   |
| native-type                        | 原生 type 属性                              | `button` `submit` `reset`                                  | button  |
| auto-insert-space                  | 自动在两个中文字符之间插入空格                         | boolean                                                    | —       |
| color                              | 自定义按钮颜色, 并自动计算`hover` 和 `active` 触发后的颜色 | string                                                     | —       |
| dark                               | dark 模式, 意味着自动设置`color` 为 dark 模式的颜色    | boolean                                                    | false   |

### Button Slots

| 插槽名     | 说明       |
|---------|----------|
| default | 自定义默认内容  |
| loading | 自定义加载中组件 |
| icon    | 自定义图标组件  |

### Button Exposes

| 属性名            | 说明            | 类型                                                                                             |
|----------------|---------------|------------------------------------------------------------------------------------------------|
| ref            | 按钮 html 元素    | `Ref<HTMLButtonElement>`                                                                       |
| size           | 按钮尺寸          | `ComputedRef<''` `'small'` `'default'` `'large'>`                                              |
| type           | 按钮类型          | `ComputedRef<''` `'default'` `'primary'` `'success'` `'warning'` `'info'` `'danger'` `'text'>` |
| disabled       | 按钮已禁用         | `ComputedRef<boolean>`                                                                         |
| shouldAddSpace | 是否在两个字符之间插入空格 | `ComputedRef<boolean>`                                                                         |

## ButtonGroup API

### ButtonGroup Attributes

|  插槽名 | 说明             | 类型                                             | 默认值 |
|-----:|----------------|------------------------------------------------|-----|
| size | 用于控制该按钮组内按钮的大小 | `large` \| `small` \|                          |     |
| type | 用于控制该按钮组内按钮的类型 | 'primary` `success` `warning` `danger` `info'` | —   |

### ButtonGroup Slots

| 插槽名     | 说明       | 子标签    |
|---------|----------|--------|
| default | 自定义按钮组内容 | Button |

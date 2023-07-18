---
title: link
date: 2023-05-02 21:18:28
path: /pages/link
category:
  - api
  - basic
---


# Link

文字超链接

<!-- more -->

## 基础用法

基础的文字链接用法。

{{ basic }}

## 禁用状态

文字链接不可用状态。

{{ disabled }}

## 下划线

文字链接下划线。

{{ underline }}

## 图标

带图标的链接

使用 `icon` 属性来为按钮添加图标。 您可以传递组件属性名的字符串（提前注册）或组件本身是一个 SVG Vue 组件。
Vft 提供了一组图标，您可以在 [icon component](/zh-CN/component/icon)

{{ with-icon }}

## Link API

### Attributes

| 属性名       | 说明         | 类型                                                                                   | 默认值     |
| --------- | ---------- | ------------------------------------------------------------------------------------ | ------- |
| type      | 类型         | 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` | default |
| underline | 是否下划线      | boolean                                                                           | true    |
| disabled  | 是否禁用状态     | boolean                                                                           | false   |
| href      | 原生 href 属性 | string                                                                            | —       |
| icon      | 图标组件       | string / ^[Component]                                                             | —       |

### Slots

| 插槽名     | 说明      |
| ------- | ------- |
| default | 自定义默认内容 |
| icon    | 自定义图标组件 |

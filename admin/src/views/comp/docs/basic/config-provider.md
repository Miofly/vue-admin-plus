---
title: config-provider
date: 2023-05-02 21:14:27
path: /pages/config-provider
category:
  - api
  - basic
---


# Config Provider

Config Provider 被用来提供全局的配置选项，让你的配置能够在全局都能够被访问到。

<!-- more -->

## i18n 配置

通过 Config Provider 来配置多语言，让你的应用可以随时切换语言。

使用两个属性来提供 i18n 相关配置

{{ usage }}

## 对按钮进行配置

{{ button }}

## 对消息进行配置

{{ message }}

## 实验性功能

在本节中，您可以学习如何使用 Config Provider 来提供实验性功能。
现在，我们还没有添加任何实验性功能，但在未来的规划中，我们将添加一些实验性功能。 您可以使用此配置来管理这些功能。

## API

### Config Provider Attributes

| 属性名                   | 说明                                                                                                                                     | 类型                                                                                                                                                                                                                                                             | 默认值                                                                                    |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| locale                | 翻译文本对象                                                                                                                                 | ^[object]`{name: string, el: TranslatePair}`[](https://github.com/element-plus/element-plus/blob/a98ff9b40c0c3d2b9959f99919bd8363e3e3c25a/packages/locale/index.ts#L5) [languages](https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang) | [en](https://github.com/element-plus/element-plus/blob/dev/packages/locale/lang/en.ts) |
| size                  | 全局组件大小                                                                                                                                 | 'large' \| 'default' \| 'small'`                                                                                                                                                                                                                     | default                                                                                |
| zIndex                | 全局初始化 zIndex 的值                                                                                                                        | number                                                                                                                                                                                                                                                      | —                                                                                      |
| namespace             | 全局组件类属性名前缀 (需要配合 [$namespace](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/mixins/config.scss#L1) 使用) | string                                                                                                                                                                                                                                                      | el                                                                                     |
| button                | 按钮相关的配置[详细配置见下表](#button-attributes)                                                                                                   | ^[object]`{autoInsertSpace?: boolean}`                                                                                                                                                                                                                         | 详见下表                                                                                   |
| message               | 消息相关配置， [详见下表](#message-attributes)                                                                                                    | ^[object]`{max?: number}`                                                                                                                                                                                                                                      | 详见下表                                                                                   |
| experimental-features | 将要添加的实验阶段的功能，所有功能都是默认设置为 false                                                                                                         | ^[object]                                                                                                                                                                                                                                                      | —                                                                                      |

### Button Attribute

| 参数              | 描述              | 类型         | 默认值   |
| --------------- | --------------- | ---------- | ----- |
| autoInsertSpace | 自动在两个中文字符之间插入空格 | boolean | false |

### Message Attribute

| 参数  | 描述           | 类型        | 默认值 |
| --- | ------------ | --------- | --- |
| max | 可同时显示的消息最大数量 | number | —   |

### Config Provider Slots

| 属性名      | 描述      | Scope                 |
| ------- | ------- | --------------------- |
| default | 自定义默认内容 | config: 提供全局配置（从顶部继承） |

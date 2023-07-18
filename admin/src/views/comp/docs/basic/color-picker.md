---
title: color-picker
date: 2023-05-02 21:14:27
path: /pages/color-picker
category:
  - api
  - basic
---


# ColorPicker

用于颜色选择，支持多种格式。

<!-- more -->

## 基础用法

使用 v-model 与 Vue 实例中的一个变量进行双向绑定，绑定的变量需要是字符串类型。

{{ basic }}

## 选择透明度

ColorPicker 支持普通颜色，也支持带 Alpha 通道的颜色，通过`show-alpha`属性即可控制是否支持透明度的选择。
要启用 Alpha 选择，只需添加 `show-alpha` 属性。

{{ alpha }}

## 预定义颜色

ColorPicker 支持预定义颜色

{{ predefined-color }}

## 不同尺寸

{{ sizes }}

## API

### Attributes

| 属性名                   | 说明                       | 类型                                                                                                                    | 默认值   |
| --------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------- | ----- |
| model-value / v-model | 选中项绑定值                   | string                                                                                                             | —     |
| disabled              | 是否禁用                     | boolean                                                                                                            | false |
| size                  | 尺寸                       | 'large' \| 'default' \| 'small'`                                                                            | —     |
| show-alpha            | 是否支持透明度选择                | boolean                                                                                                            | false |
| color-format          | 写入 v-model 的颜色的格式        | 'hsl' \| 'hsv' \| 'hex' \| 'rgb' \| 'hex' (when show-alpha is false) \| 'rgb' (when show-alpha is true)` | —     |
| popper-class          | ColorPicker 下拉框的类名       | string                                                                                                             | —     |
| predefine             | 预定义颜色                    | ^[object]`string[]`                                                                                                   | —     |
| validate-event        | 输入时是否触发表单的校验             | boolean                                                                                                            | true  |
| tabindex              | ColorPicker 的 tabindex   | string / number                                                                                                 | 0     |
| label<A11yTag/>       | ColorPicker 的 aria-label | string                                                                                                             | —     |
| id                    | ColorPicker 的 id         | string                                                                                                             | —     |

### Events

| 事件名           | 说明                | 类型                                      |
| ------------- | ----------------- | --------------------------------------- |
| change        | 当绑定值变化时触发         | `(value: string) => void` |
| active-change | 面板中当前显示的颜色发生改变时触发 | `(value: string) => void` |

### Exposes

| 属性名    | 说明        | 类型                         |
| ----- | --------- | -------------------------- |
| color | 当前色彩对象    | ^[object]`Color`           |
| show  | 手动显示颜色选择器 | `() => void` |
| hide  | 手动隐藏颜色选择器 | `() => void` |

---
title: time-picker
date: 2023-05-02 21:14:27
path: /pages/time-picker
category:
  - api
  - basic
---


# TimePicker

用于选择或输入日期
<!-- more -->
## 任意时间点

可以选择任意时间

提供了两种交互方式：默认情况下通过鼠标滚轮进行选择，打开`arrow-control`属性则通过界面上的箭头进行选择。

{{ basic }}

## 限制时间选择范围

您也可以限制时间选择范围。

通过 `disabledHours`，`disabledMinutes` 和 `disabledSeconds` 限制可选时间范围。,

{{ basic-range }}

## 任意时间范围

可选择任意的时间范围

添加`is-range`属性即可选择时间范围。 同样支持 `arrow-control` 属性。

{{ range }}

## API

### Attributes

| 属性名                   | 说明                           | 类型                                                                                                 | 默认值        |
| --------------------- | ---------------------------- | -------------------------------------------------------------------------------------------------- | ----------- |
| model-value / v-model | 绑定值，如果它是数组，长度应该是 2           | number / string / ^[object]`Date \| [Date, Date] \| [number, number] \| [string, string]` | —           |
| readonly              | 完全只读                         | boolean                                                                                         | false       |
| disabled              | 禁用                           | boolean                                                                                         | false       |
| editable              | 文本框可输入                       | boolean                                                                                         | true        |
| clearable             | 是否显示清除按钮                     | boolean                                                                                         | true        |
| size                  | 输入框尺寸                        | 'large' \| 'default' \| 'small'`                                                         | —           |
| placeholder           | 非范围选择时的占位内容                  | string                                                                                          | —           |
| start-placeholder     | 范围选择时开始日期的占位内容               | string                                                                                          | —           |
| end-placeholder       | 范围选择时结束日期的占位内容               | string                                                                                          | —           |
| is-range              | 是否为时间范围选择                    | boolean                                                                                         | false       |
| arrow-control         | 是否使用箭头进行时间选择                 | boolean                                                                                         | false       |
| popper-class          | TimePicker 下拉框的类名            | string                                                                                          | —           |
| range-separator       | 选择范围时的分隔符                    | string                                                                                          | '-'         |
| format                | 显示在输入框中的格式                   | string see [date formats](/en-US/component/date-picker#date-formats)                            | —           |
| default-value         | 可选，选择器打开时默认显示的时间             | ^[Date] / ^[array]`[Date, Date]`                                                                   | —           |
| id                    | 等价于原生 input `id` 属性          | string / ^[array]`[string, string]`                                                             | —           |
| name                  | 等价于原生 input `name` 属性        | string                                                                                          | —           |
| label ^(a11y)         | 等价于原生 input `aria-label` 属性  | string                                                                                          | —           |
| prefix-icon           | 自定义前缀图标                      | string / ^[Component]                                                                           | Clock       |
| clear-icon            | 自定义清除图标                      | string / ^[Component]                                                                           | CircleClose |
| disabled-hours        | 禁止选择部分小时选项                   | `(role: string, comparingDate?: Dayjs) => number[]`                                  | —           |
| disabled-minutes      | 禁止选择部分分钟选项                   | `(hour: number, role: string, comparingDate?: Dayjs) => number[]`                    | —           |
| disabled-seconds      | 禁止选择部分秒选项                    | `(hour: number, minute: number, role: string, comparingDate?: Dayjs) => number[]`    | —           |
| teleported            | 是否将 popover 的下拉列表镜像至 body 元素 | boolean                                                                                         | true        |
| tabindex              | 输入框的 tabindex                | string / number                                                                              | 0           |

### Events

| 事件名            | 说明                         | 类型                                                                                                                   |
| -------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| change         | 用户确认选定的值时触发                | `(val: number \| string \| Date \| [number, number] \| [string, string] \| [Date, Date]) => void` |
| blur           | 在组件 Input 失去焦点时触发          | `(e: FocusEvent) => void`                                                                              |
| focus          | 在组件 Input 获得焦点时触发          | `(e: FocusEvent) => void`                                                                              |
| visible-change | 当 TimePicker 的下拉列表出现/消失时触发 | `(visibility: boolean) => void`                                                                        |

### Exposes

| 属性名          | 说明           | 类型                                     |
| ----------- | ------------ |----------------------------------------|
| focus       | 使 input 获取焦点 | `(e: FocusEvent \| undefined) => void` |
| blur        | 使 input 失去焦点 | `(e: FocusEvent \| undefined) => void` |
| handleOpen  | 打开时间选择器弹窗    | `() => void`                           |
| handleClose | 关闭时间选择器弹窗    | `() => void`                           |

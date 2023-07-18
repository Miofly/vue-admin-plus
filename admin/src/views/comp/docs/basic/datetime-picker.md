---
title: datetime-picker
date: 2023-05-02 21:14:27
path: /pages/datetime-picker
category:
  - api
  - basic
---


# DateTimePicker

在同一个选择器里选择日期和时间

日期时间选择器来自日期选择器和时间选择器的组合。 关于属性的更详细解释，请参阅日期选择器和时间选择器。
<!-- more -->
## 日期和时间点

通过设置`type`属性为`datetime`，即可在同一个选择器里同时进行日期和时间的选择。 快捷方式的使用方法与
Date Picker 相同。

{{ date-and-time }}

## 日期时间格式

使用`format`指定输入框的格式。 使用`value-format`指定绑定值的格式。

默认情况下，组件接受并返回`Date`对象。

在 [这里](https://day.js.org/docs/en/display/format#list-of-all-available-formats) 查看 Day.js
支持的所有格式。 

请一定要注意传入参数的大小写是否正确 }}

{{ date-and-time-formats }}

## 日期和时间范围

设置`type`为`datetimerange`即可选择日期和时间范围

{{ date-and-time-range }}

## 默认的起始与结束时刻

使用`datetimerange`
进行范围选择时，在日期选择面板中选定起始与结束的日期，默认会使用该日期的`00:00:00`
作为起始与结束的时刻；通过选项`default-time`可以控制选中起始与结束日期时所使用的具体时刻。
我们可以使用 `default-time` 属性来控制它。 `default-time`接受一个数组，其中第一项控制起始日期的具体时刻，第二项控制结束日期的具体时刻。
第一项控制开始日期的时间值，第二项控制结束日期的时间值。

{{ default-time }}

## Attributes

| 属性名                   | 说明                                                    | 类型                                               | 可选值                                                           | 默认值                 |
| --------------------- | ----------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------- | ------------------- |
| model-value / v-model | 绑定值，如果它是数组，长度应该是 2                                    | Date / number / string / Array                   | —                                                             | —                   |
| readonly              | 只读                                                    | boolean                                          | —                                                             | false               |
| disabled              | 禁用                                                    | boolean                                          | —                                                             | false               |
| editable              | 文本框可输入                                                | boolean                                          | —                                                             | true                |
| clearable             | 是否显示清除按钮                                              | boolean                                          | —                                                             | true                |
| size                  | 输入框尺寸                                                 | string                                           | large/default/small                                           | default             |
| placeholder           | 非范围选择时的占位内容                                           | string                                           | —                                                             | —                   |
| start-placeholder     | 范围选择时开始日期的占位内容                                        | string                                           | —                                                             | —                   |
| end-placeholder       | 范围选择时结束日期的占位内容                                        | string                                           | —                                                             | —                   |
| time-arrow-control    | whether to pick time using arrow buttons              | boolean                                          | —                                                             | false               |
| type                  | 显示类型                                                  | string                                           | year/month/date/datetime/ week/datetimerange/daterange        | date                |
| format                | 显示在输入框中的格式                                            | string                                           | see [date formats](/en-US/component/date-picker#date-formats) | YYYY-MM-DD HH:mm:ss |
| popper-class          | DateTimePicker 下拉框的类名                                 | string                                           | —                                                             | —                   |
| range-separator       | 选择范围时的分隔符                                             | string                                           | —                                                             | '-'                 |
| default-value         | 可选，选择器打开时默认显示的时间                                      | Date / [Date, Date]                              |                                                               | —                   |
| default-time          | 选择日期后的默认时间值。 如未指定则默认时间值为 `00:00:00`                   | Date / [Date, Date]                              | —                                                             | —                   |
| value-format          | 可选，绑定值的格式。 不指定则绑定值为 Date 对象                           | string                                           | 查看 [日期格式](https://day.js.org/docs/en/display/format)          | —                   |
| id                    | 等价于原生 input `id` 属性                                   | string / [string, string]                        | —                                                             | —                   |
| name                  | 等价于原生 input `name` 属性                                 | string                                           | —                                                             | —                   |
| unlink-panels         | 在范围选择器里取消两个日期面板之间的联动                                  | boolean                                          | —                                                             | false               |
| prefix-icon           | 自定义前缀图标                                               | `string \| Component`                           | —                                                             | Date                |
| clear-icon            | 自定义清除图标                                               | `string \| Component`                           | —                                                             | CircleClose         |
| shortcuts             | 设置快捷选项，需要传入数组对象                                       | object[{ text: string, value: date / function }] | —                                                             | —                   |
| disabled-date         | 一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。 应该返回一个 Boolean 值。 | Function(Date)                                   | —                                                             | —                   |
| cell-class-name       | 设置自定义类名                                               | Function(Date)                                   | —                                                             | —                   |
| teleported            | 是否将 datetime-picker 的下拉列表插入至 body 元素                  | boolean                                          | true / false                                                  | true                |

## Events

| 事件名             | 说明                                                            | 回调参数               |
| --------------- | ------------------------------------------------------------- | ------------------ |
| change          | 用户确认选定的值时触发                                                   | value              |
| blur            | 在组件 Input 失去焦点时触发                                             | `(e: FocusEvent)`  |
| focus           | 在组件 Input 获得焦点时触发                                             | `(e: FocusEvent)`  |
| calendar-change | 如果用户没有选择日期，那默认展示当前日的月份。 选中日历日期后会执行的回调，只有当 `datetimerange` 才生效 | [Date, Date]       |
| visible-change  | 当 DateTimePicker 的下拉列表出现/消失时触发                                | 出现时为true，隐藏时为false |

## Methods

| 方法名   | 说明           | 参数 |
| ----- | ------------ | -- |
| focus | 使 input 获取焦点 | —  |

## Slots

| 插槽名             | 说明         |
| --------------- | ---------- |
| default         | 自定义单元格内容   |
| range-separator | 自定义范围分割符内容 |

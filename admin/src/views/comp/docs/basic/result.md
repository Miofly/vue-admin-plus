---
title: result
date: 2023-05-02 21:10:50
path: /pages/result
category:
  - api
  - basic
---


# Result

用于对用户的操作结果或者异常状态做反馈。

<!-- more -->

## 基础用法

{{ basic-usage }}

## 自定义内容

{{ customized-content }}

## API

### Attributes

| 属性名       | 说明             | 类型                                                      | 默认值  |
| --------- | -------------- | ------------------------------------------------------- | ---- |
| title     | result 组件的标题   | string                                               | ''   |
| sub-title | result 组件的副标题  | string                                               | ''   |
| icon      | result 组件的图标类型 | 'success' \| 'warning' \| 'info' \| 'error'` | info |

### Slots

| 属性名        | 说明                           |
| --------- | ---------------------------- |
| icon      | content as result icon       |
| title     | content as result title      |
| sub-title | content as result sub title  |
| extra     | content as result extra area |

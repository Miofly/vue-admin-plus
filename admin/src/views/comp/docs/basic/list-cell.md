---
title: list-cell
date: 2023-05-02 20:50:25
path: /pages/list-cell
category:
  - api
  - basic
---


# ListCell

菜单列表

<!-- more -->

## 基础用法

{{ basic }}

## API

### Attributes

| 属性名              | 说明       | 类型                                                                                                                             | 默认值 |
|------------------|----------|--------------------------------------------------------------------------------------------------------------------------------|-----|
| list             | 文本 _*_   | `Array<{ leftIcon?: string \| IconProps;rightIcon?: string \| IconProps;text: string;rightContent?: any;[key: string]: any }>` | []  |
| cellHeight       | 单元格高度    | string / number                                                                                                                | 50  |
| leftTextDistance | 左侧图标文字间距 | string / number                                                                                                                | 8   |
| activeIndex      | 默认激活的列表项 | number                                                                                                                         | -   |

### Events

| 事件名        | 说明    | 类型                                                    |
|------------|-------|-------------------------------------------------------|
| item-click | 菜单项点击 | `(item: ListItem, index?: number) => void` |

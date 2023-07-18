---
title: table
date: 2023-04-07 15:25:11
path: /pages/table
category:
  - api
  - basic
---

# Table

<!-- more -->

## 基础用法

{{ basic }}

## 自定义

{{ custom }}

## API

### Attributes

| 属性名           | 说明               | 类型                                                           | 默认值          |
|---------------|------------------|--------------------------------------------------------------|--------------|
| maxHeight     | 最大高度，设置后自动开启虚拟滚动 | number                                                       | —            |
| columns       | 列配置项	            | IColumnsOption[]                                             | —            |
| data          | 表格数据	            | any[]                                                        | —            |
| loading       | 是否在加载中	          | boolean                                                      | false        |
| height        | 表格高度	            | number \| string                                             | -            |
| pageSize      | 分页页数	            | number                                                       | 50           |
| pageNum       | 页码               | number                                                       | —            |
| total         | 总数               | string / number                                              | —            |
| defaultSort   | 默认排序             | IDefaultSort                                                 | true         |
| tableConfig   | 表格配置             | TableConfigProps                                             | —            |
| sticky        | 滚动条是否固定在底部       | boolean \| stickyOption                                      | —            |
| pagePlacement | 分页器位置            | 'bottom-left' \| 'bottom-right' \| 'top-left' \| 'top-right' | bottom-right |
| pageOptions   | 分页器配置            | `Partial<PaginationProps>`                                     | —            |

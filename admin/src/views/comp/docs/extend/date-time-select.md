---
title: date-time-select
date: 2023-04-07 15:25:11
path: /pages/date-time-select
category:
  - api
  - extend
---

# DateTimeSelect

自定义时间选择器
<!-- more -->
## 基础用法

{{ basic }}

## 自定义

{{ custom }}

## API

### Attributes

| 属性名        | 说明        | 类型                                                                                                                        | 默认值   |
|------------|-----------|---------------------------------------------------------------------------------------------------------------------------|-------|
| dateList       | 时间配置 _\*_ | `{count: number; text: string; type: DateType; startOfType: DateType; endOfType: DateType; format: string; dateRange: boolean;}[][]` | —     |
| defaultFormat  | 默认时间格式化值  | string                                                                                                                    | —     |
| placement      | tootip 位置 | 'top-start'  \| 'top-end' \| 'bottom-start' \| 'bottom-end' \| 'right-start' \| 'right-end' \| 'left-start' \| 'left-end' | —     |

```typescript
export type DateType = 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year' | 'date'

export interface DateConfigProps {
  /** 向前或者向后时间的数组，负值为向前 */
  count: number
  /** 描述文字 */
  text: string
  /** 时间类型 */
  type: DateType
  /** 开始时间的类型 */
  startOfType: DateType
  /** 结束时间的类型 */
  endOfType: DateType
  /** 日期格式化 */
  format: string
  /** 是否返回日期范围，默认 true */
  dateRange: boolean
}
```

### Events

| 事件名    | 说明       | 类型                                   |
|--------|----------|--------------------------------------|
| change | 时间选择完成回调 | `(data: string \| string[]) => void` |

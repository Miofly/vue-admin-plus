---
title: search
date: 2023-04-07 15:25:11
path: /pages/search
category:
  - api
  - extend
---

# Search

搜索，以及搜索框
<!-- more -->
## 基础用法

{{ basic }}

## 不使用 popover

{{ use-popover }}

## 自定义

{{ custom }}

## API

### Attributes

| 属性名         | 说明                                     | 类型                 | 默认值                                                          |
|-------------|----------------------------------------|--------------------|--------------------------------------------------------------|
| modelValue  | 绑定值 _*_                                | string / number    | —                                                            |
| placeholder | 搜索框占位文本	                               | string             | —                                                            |
| prefixIcon  | 自定义前缀图标	                               | IconProps / string | —                                                            |
| suffixIcon  | 自定义后缀图标	                               | IconProps / string | `{ icon: 'ico-ep:search', color: '#8B8C8C', pointer: true }` |
| clearable   | 是否显示清除按钮，只有当 `type` 不是 `textarea` 时生效	 | boolean            | true                                                         |
| clearIcon   | 自定义清除图标	                               | IconProps / string | —                                                            |
| width       | 搜索框宽度                                  | string / number    | 200                                                          |
| activeWidth | 搜索框聚焦时的宽度                              | string / number    | —                                                            |
| usePopover  | 是否使用 `popover`                         | boolean            | true                                                         |
| popoverCfg  | `popover` 自定义配置                        | PopoverProps       | —                                                            |

### Events

| 事件名               | 说明                           | 类型                                     |
|-------------------|------------------------------|----------------------------------------|
| update:modelValue | 搜索框值改变                       | `(val: string / number) => void`       |
| blur              | 当选择器的搜索框失去焦点时触发              | `() => void`                           |
| focus             | 当选择器的搜索框获得焦点时触发              | `() => void`                           |
| clear             | 点击由 `clearable` 属性生成的清空按钮时触发 | `() => void`                           |
| enter             | 用户按 Enter 时触发                | `(val: string / number) => void`       |
| prefixClick       | 前置插槽点击事件                     | `(val: string / number) => void`       |
| suffixClick       | 后置插槽点击事件                     | `(val: string / number) => void`       |
| mouseenter        | 鼠标移入搜索框事件                    | `(val: string / number) => void`       |
| mouseleave        | 鼠标移出搜索框事件                    | `(val: string / number) => void`       |
| keydown           | 键盘按下时间                       | `(val: KeyboardEvent / Event) => void` |
| change            | 仅当 `modelValue` 改变时，当搜索框失去焦点 | `(val: string / number) => void`       |

### Slots

| 插槽名     | 说明      |
|---------|---------|
| prefix  | 搜索框头部内容 |
| suffix  | 搜索框尾部内容 |
| prepend | 搜索框前置内容 |
| append  | 搜索框后置内容 |

### Exposes

| 名称          | 说明               | 类型             |
|-------------|------------------|----------------|
| isFocus     | 搜索框是否聚焦          | `Ref<Boolean>` |
| isHover     | 搜索框是否处于 hover 状态 | `Ref<Boolean>` |
| visible     | popover 显示状态     | Ref\<Boolean\> |
| hidePopover | 隐藏 popover       | () => void     |
| showPopover | 显示 popover       | () => void     |

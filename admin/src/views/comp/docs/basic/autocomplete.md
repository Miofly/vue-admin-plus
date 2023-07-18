---
title: auto-complete
date: 2023-05-02 21:18:51
path: /pages/auto-complete
category:
  - api
  - basic
---

# AutoComplete

自动补全输入框 根据输入内容提供对应的输入建议。

## 基础用法

Autodcomplete 组件提供输入建议。

`获取建议` 属性是返回建议输入的方法。 在此示例中， `querySearch(queryString, cb)`
方法通过 `cb(data)` 给 Autocomplete 组件返回建议。

{{ autocomplete }}

## 自定义模板

自定义如何显示输入建议。

使用 `scoped slot` 自定义输入建议。 在这个范围中，你可以使用 `item` 键来访问当前输入建议对象。

{{ autocomplete-template }}

## 远程搜索

从服务端搜索数据。

{{ remote-search }}

## API

### Attributes

| 属性名                              | 说明                                                                                         | 类型                                                                              | 默认值       |
| ----------------------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------ |
| model-value / v-model               | 选中项绑定值                                                                                 | string                                                                            | —            |
| placeholder                         | 占位文本                                                                                     | string                                                                            | —            |
| clearable                           | 是否可清空                                                                                   | boolean                                                                           | false        |
| disabled                            | 自动补全组件是否被禁用                                                                       | boolean                                                                           | false        |
| value-key                           | 输入建议对象中用于显示的键名                                                                 | string                                                                            | value        |
| debounce                            | 获取输入建议的防抖延时，单位为毫秒                                                           | number                                                                            | 300          |
| placement                           | 菜单弹出位置                                                                                 | 'top' \| 'top- start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end'` | bottom-start |
| fetch-suggestions                   | 获取输入建议的方法， 仅当你的输入建议数据 resolve 时，通过调用 `callback(data:[]) ` 来返回它 | `(queryString: string, callback: callbackfn) => void`                             | —            |
| trigger-on-focus                    | whether show suggestions when input focus                                                    | boolean                                                                           | true         |
| select-when-unmatched               | 在输入没有任何匹配建议的情况下，按下回车是否触发 `select` 事件                               | boolean                                                                           | false        |
| name                                | 等价于原生 input `name` 属性                                                                 | string                                                                            | —            |
| label                               | 输入框关联的 label 文字                                                                      | string                                                                            | —            |
| hide-loading                        | 是否隐藏远程加载时的加载图标                                                                 | boolean                                                                           | false        |
| popper-class                        | 下拉列表的类名                                                                               | string                                                                            | —            |
| popper-append-to-body ^(deprecated) | 是否将下拉列表插入至 body 元素。 在下拉列表的定位出现问题时，可将该属性设置为 false          | boolean                                                                           | false        |
| teleported                          | 是否将下拉列表元素插入 append-to 指向的元素下                                                | boolean                                                                           | true         |
| highlight-first-item                | 是否默认高亮远程搜索结果的第一项                                                             | boolean                                                                           | false        |
| fit-input-width                     | 下拉框的宽度是否与输入框相同                                                                 | boolean                                                                           | false        |

### Events

| 事件名 | 详情                  | 类型                                       |
| ------ | --------------------- | ------------------------------------------ |
| select | 点击选中建议项时触发  | `(item: typeof modelValue \| any) => void` |
| change | 在 Input 值改变时触发 | `(value: string \| number) => void`        |

### Slots

| 插槽名  | 描述说明                                           |
| ------- | -------------------------------------------------- |
| default | 自定义输入建议的内容。 自定义标签，参数为 { item } |
| prefix  | 输入框头部内容                                     |
| suffix  | 输入框尾部内容                                     |
| prepend | 输入框前置内容，在 prefix 之前                     |
| append  | 输入框后置内容，在 suffix 之后                     |

### Exposes

| 属性名           | 详情                             | 类型                                |
| ---------------- | -------------------------------- | ----------------------------------- |
| activated        | 自动补全输入框是否被激活         | ^[object]`Ref<boolean>`             |
| blur             | 使 input 失去焦点                | `() => void`                        |
| close            | 折叠建议列表                     | `() => void`                        |
| focus            | 使 input 获取焦点                | `() => void`                        |
| handleSelect     | 手动触发选中建议事件             | `(item: any) => promise<void>`      |
| handleKeyEnter   | 手动触发键盘回车事件             | `() => promise<void>`               |
| highlightedIndex | 当前高亮显示选项的索引           | ^[object]`Ref<number>`              |
| highlight        | 在建议中高亮显示一个项目         | `(itemIndex: number) => void`       |
| inputRef         | vft-input 组件实例               | ^[object]`Ref<VftInputInstance>`    |
| loading          | 远程获取提示内容的加载状态指示器 | ^[object]`Ref<boolean>`             |
| popperRef        | vft-tooltip 组件实例             | ^[object]`Ref<VftTooltipInstance>`  |
| suggestions      | 获取自动补全结果                 | ^[object]`Ref<record<string, any>>` |

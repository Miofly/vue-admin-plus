---
title: select
date: 2023-05-02 21:18:51
path: /pages/select
category:
  - api
  - basic
---


# Select

这个组件目前在测试当中，如果在使用中发现任何漏洞和问题，
## 背景

在某些使用情况下，单个选择器可能最终加载数万行数据。 将这么多的数据渲染至 DOM 中可能会给浏览器带来负担，从而造成性能问题。
为了更好的用户和开发者体验，我们决定添加此组件。

<!-- more -->

## 基础用法

适用广泛的基础选择器

{{ basic-usage }}

## 多选

最基础的多选选择器

{{ multiple }}

## 隐藏多余标签的多选

默认情况下选中值会以 Tag 的形式展现，你也可以设置`collapse-tags`属性将它们合并为一段文字。
您可以使用 `collapse-tags-tooltip` 属性来启用鼠标悬停折叠文字以显示具体所选值的行为。

{{ hide-extra-tags }}

## 可过滤的多选

当选项太多时，你可以使用 `filterable` 选项来启用过滤功能来找到所需的选项。

{{ filterable }}

## 禁用选择器本身或选项

您可以选择禁用 Select 或者 Select 中的某个选项。

{{ disabled }}

## 给选项进行分组

只要数据格式满足特定要求，我们就可以按照自己的意愿为选项进行分组。

{{ grouping }}

## 自定义选项的渲染模板

我们也可以通过自定义模板来渲染自己想要的选项内容。

{{ customized-option }}

## 一键清除

我们可以同时清除所有选定的选项。此设定也适用于单选。

{{ clearable }}

## 创建临时选项

创建并选中未包含在初始选项中的条目。

通过使用 `allow-create` 属性，用户可以通过输入框创建新项目。 为了使 `allow-create`
正常工作， `filterable` 的值必须为 `true`。

最好在使用 `allow-create` 属性的同时设置 `:reserve-keyword="false"`。

{{ allow-create }}

## 远程搜索

输入关键字以从远程服务器中查找数据。

从服务器搜索数据，输入关键字进行查找。为了启用远程搜索，需要将`filterable`和`remote`
设置为`true`，同时传入一个`remote-method`。 `remote-method`为一个`Function`，它会在输入值发生变化时调用，参数为当前输入值。

{{ remote-search }}

## 使用 value-key

当 `options.value` 是一个对象时，您需要指定一个 key

{{ use-valueKey }}

## Select 属性

| 属性名                                 | 说明                                                              | 类型                                 | 可选值                                                                                                       | 默认值           |
| ----------------------------------- | --------------------------------------------------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------- |
| model-value / v-model               | 绑定值                                                             | string / number / boolean / object | —                                                                                                         | —             |
| multiple                            | 是否多选                                                            | boolean                            | —                                                                                                         | false         |
| disabled                            | 是否禁用                                                            | boolean                            | —                                                                                                         | false         |
| value-key                           | 作为 value 唯一标识的键名，绑定值为对象类型时必填                                    | string                             | —                                                                                                         | value         |
| size                                | 输入框尺寸                                                           | string                             | large/default/small                                                                                       | default       |
| clearable                           | 是否可以清空选项                                                        | boolean                            | —                                                                                                         | false         |
| clear-icon                          | 自定义清除图标                                                         | `string \| Component`             | —                                                                                                         | CircleClose   |
| collapse-tags                       | 多选时是否将选中值按文字的形式展示                                               | boolean                            | —                                                                                                         | false         |
| multiple-limit                      | 多选时用户最多可以选择的项目数， 为 0 则不限制                                       | number                             | —                                                                                                         | 0             |
| name                                | Select 输入框的原生 name 属性                                           | string                             | —                                                                                                         | —             |
| effect                              | Tooltip 主题，内置了 `dark` / `light` 两种                              | string                             | string                                                                                                    | light         |
| autocomplete                        | 自动完成选择输入                                                        | string                             | —                                                                                                         | off           |
| placeholder                         | select input的原生autocomplete属性                                   | string                             | —                                                                                                         | Please select |
| filterable                          | 是否可筛选                                                           | boolean                            | —                                                                                                         | false         |
| allow-create                        | 是否允许用户创建新条目， 只有当 `filterable` 设置为 true 时才会生效。                   | boolean                            | —                                                                                                         | false         |
| reserve-keyword                     | 筛选时，是否在选择选项后保留关键字                                               | boolean                            | —                                                                                                         | true          |
| no-data-text                        | 选项为空时显示的文本，也可以使用 empty 插槽自定义内容                                  | string                             | —                                                                                                         | No Data       |
| popper-class                        | 选择器下拉菜单的自定义类名                                                   | string                             | —                                                                                                         | —             |
| popper-append-to-body ^(deprecated) | 是否将弹出框插入至 body 元素 当弹出框的位置出现问题时，你可以尝试将该属性设置为false。               | boolean                            | -                                                                                                         | false         |
| teleported                          | 该下拉菜单是否使用teleport插入body元素                                       | boolean                            | true / false                                                                                              | true          |
| persistent                          | 当下拉选择器未被激活并且`persistent`设置为`false`，选择器会被删除。                     | boolean                            | true / false                                                                                              | true          |
| popper-options                      | 自定义 popper 选项，更多请参考 [popper.js](https://popper.js.org/docs//) | object                             | -                                                                                                         | -             |
| automatic-dropdown                  | 对于不可过滤的 Select 组件，此属性决定是否在输入框获得焦点后自动弹出选项菜单                      | boolean                            | -                                                                                                         | false         |
| height                              | 下拉菜单的高度，每一个子选项的高度是 34px                                         | number                             | -                                                                                                         | 170           |
| scrollbar-always-on                 | 是否总是展示滚动条                                                       | boolean                            | -                                                                                                         | false         |
| remote                              | 是否从服务器搜索数据                                                      | boolean                            | —                                                                                                         | false         |
| remote-method                       | 当输入值发生变化时被调用的函数。 其参数是当前输入值。 只有当 `filterable` 设置为 true 时才会生效。    | function(keyword: string)          | —                                                                                                         | —             |
| validate-event                      | 输入时是否触发表单的校验                                                    | boolean                            | -                                                                                                         | true          |
| placement                           | 下拉框出现的位置                                                        | string                             | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom-start  |
| collapse-tags-tooltip     | 当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 只有当 `collapse-tags` 设置为 true 时才会生效。 | boolean                            | true / false                                                                                              | false         |


## Select 事件

| 事件名            | 说明                   | 回调参数                     |
| -------------- | -------------------- | ------------------------ |
| change         | 选中值发生变化时触发           | val，目前的选中值               |
| visible-change | 下拉框出现/隐藏时触发          | val，出现则为 true，隐藏则为 false |
| remove-tag     | 多选模式下移除tag时触发        | val，移除的tag值              |
| clear          | 可清空的单选模式下用户点击清空按钮时触发 | —                        |
| blur           | 当选择器的输入框失去焦点时触发      | (event: FocusEvent)      |
| focus          | 当选择器的输入框获得焦点时触发      | (event: FocusEvent)      |

## Select 插槽

| 插槽名     | 说明            |
| ------- | ------------- |
| default | 自定义 Option 模板 |
| empty   | 自定义当选项为空时的内容  |
| prefix  | 输入框的前缀        |

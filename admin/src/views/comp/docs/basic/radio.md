---
title: radio
date: 2023-05-02 21:18:28
path: /pages/radio
category:
  - api
  - basic
---

# Radio

在一组备选项中进行单选

<!-- more -->

## 基础用法

单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。

要使用 Radio 组件，只需要设置`v-model`绑定变量， 选中意味着变量的值为相应 Radio `label`
属性的值， `label`可以是`String`、`Number` 或 `Boolean`。

{{ basic-usage }}

## 禁用状态

`disabled` 属性可以用来控制单选框的禁用状态。

你只需要为单选框设置 `disabled` 属性就能控制其禁用状态。

{{ disabled }}

## 单选框组

适用于在多个互斥的选项中选择的场景

结合`vft-radio-group`元素和子元素`vft-radio`可以实现单选组， 为 `vft-radio-group` 绑定 `v-model`
，再为 每一个 `vft-radio` 设置好 `label` 属性即可， 另外，还可以通过 `change`
事件来响应变化，它会传入一个参数 `value` 来表示改变之后的值。

{{ radio-button-group }}

## 按钮样式

你可以让单选框看起来像一个按钮一样。

只需要把 `vft-radio` 元素换成 `vft-radio-button` 元素即可， 此外，Vft 还提供了 `size`
属性用来控制单选框的大小。

{{ button-style }}

## 带有边框

设置 `border` 属性为 true 可以渲染为带有边框的单选框。

{{ with-borders }}

## Radio API

### Radio Attributes

| 属性名                   | 说明           | 类型                                       | 默认值   |
|-----------------------|--------------|------------------------------------------|-------|
| model-value / v-model | 选中项绑定值       | string / number / boolean                | —     |
| label                 | 单选框的值        | string / number / boolean                | —     |
| disabled              | 是否禁用单选框      | boolean                                  | false |
| border                | 是否显示边框       | boolean                                  | false |
| size                  | 单选框的尺寸       | 'large' \| 'default' \| 'small'` | —     |
| name                  | 原始 `name` 属性 | string                                   | —     |

### Radio Events

| 事件名    | 说明          | 类型                                                        |
|--------|-------------|-----------------------------------------------------------|
| change | 绑定值变化时触发的事件 | `(value: string \| number \| boolean) => void` |

### Radio Slots

| 插槽名     | 说明      |
|---------|---------|
| default | 自定义默认内容 |

## RadioGroup API

### RadioGroup Attributes

| 属性名                   | 说明                                | 类型                        | 默认值     |
|-----------------------|-----------------------------------|---------------------------|---------|
| model-value / v-model | 绑定值                               | string / number / boolean | —       |
| size                  | 单选框按钮或边框按钮的大小                     | string                    | default |
| disabled              | 是否禁用                              | boolean                   | false   |
| text-color            | 按钮形式的 Radio 激活时的文本颜色              | string                    | #ffffff |
| fill                  | 按钮形式的 Radio 激活时的填充色和边框色           | string                    | #409EFF |
| validate-event        | 输入时是否触发表单的校验                      | boolean                   | true    |
| label ^(a11y)         | 与 RadioGroup 中的 `aria-label` 属性相同 | string                    | —       |
| name                  | 原生 `name` 属性                      | string                    | —       |
| id                    | 原生 `id` 属性                        | string                    | —       |

### RadioGroup Events

| 事件名    | 说明          | 类型                                                        |
|--------|-------------|-----------------------------------------------------------|
| change | 绑定值变化时触发的事件 | `(value: string \| number \| boolean) => void` |

### RadioGroup Slots

| 插槽名     | 说明      | 子标签                 |
|---------|---------|---------------------|
| default | 自定义默认内容 | Radio / RadioButton |

## RadioButton API

### RadioButton Attributes

| 属性名      | 说明         | 类型                        | 默认值  |
|----------|------------|---------------------------|-------|
| label    | 单选框的值      | string / number / boolean | —     |
| disabled | 是否禁用单选框    | boolean                   | false |
| name     | 原生 name 属性 | string                    | —     |

### RadioButton Slots

| 插槽名     | 说明     |
|---------|--------|
| default | 默认插槽内容 |

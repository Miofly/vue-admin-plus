---
title: form
date: 2023-05-02 21:18:02
path: /pages/form
category:
  - api
  - basic
---


# Form

表单包含 `输入框`, `单选框`, `下拉选择`, `多选框` 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。

<!-- more -->

## 典型表单

最基础的表单包括各种输入表单项，比如`input`、`select`、`radio`、`checkbox`等。

在每一个 `form` 组件中，你需要一个 `form-item` 字段作为输入项的容器，用于获取值与验证值。

{{ basic-form }}

> <i>当一个表单中只有一个单行文本输入字段时， 浏览器应当将在此字段中按下 <kbd>Enter</kbd>
（回车键）的行为视为提交表单的请求。</i>
如果希望阻止这一默认行为，可以在 `<vft-form>` 标签上添加 `@submit.prevent`。


## 行内表单

当垂直方向空间受限且表单较简单时，可以在一行内放置表单。

通过设置 `inline` 属性为 `true` 可以让表单域变为行内的表单域。

{{ inline-form }}

## 对齐方式

根据你们的设计情况，来选择最佳的标签对齐方式。

通过设置 `label-position` 属性可以改变表单域标签的位置，可选值为 `top`、`left`， 当设为 `top`
时标签会置于表单域的顶部

{{ alignment }}

## 表单校验

Form 组件允许你验证用户的输入是否符合规范，来帮助你找到和纠正错误。

`Form` 组件提供了表单验证的功能，只需为 `rules` 属性传入约定的验证规则，并将 `form-Item`
的 `prop` 属性设置为需要验证的特殊键值即可。
更多高级用法可参考 [async-validator](https://github.com/yiminghe/async-validator)。

{{ validation }}

## 自定义校验规则

这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。

本例还使用`status-icon`属性为输入框添加了表示校验结果的反馈图标。

{{ custom-validation }}

自定义的校验回调函数必须被调用。
更多高级用法可参考 [async-validator](https://github.com/yiminghe/async-validator)。

## 添加/删除表单项

除了一次通过表单组件上的所有验证规则外. 您也可以动态地通过验证规则或删除单个表单字段的规则。

{{ form-items }}

## 数字类型验证

数字类型的验证需要在 `v-model` 处加上 `.number` 的修饰符，这是 Vue 自身提供的用于将绑定值转化为
number 类型的修饰符。

{{ number-validate }}

当一个 `vft-form-item` 嵌套在另一个 `vft-form-item`时，其标签宽度将是 `0`。
如果需要可以为 `vft-form-item` 单独设置 `label-width` 属性。

## 尺寸控制

表单中的所有子组件都继承了该表单的 `size` 属性。 同样，form-item 也有一个 `size` 属性。

如果希望某个表单项或某个表单组件的尺寸不同于 Form 上的 `size` 属性，直接为这个表单项或表单组件设置自己的
size 属性即可。

{{ size-control }}

## 无障碍

当在 `vft-form-item` 内只有一个输入框（或相关的控制部件，如选择或复选框），表单项的标签将自动附加在那个输入框上。
然而，如果同时有多个输入框在 `vft-form-item`内，
表单项将被分配为 [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) [组](https://www.w3.org/TR/wai-aria/#group)
的角色。 在这种情况下，需要手动给每个 input 指定访问标签。

{{ accessibility }}

## Form API

### Form Attributes

| 属性名                       | 说明                                                                                                                       | 类型                                         | 默认值   |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ | ----- |
| model                     | 表单数据对象                                                                                                                   | ^[object]`Record<string, any>`       | —     |
| rules                     | 表单验证规则                                                                                                                   | ^[object]`FormRules`                       | —     |
| inline                    | 行内表单模式                                                                                                                   | boolean                                 | false |
| label-position            | 表单域标签的位置， 当设置为 `left` 或 `right` 时，则也需要设置 `label-width` 属性                                                                | 'left' \| 'right' \| 'top'`      | right |
| label-width               | 标签的长度，例如 `'50px'`。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 `auto`。                                                          | string / number                      | —     |
| label-suffix              | 表单域标签的后缀                                                                                                                 | string                                  | —     |
| hide-required-asterisk    | 是否隐藏必填字段标签旁边的红色星号。                                                                                                       | boolean                                 | false |
| require-asterisk-position | 星号的位置。                                                                                                                   | 'left' \| 'right'`                | left  |
| show-message              | 是否显示校验错误信息                                                                                                               | boolean                                 | true  |
| inline-message            | 是否以行内形式展示校验信息                                                                                                            | boolean                                 | false |
| status-icon               | 是否在输入框中显示校验结果反馈图标                                                                                                        | boolean                                 | false |
| validate-on-rule-change   | 是否在 `rules` 属性改变后立即触发一次验证                                                                                                | boolean                                 | true  |
| size                      | 用于控制该表单内组件的尺寸                                                                                                            | 'large' \| 'default' \| 'small'` | —     |
| disabled                  | 是否禁用该表单内的所有组件。 如果设置为 `true`, 它将覆盖内部组件的 `disabled` 属性                                                                     | boolean                                 | false |
| scroll-to-error           | 当校验失败时，滚动到第一个错误表单项                                                                                                       | boolean                                 | false |
| scroll-into-view-options  | 当校验有失败结果时，滚动到第一个失败的表单项目 可通过 [scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) 配置 | ^[object] / boolean                     | —     |

### Form Methods

| 方法名             | 说明                                    | 类型                                                                                                                                                 |
| --------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `validate`      | 对整个表单的内容进行验证。 接收一个回调函数，或返回 `Promise`。 | `(callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) => void) => Promise<boolean>`                                     |
| `validateField` | 验证具体的某个字段。                            | `(props?: Arrayable<FormItemProp>, callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) => void) => Promise<void>` |
| `resetFields`   | 重置该表单项，将其值重置为初始值，并移除校验结果              | `(props?: Arrayable<FormItemProp>) => void`                                                                                               |
| `scrollToField` | 滚动到指定的字段                              | `(prop: FormItemProp) => void`                                                                                                                  |
| `clearValidate` | 清理某个字段的表单验证信息。                        | `(props?: Arrayable<FormItemProp>) => void`                                                                                               |

### Form Events

| 事件名      | 说明          | 类型                                                                              |
| -------- | ----------- | ------------------------------------------------------------------------------- |
| validate | 任一表单项被校验后触发 | `(prop: FormItemProp, isValid: boolean, message: string) => void` |

### Form Exposes

| 属性名            | 说明                                    | 类型                                                                                                                                                              |
| ------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| validate      | 对整个表单的内容进行验证。 接收一个回调函数，或返回 `Promise`。 | `(callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) => void) => Promise<void>`                                          |
| validateField | 验证具体的某个字段。                            | `(props?: FormItemProp \| FormItemProp[], callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) => void) => Promise<void>` |
| resetFields   | 重置该表单项，将其值重置为初始值，并移除校验结果              | `(props?: FormItemProp \| FormItemProp[]) => void`                                                                                               |
| scrollToField | 滚动到指定的字段                              | `(prop: FormItemProp) => void`                                                                                                                    |
| clearValidate | 清理某个字段的表单验证信息。                        | `(props?: FormItemProp \| FormItemProp[]) => void`                                                                                               |

### Form Slots

| 属性名     | 说明                        | 子标签      |
| ------- | ------------------------- | -------- |
| default | customize default content | FormItem |

## FormItem API

### FormItem Attributes

| 属性名              | 说明                                                                                                       | 类型                                                     | 默认值     |
| --------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ------- |
| prop            | `model` 的键名。 它可以是一个路径数组(例如 `['a', 'b', 0]`)。 在定义了 `validate`、`resetFields` 的方法时，该属性是必填的                  | string / ^[string&#91;&#93;]                        | —       |
| label           | 标签文本                                                                                                     | string                                              | —       |
| label-width     | 标签宽度，例如 `'50px'`。 可以使用 `auto`。                                                                           | string / number                                  | —       |
| required        | 是否为必填项，如不设置，则会根据校验规则确认                                                                                   | boolean                                             | false   |
| rules           | 表单验证规则, 具体配置见[下表](#formitemrule), 更多内容可以参考[async-validator](https://github.com/yiminghe/async-validator) | ^[object]`FormItemRule \| FormItemRule[]`             | —       |
| error           | 表单域验证错误时的提示信息。设置该值会导致表单验证状态变为 error，并显示该错误信息。                                                            | string                                              | —       |
| show-message    | 是否显示校验错误信息                                                                                               | boolean                                             | true    |
| inline-message  | 是否在行内显示校验信息                                                                                              | boolean                                             | false   |
| size            | 用于控制该表单域下组件的默认尺寸                                                                                         | 'large' \| 'default' \| 'small'`             | default |
| for             | 和原生标签相同能力                                                                                                | string                                              | —       |
| validate-status | formitem 校验的状态                                                                                           | '' \| 'error' \| 'validating' \| 'success'` | —       |

#### FormItemRule

| 插槽名     | 说明        | 类型                           | 默认 |
| ------- | --------- | ---------------------------- | -- |
| trigger | 验证逻辑的触发方式 | 'blur' \| 'change'` | —  |

如果您不想根据输入事件触发验证器， 在相应的输入类型组件上设置 `validate-event`
属性为 `false` (`<vft-input>`, `<vft-radio>`, `<vft-select>`, . ……).

### FormItem Slots

| 属性名      | 说明          | 类型                           |
| ------- | ----------- | ---------------------------- |
| default | 表单的内容。      | —                            |
| label   | 标签位置显示的内容   | ^[object]`{ label: string }` |
| error   | 验证错误信息的显示内容 | ^[object]`{ error: string }` |

### FormItem Exposes

| 属性名              | 描述                         | 类型                                                                                                       |
| --------------- | -------------------------- | -------------------------------------------------------------------------------------------------------- |
| size            | 表单项大小                      | ^[object]`ComputedRef<'' \| 'large' \| 'default' \| 'small'>`                                   |
| validateMessage | 校验消息                       | ^[object]`Ref<string>`                                                                             |
| validateState   | 校验状态                       | ^[object]`Ref<'' \| 'error' \| 'validating' \| 'success'>`                                      |
| validate        | 验证表单项                      | `(trigger: string, callback?: FormValidateCallback \| undefined) => FormValidationResult` |
| resetField      | 对该表单项进行重置，将其值重置为初始值并移除校验结果 | `() => void`                                                                               |
| clearValidate   | 移除该表单项的校验结果                | `() => void`                                                                               |

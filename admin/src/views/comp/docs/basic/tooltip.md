---
title: tooltip
date: 2023-05-02 21:19:10
path: /pages/tooltip
category:
  - api
  - basic
---

# Tooltip

常用于展示鼠标 hover 时的提示信息。

<!-- more -->

## 基础用法

在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。

使用 `content` 属性来决定 `hover` 时的提示信息。 由 `placement` 属性决定展示效果： `placement`
属性值为：`[方向]-[对齐位置]`；四个方向：`top`、`left`、`right`、`bottom`；三种对齐位置：`start`, `end`
，默认为空。 如 `placement="left-end"`，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。

{{ basic }}

## 主题

Tooltip 组件内置了两个主题：`dark`和`light`。 }}

要使用自定义主题，您必须知道您的工具提示在哪里渲染， 如果您的工具提示被呈现为根元素，您将需要全局设置css规则。

建议您使用自定义主题并同时显示箭头时不使用线性渐变背景颜色。 因为弹出箭头和内容是两个不同的元素，
弹出箭头的样式需要单独设置， 当它到渐变背景颜色时，会看起来很奇怪。 }}

通过设置 `effect` 来修改主题，默认值为 `dark`.

{{ theme }}

## 更多内容的文字提示

展示多行文本或者是设置文本内容的格式

用具名 slot `content`，替代`tooltip`中的`content`属性。

{{ rich-content }}

## 高级扩展

除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果：

`transition` 属性可以定制显隐的动画效果，默认为`fade-in-linear`。

如果需要关闭 `tooltip` 功能，`disabled` 属性可以满足这个需求， 你只需要将其设置为 `true`。

事实上，Tooltip 是一个基于 的扩展，您可以使用 VftPopper 中允许的任何属性。

{{ advanced-usage }}

Tooltip 内不支持 `router-link` 组件，请使用 `vm.$router.push` 代替。

tooltip 内不支持 disabled form
元素，参考 [MDN](https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter)， 请在 disabled form
元素外层添加一层包裹元素。

## 显示 HTML 内容

内容属性可以设置为 HTML 字符串。 

`content` 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML
是非常危险的，因为容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。
因此在 `raw-content` 打开的情况下，请确保 `content` 的内容是可信的，**永远不要**
将用户提交的内容赋值给 `content` 属性。 }}

{{ html-content }}

## 虚拟触发

有时候我们想把 tooltip 的触发元素放在别的地方，而不需要写在一起，这时候就可以使用虚拟触发。 }}tip

需要注意的是，虚拟触发的 tooltip 是受控组件，因此你必须自己去控制 tooltip 是否显示，**你将无法**
通过点击空白处来关闭 tooltip。 }}

{{ virtual-trigger }}

## 单例模式

Tooltip 可以作为单例，也就是是说你可以同时有多个触发同一个 tooltip 的触发元素，这个功能是在 `虚拟触发`
的基础上开发的。

已知问题：使用单例模式时，弹出窗口会从意料之外的位置弹出。

{{ singleton }}

## 受控模式

Tooltip 可以通过父组件使用 `:visible` 来控制它的显示与关闭。

{{ controlled }}

## 自定义动画

Tooltip 可以自定义动画，你可以根据需要自行设置所需的动画方法。

{{ animations }}

## API

### Attributes

| 属性名                       | 说明                                                                 | 类型                                                                                                                                                                  | 默认值               |
|---------------------------|--------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
| append-to                 | 指示 Tooltip 的内容将附加在哪一个网页元素上                                         | CSSSelector / HTMLElement                                                                                                                                           | —                 |
| effect                    | Tooltip 主题，内置了 `dark` / `light` 两种                                 | 'dark' \| 'light'`                                                                                                                                                  | dark              |
| content                   | 显示的内容，也可被 `slot#content` 覆盖                                        | string                                                                                                                                                              | ''                |
| raw-content               | `content` 中的内容是否作为 HTML 字符串处理                                      | boolean                                                                                                                                                             | false             |
| placement                 | Tooltip 组件出现的位置                                                    | 'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | bottom            |
| visible / v-model:visible | Tooltip 组件可见性                                                      | boolean                                                                                                                                                             | —                 |
| disabled                  | Tooltip 组件是否禁用                                                     | boolean                                                                                                                                                             | —                 |
| offset                    | 出现位置的偏移量                                                           | number                                                                                                                                                              | 12                |
| transition                | 动画属性名                                                              | string                                                                                                                                                              | —                 |
| popper-options            | popper.js 参数                                                       | object                                                                                                                                                              | {}                |
| show-after                | 在触发后多久显示内容，单位毫秒                                                    | number                                                                                                                                                              | 0                 |
| show-arrow                | tooltip 的内容是否有箭头                                                   | boolean                                                                                                                                                             | true              |
| hide-after                | 延迟关闭，单位毫秒                                                          | number                                                                                                                                                              | 200               |
| auto-close                | tooltip 出现后自动隐藏延时，单位毫秒                                             | number                                                                                                                                                              | 0                 |
| popper-class              | 为 Tooltip 的 popper 添加类名                                            | string                                                                                                                                                              | —                 |
| enterable                 | 鼠标是否可进入到 tooltip 中                                                 | boolean                                                                                                                                                             | true              |
| teleported                | 是否使用 teleport。设置成 `true`则会被追加到 `append-to` 的位置                     | boolean                                                                                                                                                             | true              |
| trigger                   | 如何触发 Tooltip                                                       | 'hover' \| 'click' \| 'focus' \| 'contextmenu'`                                                                                                                     | hover             |
| virtual-triggering        | 用来标识虚拟触发是否被启用                                                      | boolean                                                                                                                                                             | —                 |
| virtual-ref               | 标识虚拟触发时的触发元素                                                       | HTMLElement                                                                                                                                                         | —                 |
| trigger-keys              | 当鼠标点击或者聚焦在触发元素上时， 可以定义一组键盘按键并且通过它们来控制 Tooltip 的显示                  | Array                                                                                                                                                               | ['Enter','Space'] |
| persistent                | 当 tooltip 组件长时间不触发且 `persistent` 属性设置为 `false` 时, popconfirm 将会被删除 | boolean                                                                                                                                                             | —                 |
| aria-label ^(a11y)        | 和 `aria-label` 属性保持一致                                              | string                                                                                                                                                              | —                 |

### Slots

| 插槽名     | 说明                 |
|---------|--------------------|
| default | Tooltip 触发 & 引用的元素 |
| content | 自定义内容              |

### Exposes

| 属性名                  | 详情                                 | 类型                                             |
|----------------------|------------------------------------|------------------------------------------------|
| popperRef            | vft-popper 组件实例                    | ^[object]`Ref<PopperInstance \| null>`         |
| contentRef           | vft-tooltip0-content 组件实例          | ^[object]`Ref<TooltipContentInstance \| null>` |
| isFocusInsideContent | 验证当前焦点事件是否在 el-tooltip-content 中触发 | `() => boolean \| undefined`                   |
| updatePopper         | 更新 el-popper组件实例                   | `() => void`                                   |
| onOpen               | onOpen 方法控制 el-tooltip 显示状态        | `(event?: Event \| undefined) => void`         |
| onClose              | onClose 方法控制 el-tooltip 显示状态       | `(event?: Event \| undefined) => void`         |
| hide                 | 提供 hide 方法                         | `(event?: Event \| undefined) => void`         |

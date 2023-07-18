---
title: message
date: 2023-05-02 21:19:10
path: /pages/message
category:
  - api
  - basic
---


# Message

常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。

<!-- more -->

## 基础用法

从顶部出现，3 秒后自动消失。

Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释。 文末有 options
列表，可以结合 Notification 的文档理解它们。 Vft 注册了一个全局的 `$message`方法用于调用。
Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。

{{ basic }}

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

当需要自定义更多属性时，Message 也可以接收一个对象为参数。 比如，设置 `type`
字段可以定义不同的状态，默认为`info`。 此时正文内容以 `message` 的值传入。 同时，我们也为 Message 的各种
type 注册了方法，可以在不传入 type 字段的情况下像 `open4` 那样直接调用。

{{ different-types }}

## 可关闭的消息提示

可以添加关闭按钮。

默认的 Message 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 `showClose` 设置为 true
此外，和 Notification 一样，Message 拥有可控的 `duration`， 默认的关闭时间为 3000
毫秒，当把这个属性的值设置为`0`便表示该消息不会被自动关闭。

{{ closable }}

## 文字居中

使用 `center` 属性让文字水平居中。

{{ centered-content }}

## 使用 HTML 片段作为正文内容

`message` 还支持使用 HTML 字符串作为正文内容。

将`dangerouslyUseHTMLString`属性设置为 true,`message` 就会被当作 HTML 片段处理。

{{ raw-html }}

`message` 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML
是非常危险的，因为容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。
因此在 `dangerouslyUseHTMLString` 打开的情况下，请确保 `message` 的内容是可信的，**永远不要**
将用户提交的内容赋值给 `message` 属性。 }}

## 分组消息合并

合并相同内容的消息。

设置 `grouping` 为 true，内容相同的 `message` 将被合并。

{{ grouping }}

## 全局方法

Vft 为 `app.config.globalProperties` 添加了全局方法 `$message`。 因此在 vue
实例中你可以使用当前页面中的调用方式调用 `Message`

## 单独引用

```ts
import { VftMessage } from 'element-plus'
```

此时调用方法为 `vftMessage(options)`。 我们也为每个 type
定义了各自的方法，如 `vftMessage.success(options)`。 并且可以调用 `vftMessage.closeAll()` 手动关闭所有实例。

## 应用程序上下文继承

现在 Message 接受一条 `context` 作为消息构造器的第二个参数，允许你将当前应用的上下文注入到 Message
中，这将允许你继承应用程序的所有属性。

你可以像这样使用它：

如果您全局注册了 VftMessage 组件，它将自动继承应用的上下文环境。

```ts
import { getCurrentInstance } from 'vue'
import { VftMessage } from 'element-plus'

// 在你的 setup 方法中
const { appContext } = getCurrentInstance()!
VftMessage({}, appContext)
```

## API

### Message 配置项

| 属性名                       | 说明                                            | 类型                                                      | 默认值   |
| ------------------------ | --------------------------------------------- | ------------------------------------------------------- | ----- |
| message                  | 消息文字                                          | string / ^[VNode] / `() => VNode`      | ''    |
| type                     | 消息类型                                          | 'success' \| 'warning' \| 'info' \| 'error'` | info  |
| icon                     | 自定义图标，该属性会覆盖 `type` 的图标。                      | string / ^[Component]                                | —     |
| dangerouslyUseHTMLString | 是否将 message 属性作为 HTML 片段处理                    | boolean                                              | false |
| customClass              | 自定义类名                                         | string                                               | ''    |
| duration                 | 显示时间，单位为毫秒。 设为 0 则不会自动关闭                      | number                                               | 3000  |
| showClose                | 是否显示关闭按钮                                      | boolean                                              | false |
| center                   | 文字是否居中                                        | boolean                                              | false |
| onClose                  | 关闭时的回调函数, 参数为被关闭的 message 实例                  | `() => void`                              | —     |
| offset                   | Message 距离窗口顶部的偏移量                            | number                                               | 16    |
| appendTo                 | 设置 message 的根元素，默认为 `document.body`           | string / ^[HTMLElement]                              | —     |
| grouping                 | 合并内容相同的消息，不支持 VNode 类型的消息                     | boolean                                              | false |
| repeatNum                | 重复次数，类似于 Badge 。当和 `grouping` 属性一起使用时作为初始数量使用 | number                                               | 1     |

### Message 方法

调用 `Message` 或 `this.$message` 会返回当前 Message 的实例。
如果需要手动关闭实例，可以调用它的 `close` 方法。

| 属性名    | 描述            | 类型                         |
| ----- | ------------- | -------------------------- |
| close | 关闭当前的 Message | `() => void` |

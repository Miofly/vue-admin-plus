---
title: modal
date: 2023-05-02 21:18:28
path: /pages/modal
category:
  - api
  - basic
---

# Modal

在保留当前页面状态的情况下，告知用户并承载相关操作。

<!-- more -->

## Attributes

| 属性名                        | 说明                                                       | 类型                                | 可选值 | 默认值   |
|----------------------------|----------------------------------------------------------|-----------------------------------|-----|-------|
| model-value / v-model      | 是否显示 Modal                                              | boolean                           | —   | —     |
| title                      | Modal 对话框 Modal 的标题， 也可通过具名 slot （见下表）传入               | string                            | —   | —     |
| width                      | Modal 的宽度                                               | string / number                   | —   | 50%   |
| fullscreen                 | 是否为全屏 Modal                                             | boolean                           | —   | false |
| top                        | Modal CSS 中的 margin-top 值                               | string                            | —   | 15vh  |
| modal                      | 是否需要遮罩层                                                  | boolean                           | —   | true  |
| append-to-body             | Modal 自身是否插入至 body 元素上。 嵌套的 Modal 必须指定该属性并赋值为 true     | boolean                           | —   | false |
| lock-scroll                | 是否在 Modal 出现时将 body 滚动锁定                                | boolean                           | —   | true  |
| open-delay                 | Modal 打开的延时时间，单位毫秒                                      | number                            | —   | 0     |
| close-delay                | Modal 关闭的延时时间，单位毫秒                                      | number                            | —   | 0     |
| close-on-click-modal       | 是否可以通过点击 modal 关闭 Modal                                 | boolean                           | —   | true  |
| close-on-press-escape      | 是否可以通过按下 ESC 关闭 Modal                                   | boolean                           | —   | true  |
| show-close                 | 是否显示关闭按钮                                                 | boolean                           | —   | true  |
| before-close               | 关闭前的回调，会暂停 Modal 的关闭. 回调函数内执行 done 参数方法的时候才是真正关闭对话框的时候. | Function(done) (done 用来关闭 Modal) | —   | —     |
| draggable                  | 为 Modal 启用可拖拽功能                                         | boolean                           | —   | false |
| center                     | 是否让 Modal 的 header 和 footer 部分居中排列                      | boolean                           | —   | false |
| align-center               | 是否水平垂直对齐对话框                                              | boolean                           | —   | false |
| destroy-on-close           | 当关闭 Modal 时，销毁其中的元素                                     | boolean                           | —   | false | 
| showActionButtonGroup           | 当关闭 Modal 时，销毁其中的元素                                     | boolean                           | —   | false | 
| showSubmitButton           | 当关闭 Modal 时，销毁其中的元素                                     | boolean                           | —   | false | 
| showCancelButton           | 当关闭 Modal 时，销毁其中的元素                                     | boolean                           | —   | false | 
| submitButtonOptions           | 当关闭 Modal 时，销毁其中的元素                                     | boolean                           | —   | false | 
| cancelButtonOptions           | 当关闭 Modal 时，销毁其中的元素                                     | boolean                           | —   | false | 
| actionRowOptions           | 当关闭 Modal 时，销毁其中的元素                                     | boolean                           | —   | false | 


## Slots

| 插槽名                 | 说明                          |
|---------------------|-----------------------------|
| —                   | Modal 的内容                  |
| header              | 对话框标题的内容；会替换标题部分，但不会移除关闭按钮。 |
| footer              | Modal 按钮操作区的内容             |

## Events

| 事件名              | 说明                    | 参数 |
|------------------|-----------------------|----|
| open             | Modal 打开的回调          | —  |
| opened           | Modal 打开动画结束时的回调     | —  |
| close            | Modal 关闭的回调          | —  |
| closed           | Modal 关闭动画结束时的回调     | —  |
| open-auto-focus  | 输入焦点聚焦在 Modal 内容时的回调 | —  |
| close-auto-focus | 输入焦点从 Modal 内容失焦时的回调 | —  |


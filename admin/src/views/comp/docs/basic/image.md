---
title: image
date: 2023-05-02 21:10:50
path: /pages/image
category:
  - api
  - basic
---


# Image

图片容器，在保留所有原生 img 的特性下，支持懒加载，自定义占位、加载失败等

<!-- more -->

## 基础用法

可通过`fit`
确定图片如何适应到容器框，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)。

{{ basic-usage }}

## 占位内容

可通过`slot = placeholder`可自定义占位内容

{{ placeholder }}

## 加载失败

可通过`slot = error`可自定义加载失败内容

{{ load-failed }}

## 懒加载

浏览器原生支持的 `loading`属性在 <VersionTag version="2.2.3" />版本加入。 您可以使用 `loading="lazy"`
替换之前的`lazy= true`。

如果当前浏览器支持原生图片延迟加载，则先使用原生能力，否则将使用滚动监听实现相同效果。

可通过`lazy`开启懒加载功能， 当图片滚动到可视范围内才会加载。 可通过 `scroll-container`
来设置滚动容器， 若未定义，则为最近一个 overflow 值为 auto 或 scroll 的父元素。

{{ lazy-load }}

## 图片预览

可通过 `previewSrcList` 开启预览大图的功能。 你可以通过 `initial-index` 初始化第一张预览图片的位置。
默认初始位置为 0。

{{ image-preview }}

## Image API

### Image Attributes

| 属性名                     | 说明                                                                                                       | 类型                                                             | 默认值                                 |
| ----------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ----------------------------------- |
| `src`                   | 图片源地址，同原生属性一致                                                                                            | `string`                                                       | —                                   |
| `fit`                   | 确定图片如何适应容器框，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)                | `'fill' \| 'contain' \| 'cover' \| 'none' \| 'scale-down'` | —                                   |
| `hide-on-click-modal`   | 当开启 preview 功能时，是否可以通过点击遮罩层关闭 preview                                                                    | `boolean`                                                      | `false`                             |
| `loading` ^(2.2.3)      | 浏览器加载图像的策略，和 [浏览器原生](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-loading)能力一致     | `'eager' \| 'lazy'`                                           | —                                   |
| `lazy`                  | 是否使用懒加载                                                                                                  | `boolean`                                                      | `false`                             |
| `scroll-container`      | 开启懒加载功能后，监听 scroll 事件的容器                                                                                 | `string \| HTMLElement`                                       | 最近一个 overflow 值为 auto 或 scroll 的父元素 |
| `alt`                   | 原生属性 `alt`                                                                                               | `string`                                                       | —                                   |
| `referrerpolicy`        | 原生属性 [referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy)。 | `string`                                                       | —                                   |
| `preview-src-list`      | 开启图片预览功能                                                                                                 | `string[]`                                                     | —                                   |
| `z-index`               | 设置图片预览的 z-index                                                                                          | `number`                                                       | —                                   |
| `initial-index`         | 初始预览图像索引，小于 `url-list` 的长度                                                                               | `number`                                                       | `0`                                 |
| `close-on-press-escape` | 是否可以通过按下 ESC 关闭 Image Viewer                                                                             | `boolean`                                                      | `true`                              |
| `preview-teleported`    | image-viewer 是否插入至 body 元素上。 嵌套的父元素属性会发生修改时应该将此属性设置为 `true`                                              | `boolean`                                                      | `false`                             |

### Image Events

| 事件名      | 说明                                                 | 类型                           |
| -------- | -------------------------------------------------- | ---------------------------- |
| `load`   | 图片加载成功触发                                           | `(e: Event) => void`      |
| `error`  | 图片加载失败触发                                           | `(e: Error) => void`      |
| `switch` | 切换图像时触发。                                           | `(index: number) => void` |
| `close`  | 当点击 X 按钮或者在` hide-on-click-modal `为 true 时点击遮罩层时触发 | `() => void`              |

### Image Slots

| 插槽名           | 说明                 |
| ------------- | ------------------ |
| `placeholder` | 当图像尚未加载时，自定义的占位符内容 |
| `error`       | 自定义图像加载失败的内容       |
| `viewer`      | 图片描述内容             |

## Image Viewer API

### Image Viewer Attributes

| 属性名                   | 说明                                                     | 类型                  | 默认值     |
| --------------------- | ------------------------------------------------------ | ------------------- | ------- |
| `url-list`            | 用于预览的图片链接列表                                            | `string[]`          | `[]`    |
| `z-index`             | 预览时遮罩层的 z-index                                        | `number \| string` | —       |
| `initial-index`       | 初始预览图像索引，小于 `url-list` 的长度                             | `number`            | `0`     |
| `infinite`            | 是否可以无限循环预览                                             | `boolean`           | `true`  |
| `hide-on-click-modal` | 是否可以通过点击遮罩层关闭预览                                        | `boolean`           | `false` |
| `teleported`          | image 自身是否插入至 body 元素上。 嵌套的父元素属性会发生修改时应该将此属性设置为 `true` | `boolean`           | `false` |
| `zoom-rate`           | 缩放事件的缩放速度                                              | `number`            | `1.2`   |

### Image Viewer Events

| 事件名      | 说明                                                 | 类型                           |
| -------- | -------------------------------------------------- | ---------------------------- |
| `close`  | 当点击 X 按钮或者在` hide-on-click-modal `为 true 时点击遮罩层时触发 | `() => void`              |
| `switch` | 切换图像时触发。                                           | `(index: number) => void` |

## Image Viewer Methods

| 方法名           | 说明     | 参数                |
| ------------- | ------ | ----------------- |
| setActiveItem | 手动切换图片 | 需要切换的图片的索引，从 0 开始 |

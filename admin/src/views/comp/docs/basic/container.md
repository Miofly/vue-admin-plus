---
title: container
date: 2023-05-04 20:36:13
path: /pages/container
category:
  - api
  - basic
---
# Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

<!-- more -->

`<vft-container>`：外层容器。 当子元素中包含 `<vft-header>` 或 `<vft-footer>` 时，全部子元素会垂直上下排列，
否则会水平左右排列。

`<vft-header>`：顶栏容器。

`<vft-aside>`：侧边栏容器。

`<vft-main>`：主要区域容器。

`<vft-footer>`：底栏容器

以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。 此外， `<vft-container>`
的直接子元素必须是后四个组件中的一个或多个。 后四个组件的亲元素必须是一个 `<vft-container>`

## 常见页面布局

{{ layout-hm }}

{{ layout-hmf }}

{{ layout-am }}

{{ layout-ham }}

{{ layout-hamf }}

{{ layout-ahm }}

{{ layout-ahmf }}

## 例子

{{ example }}

## Container API

### Container Attributes

| 属性名       | 说明       | 类型                         | 默认值                                                          |
|-----------|----------|----------------------------|--------------------------------------------------------------|
| direction | 子元素的排列方向 | 'horizontal' \| 'vertical' | 子元素中有 `vft-header` 或 `vft-footer` 时为 vertical，否则为 horizontal |

### Container Slots

| 插槽名     | 说明      | 子标签                                        |
|---------|---------|--------------------------------------------|
| default | 自定义默认内容 | Container / Header / Aside / Main / Footer |

## Header API

### Header Attributes

| 属性名    | 说明   | 类型     | 默认值  |
|--------|------|--------|------|
| height | 顶栏高度 | string | 60px |

### Header Slots

| 插槽名     | 说明      |
|---------|---------|
| default | 自定义默认内容 |

## Aside API

### Aside Attributes

| 属性名   | 说明    | 类型               | 默认值    |
|-------|-------|------------------|--------|
| width | 侧边栏宽度 | string \| number | 300px |

### Aside Slots

| 插槽名     | 说明      |
|---------|---------|
| default | 自定义默认内容 |

## Main API

### Main Slots

| 插槽名     | 说明      |
|---------|---------|
| default | 自定义默认内容 |

## Footer API

### Footer Attributes

| 属性名    | 说明   | 类型     | 默认值  |
|--------|------|--------|------|
| height | 底栏高度 | string | 60px |

### Footer Slots

| 插槽名     | 说明      |
|---------|---------|
| default | 自定义默认内容 |

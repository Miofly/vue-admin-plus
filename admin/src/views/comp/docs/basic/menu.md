---
title: menu
date: 2023-05-02 21:17:49
path: /pages/menu
category:
  - api
  - basic
---

# Menu

为网站提供导航功能的菜单。
<!-- more -->
## 顶栏

顶部栏菜单可以在各种场景中使用。

导航菜单默认为垂直模式，通过将 mode 属性设置为 horizontal 来使导航菜单变更为水平模式。
另外，在菜单中通过 sub-menu 组件可以生成二级菜单。 Menu 还提供了`background-color`、`text-color`
和`active-text-color`，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。

{{ basic }}

## 左右

您可以将菜单项放置在左边或右边。

{{ left-and-right }}

## 侧栏

垂直菜单，可内嵌子菜单。

通过 el-menu-item-group 组件可以实现菜单进行分组，分组名可以通过 title 属性直接设定，也可以通过具名
slot 来设定。

{{ vertical }}

## Collapse 折叠面板

垂直导航菜单可以被折叠

{{ collapse }}

## Menu Attributes

| 属性名                 | 说明                                                                                       | 类型      | 可选值                   | 默认值      |
|---------------------|------------------------------------------------------------------------------------------|---------|-----------------------|----------|
| mode                | 菜单展示模式                                                                                   | string  | horizontal / vertical | vertical |
| collapse            | 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）                                                       | boolean | —                     | false    |
| ellipsis            | 是否省略多余的子项（仅在横向模式生效）                                                                      | boolean | —                     | true     |
| default-active      | 页面加载时默认激活菜单的 index                                                                       | string  | —                     | —        |
| default-openeds     | 默认打开的 sub-menu 的 index 的数组                                                               | Array   | —                     | —        |
| unique-opened       | 是否只保持一个子菜单的展开                                                                            | boolean | —                     | false    |
| menu-trigger        | 子菜单打开的触发方式，只在 `mode` 为 horizontal 时有效。                                                   | string  | hover / click         | hover    |
| router              | 是否启用 `vue-router` 模式。 启用该模式会在激活导航时以 index 作为 path 进行路由跳转 使用 `default-active` 来设置加载时的激活项。 | boolean | —                     | false    |
| collapse-transition | 是否开启折叠动画                                                                                 | boolean | —                     | true     |
| popper-effect       | Tooltip 主题，内置了 `dark` / `light` 两种主题                                                     | string  | dark / light          | dark     |

## Menu Methods

| 方法名   | 说明             | 参数                            |
|-------|----------------|-------------------------------|
| open  | 展开指定的 sub-menu | index: 需要打开的 sub-menu 的 index |
| close | 收起指定的 sub-menu | index: 需要收起的 sub-menu 的 index |

## Menu Events

| 事件名    | 说明             | 回调参数                                                                                                           |
|--------|----------------|----------------------------------------------------------------------------------------------------------------|
| select | 菜单激活回调         | index: 选中菜单项的 index, indexPath: 选中菜单项的 index path, item: 选中菜单项, routeResult: vue-router 的返回值（如果 router 为 true） |
| open   | sub-menu 展开的回调 | index: 打开的 sub-menu 的 index, indexPath: 打开的 sub-menu 的 index path                                              |
| close  | sub-menu 收起的回调 | index: 收起的 sub-menu 的 index, indexPath: 收起的 sub-menu 的 index path                                              |

## Menu Slots

| 插槽名 | 说明      | 子标签                                   |
|-----|---------|---------------------------------------|
| —   | 自定义默认内容 | SubMenu / Menu-Item / Menu-Item-Group |

## SubMenu Attributes

| 属性名                        | 说明                                                                   | 类型                                       | 可选值 | 默认值                       |
|----------------------------|----------------------------------------------------------------------|------------------------------------------|-----|---------------------------|
| index                      | 唯一标志                                                                 | string                                   | —   | —                         |
| popper-class               | 为 popper 添加类名                                                        | string \| ClassObjectType \| ClassType[] | —   | —                         |
| show-timeout               | 展开 sub-menu 的延时                                                      | number                                   | —   | 300                       |
| hide-timeout               | 收起 sub-menu 的延时                                                      | number                                   | —   | 300                       |
| disabled                   | 是否禁用                                                                 | boolean                                  | —   | false                     |
| popper-append-to-body（已废弃） | 是否将弹出菜单插入至 body 元素。 在菜单的定位出现问题时，可尝试修改该属性                             | boolean                                  | —   | 一级子菜单：true / 非一级子菜单：false |
| teleported                 | 是否将 popup 的下拉列表插入至 body 元素                                           | boolean                                  | —   | 一级子菜单：true / 非一级子菜单：false |
| popper-offset              | 弹出窗口偏移                                                               | number                                   | —   | 6                         |
| expand-close-icon          | 父菜单展开且子菜单关闭时的图标， `expand-close-icon` 和 `expand-open-icon` 需要一起配置才能生效 | string \| IconProps                      | —   | —                         |
| expand-open-icon           | 父菜单展开且子菜单打开时的图标， `expand-open-icon` 和 `expand-close-icon` 需要一起配置才能生效 | string \| IconProps                      | —   | —                         |
| collapse-close-icon        | 父菜单收起且子菜单关闭时的图标， `expand-close-icon` 和 `expand-open-icon` 需要一起配置才能生效 | string \| IconProps                      | —   | —                         |
| collapse-open-icon         | 父菜单收起且子菜单打开时的图标， `expand-open-icon` 和 `expand-close-icon` 需要一起配置才能生效 | string \| IconProps                      | —   | —                         |

## SubMenu Slots

| 插槽名   | 说明      | 子标签                                   |
|-------|---------|---------------------------------------|
| —     | 自定义默认内容 | SubMenu / Menu-Item / Menu-Item-Group |
| title | 自定义标题内容 | —                                     |

## Menu-Item Attributes

| 属性名      | 说明              | 类型          | 可选值 | 默认值   |
|----------|-----------------|-------------|-----|-------|
| index    | 唯一标志            | string/null | —   | null  |
| route    | Vue Router 路径对象 | object      | —   | —     |
| disabled | 是否禁用            | boolean     | —   | false |

## Menu-Item Events

| 事件名   | 说明         | 回调参数            |
|-------|------------|-----------------|
| click | 菜单点击时的回调函数 | vft-menu-item 实例 |

## Menu-Item Slots

| 插槽名   | 说明      |
|-------|---------|
| —     | 自定义默认内容 |
| title | 自定义标题内容 |

## Menu-Item-Group Attributes

| 属性名   | 说明  | 类型     | 可选值 | 默认值 |
|-------|-----|--------|-----|-----|
| title | 组标题 | string | —   | —   |

## Menu-Item-Group Slots

| 插槽名   | 说明       | 子标签       |
|-------|----------|-----------|
| —     | 默认插槽内容   | Menu-Item |
| title | 自定义组标题内容 | —         |

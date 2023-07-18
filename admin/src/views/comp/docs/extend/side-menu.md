---
title: side-menu
date: 2023-04-07 15:25:11
path: /pages/side-menu
category:
  - api
  - extend
---

# SideMenu

自定义时间选择器
<!-- more -->
## 基础用法

{{ basic }}

## 自定义

{{ custom }}

## API

### Attributes

| 属性名                 | 说明                          | 类型                                                                                                               | 默认值                                                                                                      |
|---------------------|-----------------------------|------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| menus               | 菜单列表                        | MenuType[]                                                                                                       | —                                                                                                        |
| uniqueOpened        | 是否只保持一个子菜单的展开	              | boolean                                                                                                          | true                                                                                                     |
| isFixedLeft         | 是否固定在左侧	                    | boolean                                                                                                          | true                                                                                                     |
| autoScrollActiveDom | 点击子菜单时是否滚动到其父级位置	           | boolean                                                                                                          | true                                                                                                     |
| collapse            | 是否水平折叠收起菜单                  | boolean                                                                                                          | false                                                                                                    |
| defaultActive       | 页面加载时默认激活菜单的 index	         | string                                                                                                           | —                                                                                                        |
| defaultOpeneds      | 默认打开的 sub-menu 的 index 的数组	 | Array<string \| number>                                                                                          | —                                                                                                        |
| width               | 侧边栏宽度                       | string / number                                                                                                  | —                                                                                                        |
| collapseWidth       | 侧边栏折叠后的宽度                   | string / number                                                                                                  | 50                                                                                                       |
| height              | 侧边栏高度                       | string                                                                                                           | 100%                                                                                                     |
| attrMapping         | 菜单属性映射                      | {path?: string; children?: string; title?: string; index?: string \| number; icon?: string; disabled?: string; } | `{path: 'path', children: 'children', title: 'title', index: 'path', icon: 'icon',disabled: 'disabled'}` |
| extraHeight         | 系统内菜单栏范围内的高度综合              | number                                                                                                           | 100                                                                                                      |
| menuTopBottomHeight | 菜单内上下slot插槽高度总和             | number                                                                                                           | 0                                                                                                        |
| showCollapse        | 是否显示底部收缩                    | boolean                                                                                                          | false                                                                                                    |
| dragOption          | 只有一级菜单时拖拽配置                 | Sortable.Options & {dragClassName: string}                                                                       | —                                                                                                        |
| dragWidthCfg        | 是否可以拖拽侧边栏宽度                 | boolean \| { maxWidth: number }                                                                                  | false                                                                                                    |
| useRouterJump       | 是否使用菜单组件内部的选中事件             | boolean                                                                                                          | false                                                                                                    |
| openDisabled        | 是否开启菜单禁用                    | boolean                                                                                                          | false                                                                                                    |

```typescript
export type MenuType = Pick<RouteLocationNormalized, 'path' | 'meta'> & {
  children?: MenuType[];
  title: string;
  icon?: string;
} & Record<string, any>;

export type MenuAttrMapping = {
  path?: string;
  children?: string;
  title?: string;
  index?: string | number;
  icon?: string;
  disabled?: string;
}
```

### Events

| 事件名                | 说明         | 类型                                                                    |
|--------------------|------------|-----------------------------------------------------------------------|
| update:collapse    | 收缩         | `(val: boolean) => void`                                              |
| update:width       | 菜单宽度       | `(val: string \| number) => void`                                     |
| dragEnd            | 拖拽菜单项结束事件  | `(data: oldIndex: SortableEvent, newIndex: SortableEvent) => void`    |
| dragWidthEnd       | 拖拽列表宽度结束事件 | `() => void`                                                          |
| select             | 菜单选择事件     | `(route: string, indexPath: string[], ...[key: string]: any) => void` |
| menuItemMouseenter | 菜单项滑入事件    | `(data) => void` |
| menuItemMouseleave | 菜单项滑出事件    | `(data) => void` |

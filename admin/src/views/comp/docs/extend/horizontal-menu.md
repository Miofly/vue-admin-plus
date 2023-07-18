---
title: horizontal-menu
date: 2023-05-05 19:08:39
path: /pages/horizontal-menu
category:
  - api
  - extend
---

# HorizontalMenu

自定义时间选择器
<!-- more -->

## 基础用法

{{ basic }}

## 自定义

{{ custom }}
{{ custom_1 }}

## API

### Attributes

| 属性名                   | 说明                          | 类型                                                                                                               | 默认值                                                                                                      |
|-----------------------|-----------------------------|------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| menus                 | 菜单列表                        | MenuType[]                                                                                                       | —                                                                                                        |
| defaultActive         | 页面加载时默认激活菜单的 index	         | string                                                                                                           | —                                                                                                        |
| defaultOpeneds        | 默认打开的 sub-menu 的 index 的数组	 | Array<string \| number>                                                                                          | —                                                                                                        |
| attrMapping           | 菜单属性映射                      | {path?: string; children?: string; title?: string; index?: string \| number; icon?: string; disabled?: string; } | `{path: 'path', children: 'children', title: 'title', index: 'path', icon: 'icon',disabled: 'disabled'}` |
| useRouterJump         | 是否使用菜单组件内部的选中事件             | boolean                                                                                                          | false                                                                                                    |
| openDisabled          | 是否开启菜单禁用                    | boolean                                                                                                          | false                                                                                                    |
| disabledJudgeTurnOver | 禁用判断使用相反的条件                 | boolean                                                                                                          | false                                                                                                    |
| subMenuCfg            | 子菜单配置                       | SubMenuProps                                                                                                          | false                                                                                                    |
| maxRowLength          | 单列最多展示多少item                | number                                                                                                           | false                                                                                                    |

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

| 事件名   | 说明        | 类型                                                                 |
|-------|-----------|--------------------------------------------------------------------|
| open  | 菜单宽度      | `(val: string \| number) => void`                                  |
| close | 拖拽菜单项结束事件 | `(data: oldIndex: SortableEvent, newIndex: SortableEvent) => void` |

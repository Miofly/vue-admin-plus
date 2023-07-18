---
title: progress
date: 2023-05-02 21:10:50
path: /pages/progress
category:
  - api
  - basic
---

# Progress

用于展示操作进度，告知用户当前状态和预期。

## 直线进度条

Progress 组件设置 `percentage` 属性即可，表示进度条对应的百分比。 该属性**必填**
，并且必须在 `0-100` 的范围内。 你可以通过设置 `format` 来自定义文字显示的格式。

{{ linear-progress-bar }}

## 进度条内显示百分比标识

百分比不占用额外控件，适用于文件上传等场景。

Progress 组件可通过 `stroke-width` 属性更改进度条的高度，并可通过 `text-inside`
属性来改变进度条内部的文字。

{{ internal-percentage }}

## 自定义进度条的颜色

可以通过 `color` 属性来设置进度条的颜色。 该属性可以接受十六进制颜色值，函数和数组。

{{ custom-color }}

## 环形进度条

Progress 组件可通过 `type` 属性来指定使用环形进度条，在环形进度条中，还可以通过 `width`
属性来设置其大小。

{{ circular-progress-bar }}

## 仪表盘形进度条

您也可以指定 `type` 属性到 `dashboard` 使用控制面板进度栏。

{{ dashboard-progress-bar }}

## 自定义内容

通过默认插槽添加自定义内容。

{{ customized-content }}

## 动画进度条

使用 `intermediate` 属性来设置不确定的进度， `duration` 来控制动画持续时间。

{{ indeterminate-progress }}

## 条纹进度条

通过设置 `striped` 属性获取条纹进度条。 也可以使用 `striped-flow` 属性来使条纹流动起来。
使用`duration` 属性来控制条纹流动的速度。

{{ striped-progress }}

## API

### Attributes

| 属性名            | 说明                                          | 类型                                                                                                       | 默认值   |
|----------------|---------------------------------------------|----------------------------------------------------------------------------------------------------------|-------|
| percentage     | 百分比，**必填**                                  | number`(0-100)`                                                                                          | 0     |
| type           | 进度条类型                                       | 'line' \| 'circle' \| 'dashboard'`                                                                       | line  |
| stroke-width   | 进度条的宽度                                      | number                                                                                                   | 6     |
| text-inside    | 进度条显示文字内置在进度条内（仅 `type` 为 'line' 时可用）       | boolean                                                                                                  | false |
| status         | 进度条当前状态                                     | 'success' \| 'exception' \| 'warning'`                                                                   | —     |
| indeterminate  | 是否为动画进度条                                    | boolean                                                                                                  | false |
| duration       | 控制动画进度条速度和条纹进度条流动速度                         | number                                                                                                   | 3     |
| color          | 进度条背景色 进度条背景色 （会覆盖 `status` 状态颜色）           | string / ^[function]`(percentage: number) => string` / ^[Array]`{ color: string; percentage: number }[]` | ''    |
| width          | 环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用） | number                                                                                                   | 126   |
| show-text      | 是否显示进度条文字内容                                 | boolean                                                                                                  | true  |
| stroke-linecap | circle/dashboard 类型路径两端的形状                  | 'butt' \| 'round' \| 'square'`                                                                           | round |
| format         | 指定进度条文字内容                                   | `(percentage: number) => string`                                                                         | —     |
| striped        | 在进度条上增加条纹                                   | boolean                                                                                                  | false |
| striped-flow   | 让进度条上的条纹流动起来                                | boolean                                                                                                  | false |

### Slots

| 属性名     | 说明                         |
|---------|----------------------------|
| default | 自定义内容，参数为 `{ percentage }` |

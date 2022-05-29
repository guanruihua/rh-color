# 描述

> 参考 color
>

## 更新日志

<div class="exploded-line" />

## log

> - `description` : 设置`console`的字体颜色和背景颜色
> - `param` : `fontColorKey` 字体颜色
> - `param` : ? `bgColorKey` 背景颜色
> - `returns` : `function(...args) { ...args: 要打印的内容 }`

```shell
npm install rh-color
```

```ts
import { Color, log } from "rh-color";

log(Color.Green, Color.Blue)('内容', '内容')
log(Color.Green)('内容', '内容')
log()('内容', '内容')
```

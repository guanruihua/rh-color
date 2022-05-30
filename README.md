# 描述

> 参考 color
>

## 更新日志

- 0.0.6 正常使用的版本, 完善使用文档

-
<div class="exploded-line" />

## log

> - `description` : 设置`console`的字体颜色和背景颜色
> - `param` : ? `fontColorKey` 字体颜色 [default 白色]
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

### 浏览器使用

```html
 <script type="module">
 //  这里0.0.6指的是npm包的版本
  import { log, Color } from 'https://cdn.jsdelivr.net/npm/rh-color@0.0.6/lib/index.esm.js'
  log(Color.Red)('内容')
  log(Color.Red, Color.Green)('内容')
 </script>
```

## 支持颜色

> 背景颜色和字体颜色相同

| 颜色 | 代码 |
|:----|:----|
| 黑色 |`Color.Black`
| 红色 |`Color.Red`
| 绿色 |`Color.Green`
| 黄色 |`Color.Yellow`
| 蓝色 |`Color.Blue`
| 紫色 |`Color.Purple`
| 深绿 |`Color.DarkGreen`
| 白色 |`Color.White`

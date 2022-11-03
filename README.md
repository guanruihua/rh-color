# 描述

- 格式化 console

<div class="exploded-line" />

## 方法

### `log`

- 单行指定

- `description` : 设置`console`的字体颜色和背景颜色
- `param` `...keys` `Styles[]` 样式
- `returns` : `function(...args) { ...args: 要打印的内容 }`

### `color`

- 当行多次指定

- `description` 指定字段颜色打印
- `param` `source` 待打印信息[多个color结合使用时候, 不要使用呢, 隔开的写法]
- `param` `...keys` `Styles[]`  
- `returns`

eg:`console.log(color('Reverse', 'Reverse', 'Black', 'RedBG'))`

- 若要去除每个`color(...)`之间的空格
- 可用: `log(color(...), color(...), ...)`

### 使用

```shell
npm install rh-color
```

```ts
import { color, log } from "rh-color";

log('Grey')('Grey')
log('Black')('Black')
log('Red')('Red')
log('Green')('Green')
log('Yellow')('Yellow')
log('Blue')('Blue')
log('Magenta')('Magenta')
log('Cyan')('Cyan')
log('White')('White')
log('BlackBG')('BlackBG')
log('RedBG')('RedBG')
log('GreenBG')('GreenBG')
log('YellowBG')('YellowBG')
log('BlueBG')('BlueBG')
log('MagentaBG')('MagentaBG')
log('CyanBG')('CyanBG')
log('WhiteBG')('WhiteBG')
log('Bright')('Bright')
log('Italic')('Italic')
log('Underline')('Underline')
log('Reverse')('Reverse')
log('Hidden')('Hidden')

// 等同于

console.log(color('Grey', 'Grey'))
console.log(color('Black', 'Black'))
console.log(color('Red', 'Red'))
console.log(color('Green', 'Green'))
console.log(color('Yellow', 'Yellow'))
console.log(color('Blue', 'Blue'))
console.log(color('Magenta', 'Magenta'))
console.log(color('Cyan', 'Cyan'))
console.log(color('White', 'White'))
console.log(color('BlackBG', 'BlackBG'))
console.log(color('RedBG', 'RedBG'))
console.log(color('GreenBG', 'GreenBG'))
console.log(color('YellowBG', 'YellowBG'))
console.log(color('BlueBG', 'BlueBG'))
console.log(color('MagentaBG', 'MagentaBG'))
console.log(color('CyanBG', 'CyanBG'))
console.log(color('WhiteBG', 'WhiteBG'))
console.log(color('Bright', 'Bright'))
console.log(color('Italic', 'Italic'))
console.log(color('Underline', 'Underline'))
console.log(color('Reverse', 'Reverse'))
console.log(color('Hidden', 'Hidden'))
```

#### 打印结果

![](./__assets__/README-2022-06-13-14-36-42.png)

### 浏览器使用

```html
 <script type="module">
 //  这里next 要指定npm包的版本
  import { color, log } from 'https://cdn.jsdelivr.net/npm/rh-color@next/lib/index.esm.js'
 </script>
```

## 支持样式

- 样式之间的冲突需要注意

| 颜色     | 代码        | 补充               |
| :------- | :---------- | :----------------- |
| 灰色     | `Grey`      |
| 黑色     | `Black`     |
| 红色     | `Red`       |
| 绿色     | `Green`     |
| 黄色     | `Yellow`    |
| 蓝色     | `Blue`      |
| 品红     | `Magenta`   |
| 青色     | `Cyan`      |
| 白色     | `White`     |
| 黑色背景 | `BlackBG`   |
| 红色背景 | `RedBG`     |
| 绿色背景 | `GreenBG`   |
| 换色背景 | `YellowBG`  |
| 蓝色背景 | `BlueBG`    |
| 品红背景 | `MagentaBG` |
| 青色背景 | `CyanBG`    |
| 白色背景 | `WhiteBG`   |
| 样色重置 | `Reset`     |
| 明亮     | `Bright`    |
| 斜体     | `Italic`    |
| 下划线   | `Underline` | 注意中文的使用     |
| 反装     | `Reverse`   | 字体和背景颜色反转 |
| 隐藏     | `Hidden`    |

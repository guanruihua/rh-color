export * from "../src";
// export * from "../lib/index";
// 
import './color.test'
import './log.expand.test'
// import './mult.test'

// log(Color.Green, Color.Blue)(123, 123, '\x1b[0m\x1b[33m%O', '\x1b[0m', {
// log(Color.Red)('123','345', 123, {})
// log(Color.Red, Color.White)('123','345', 123, {})
// 	a: 123,
// 	b: 'fjskdfj'
// })
// console.log(
// 	'\x1b[0m\x1b[32m%o',
// 	{
// 		a: 'stringToMakeYellow',
// 		b: '123'
// 	},
// 	'\x1b[0m\x1b[32m%s',
// 	'stringToMakeYellow',
// 	'\x1b[0m',
// );

// console.log('123',123)
// console.log(123, 123)

// log(Color.Green, Color.Red)('123', '123')
// log(Color.Green)('123', '123')
// log()('123', '123')



// ### 占位符打印

// > 不支持: 只是没有达到预期效果, 后续可能会补充

// | 占位符    | 描述       | 支持情况 |
// | --------- | ---------- | :------- |
// | `%s`      | 字符串     | 支持     |
// | `%d / %i` | 整数       | 支持     |
// | `%f`      | 浮点数     | 支持     |
// | `%o`      | DOM元素    | 不支持   |
// | `%O`      | object对象 | 不支持   |
// | `%c`      | css样式    | 不支持   |
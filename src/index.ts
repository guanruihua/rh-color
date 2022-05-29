import { Bg, Color, Font } from "./constants";
export {
	Color
}
/**
 * @title log
 * @description 设置console的字体颜色和背景颜色
 * @param fontColorKey 字体颜色
 * @param ? bgColorKey 背景颜色
 * @returns function(...args) { ...args: 要打印的内容 }
 */
export function log(fontColorKey: string = Color.White, bgColorKey?: string) {

	const color = `\x1b[${Font[fontColorKey] || Font.White}${bgColorKey
		? `\x1b[${Bg[bgColorKey]}`
		: ''}`

	return function (...args: any[]) {
		typeof global === 'object'
			? console.log(`\x1b[0m${color}m%s`, ...args, '\x1b[0m')
			: console.log(`\x1b[0m${color}m%s`, ...args)
	}
}
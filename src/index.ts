import { styles, Styles } from "./constants";

export { styles, Styles }

function keysToString(keys: Styles | Styles[]) {
	let color = ''
	if (typeof keys === 'string') {
		color = styles[keys]
	}
	else {
		keys.forEach(key => {
			color += styles[key]
		});
	}

	return color
}

/**
 * @title log
 * @description 设置console的字体颜色和背景颜色
 * @param ...keys Styles[] 样式
 * @returns function(...args) { ...args: 要打印的内容 }
 */
export function log(...keys: Styles[]) {
	const color = keysToString(keys)
	const isNotBrowser: boolean = typeof global === 'object'

	return function (...args: any[]) {
		if (isNotBrowser) args.push(styles.Reset)
		console.log(`\x1b[0m${color}%s`, ...args)
	}
}


/**
 * @title color
 * @description 指定字段颜色打印
 * @param source 待打印信息
 * @param ...keys Styles[]  
 * @returns 
 */
export function color(source: any, ...keys: Styles[]) {
	const isNotBrowser: boolean = typeof global === 'object'
	if (isNotBrowser)
		return keysToString(keys) + source + styles.Reset
	return keysToString(keys) + source
}
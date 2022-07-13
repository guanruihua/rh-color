export type BaseColor = 'Black' | 'Red' | 'Green' | 'Yellow' | 'Blue' | 'Magenta' | 'White' | 'Cyan'

// export type PhType = 'String' | 'Number' | 'Float' | 'Dom' | 'Object' | 'CSS'

export type Styles = 'Reset' | 'Bright' | 'Italic' | 'Underline' | 'Reverse' | 'Hidden' | BaseColor | `${BaseColor}BG` | 'Grey'

export const styles: {
	[key in Styles]: string
} = {
	Grey: '\x1B[2m',
	Black: '\x1B[30m',
	Red: '\x1B[31m',
	Green: '\x1B[32m',
	Yellow: '\x1B[33m',
	Blue: '\x1B[34m',
	Magenta: '\x1B[35m',
	Cyan: '\x1B[36m',
	White: '\x1B[37m',
	BlackBG: '\x1B[40m',
	RedBG: '\x1B[41m',
	GreenBG: '\x1B[42m',
	YellowBG: '\x1B[43m',
	BlueBG: '\x1B[44m',
	MagentaBG: '\x1B[45m',
	CyanBG: '\x1B[46m',
	WhiteBG: '\x1B[47m',
	Reset: '\x1B[0m',
	Bright: '\x1B[1m',
	Italic: '\x1B[3m',
	Underline: '\x1B[4m',
	Reverse: '\x1B[7m',
	Hidden: '\x1B[8m',
	// String: '%s',
	// Number: "%d",
	// Float: "%f",
	// Dom: "%o",
	// Object: "%O",
	// CSS: "%c"l
}
//#region Import
const cssMatcher = require("jest-matcher-css")
const postcss = require("postcss")
const tailwindcss = require("tailwindcss")
const customPlugin = require("./index.js")
//#endregion

expect.extend({
	toMatchCss: cssMatcher,
})

function generatePluginCss() {
	const config = {
		corePlugins: false,
		plugins: [customPlugin],
	}

	return postcss(tailwindcss(config))
		.process("@tailwind utilities", { from: undefined })
		.then(({ css }) => css)
}

test("utility classes can be generated", () => {
	return generatePluginCss().then((css) => {
		console.log("Logging CSS here: ", css)

		expect(css).toMatchCss(`    
		.backface-hidden {
			backface-visibility: hidden
    	}
    `)
	})
})

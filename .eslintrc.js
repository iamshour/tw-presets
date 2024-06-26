module.exports = {
	env: { jest: true },
	extends: ["airbnb-base", "prettier"],
	plugins: ["prettier"],
	rules: {
		"import/no-extraneous-dependencies": "off",
		"prettier/prettier": ["error"],
		"func-names": "off",
	},
}

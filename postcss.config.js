/** @type {import('postcss-load-config').Config} */
const config = {
	plugins: [
		require("autoprefixer"),
		require("postcss-nested"),
		require("postcss-import"),
		require("postcss-url"),
		require("postcss-preset-env")({
			browsers: "last 2 versions",
			stage: 0,
		}),
	],
};

module.exports = config;

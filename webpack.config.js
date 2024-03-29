module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
						options: {
							modules: true,
							localIdentName: "[path]___[name]__[local]___[hash:base64:5]",
						},
					},
					{
						loader: "postcss-loader",
					},
				],
			},
		],
	},
};

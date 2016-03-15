const webpack = require('webpack');


module.exports = {
	devtool: 'inline-source-map',
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				loader: 'babel'
			},
			{test: /\.json$/, loader: 'json'}
		]
	},
	resolve: {
		extensions: ['', '.jsx', '.js', '.json']
	},
	watch: true,
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('test')
		})
	]
};

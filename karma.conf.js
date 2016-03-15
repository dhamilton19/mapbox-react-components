require('babel-polyfill');
const webpackConfig = require('./webpack.config.test');


module.exports = function (config) {
	config.set({
		browsers: ['Chrome'],
		singleRun: false,
		frameworks: ['mocha'],
		files: [
			'./node_modules/babel-polyfill/dist/polyfill.js',
			'tests.webpack.js'
		],
		preprocessors: {
			'tests.webpack.js': ['webpack', 'sourcemap']
		},
		reporters: ['dots'],
		webpack: webpackConfig,
		webpackServer: {
			noInfo: true
		}
	});
};

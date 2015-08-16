var webpack = require('webpack');
var path = require("path");

module.exports = {
	
	context: __dirname,
	
	entry: './assets/javascripts/client_application.cjsx',
	
	output: {
		filename: 'client-bundle.js',
		path: __dirname + "/../app/assets/javascripts/generated"
	},
	
	plugins: [
		new webpack.NoErrorsPlugin()
	],
	
	resolve: {
		extensions: ['','.js','.jsx','.cjsx','.coffee'],
		moduleDirectories: ["../node_modules", "javascripts"]
	},
	
	module: {
		loaders: [
			{ test: /\.js?$/, loaders: ['react-hot']},
			{ test: /\.jsx?$/, loaders: ['react-hot', 'jsx-loader']},
			{ test: /\.cjsx$/, loaders: ['react-hot','coffee','cjsx']},
			{ test: /\.coffee$/, loader: "coffee"},
			{ test: /\.json$/, loader: "json-loader"}
		]
	}
};

const devBuild = (typeof process.env.BUILDPACK_URL) === 'undefined';
if (devBuild) {
	console.log('Webpack dev build for Rails');
	module.exports.devtool = 'eval-source-map';
} else {
	console.log('Webpack production build for Rails');
}
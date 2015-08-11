var webpack = require('webpack');
var path = require("path");

module.exports = {
	
	context: __dirname,
	
	entry: {
		App: [
			'webpack-dev-server/client?http://ruby-on-rails-117800.nitrousapp.com:8080/assets/',
			'./javascripts/src/client_application.cjsx'
		]
	},
	
	output: {
		filename: 'client-bundle.js',
		path: __dirname + "/javascripts/generated",
		publicPath: 'http://ruby-on-rails-117800.nitrousapp.com:8080/assets/javascripts'
	},
	
	plugins: [
		new webpack.NoErrorsPlugin()
	],
	
	resolve: {
		extensions: ['','.js','.jsx','.cjsx','.coffee'],
		moduleDirectories: ["node_modules", "javascripts"]
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
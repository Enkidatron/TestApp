var webpack = require('webpack');
var path = require("path");

module.exports = {
	
	context: __dirname,
	
	entry: {
		App: [
			'webpack-dev-server/client?http://localhost:8080/assets/',
			'./assets/javascripts/client_application.cjsx'
		]
	},
	
	output: {
		filename: 'client-bundle.js',
		publicPath: 'http://localhost:8080/assets/javascripts'
	},
	
	plugins: [
		new webpack.NoErrorsPlugin()
	],
	
	resolve: {
		extensions: ['','.js','.jsx','.cjsx','.coffee'],
		moduleDirectories: ["/../node_modules", "javascripts"]
	},
	
	module: {
		loaders: [
			{ test: /\.js?$/, loaders: ['react-hot'], include: path.join(__dirname, 'assets/javascripts')},
			{ test: /\.jsx?$/, loaders: ['react-hot', 'jsx-loader'], include: path.join(__dirname, 'assets/javascripts')},
			{ test: /\.cjsx$/, loaders: ['react-hot','coffee','cjsx'], include: path.join(__dirname, 'assets/javascripts')},
			{ test: /\.coffee$/, loader: "coffee"},
			{ test: /\.json$/, loader: "json-loader"}
		]
	},
	
	devtool: 'eval-source-map'
};


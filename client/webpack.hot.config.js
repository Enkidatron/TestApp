var webpack = require('webpack');
var path = require("path");

var config = require('./webpack.common.config.js');
config.entry = {
		App: [
			'webpack-dev-server/client?http://localhost:8080/assets/',
			'./assets/javascripts/client_application.cjsx'
		]
	};
config.output.publicPath =  'http://localhost:8080/assets/javascripts';
config.devtool = 'eval-source-map';

module.exports = config;
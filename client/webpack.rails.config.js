var webpack = require('webpack');
var path = require("path");

var config = require('./webpack.common.config.js');

config.entry = './assets/javascripts/client_application.cjsx';
config.output.path = __dirname + "/../app/assets/javascripts/generated";
	
const devBuild = (typeof process.env.BUILDPACK_URL) === 'undefined';
if (devBuild) {
	console.log('Webpack dev build for Rails');
	config.devtool = 'eval-source-map';
} else {
	console.log('Webpack production build for Rails');
}

module.exports = config;
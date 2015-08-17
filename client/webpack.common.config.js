var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: __dirname,
	
	output: {
		filename: 'client-bundle.js'
	},
	
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			"window.jQuery": 'jquery'
		})
	],
	
	resolve: {
		extensions: ['','.js','.jsx','.cjsx','coffee'],
		root: [path.join(__dirname, 'assets/javascripts')]
	},
	
	module: {
		loaders: [
			{ test: /\.js?$/, loaders: ['react-hot'], include: path.join(__dirname, 'assets/javascripts')},
			{ test: /\.jsx?$/, loaders: ['react-hot', 'jsx-loader'], include: path.join(__dirname, 'assets/javascripts')},
			{ test: /\.cjsx$/, loaders: ['react-hot','coffee','cjsx'], include: path.join(__dirname, 'assets/javascripts')},
			{ test: /\.coffee$/, loader: "coffee"},
			{ test: /\.json$/, loader: "json-loader"},
			{ test: /\.woff2?$/,   loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" }
		]
	}
}
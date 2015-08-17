React = require 'react'
Router = require('react-router')

DefaultRoute = Router.DefaultRoute
Route = Router.Route

App = require 'components/app'
Quiz = require 'components/quiz'
Graph = require 'components/graph'

routes = (
	<Route handler={App} path="/">
		<DefaultRoute handler={Quiz}/>
		<Route name='quiz' handler={Quiz}/>
		<Route name='graph' handler={Graph}/>
	</Route>
)

module.exports = routes
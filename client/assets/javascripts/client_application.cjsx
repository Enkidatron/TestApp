require 'bootstrap-webpack'

React = require 'react'
Router = require 'react-router'
routes = require 'routes'

Router.run routes, (Handler) ->
	React.render(<Handler />, document.getElementById("reactContent"))
	

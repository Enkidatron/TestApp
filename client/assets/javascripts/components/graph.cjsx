React = require 'react'
RB = require 'react-bootstrap'

Panel = RB.Panel

Graph = React.createClass
	render: ->
		title = <h3>Graph</h3>
		<div>
			<Panel header={title}>
				Here is a graph.
			</Panel>
		</div>
		
module.exports = Graph
React = require 'react'
RB = require('react-bootstrap')
Panel = RB.Panel
Button = RB.Button
Well = RB.Well

Quiz = React.createClass
	render: ->
		title = <h3>Quiz</h3>
		<div>
			<Panel header={title}>
				<Well bsSize="small">Here is a quiz.</Well>
				<Button bsStyle='primary'>Submit</Button>
			</Panel>
		</div>

module.exports = Quiz
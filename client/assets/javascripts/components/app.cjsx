React = require 'react'
Router = require 'react-router'
RB = require 'react-bootstrap'
RRB = require 'react-router-bootstrap'

Navbar = RB.Navbar
Nav = RB.Nav
NavItem = RB.NavItem
Grid = RB.Grid
Row = RB.Row

NavItemLink = RRB.NavItemLink

Link = Router.Link
RouteHandler = Router.RouteHandler

App = React.createClass
	render: ->
		<div>
			<Navbar brand='Brand Text' staticTop>
				<Nav>
					<NavItemLink to="quiz">Quiz</NavItemLink>
					<NavItemLink to="graph">Graph</NavItemLink>
				</Nav>
			</Navbar>
			<Grid><Row>
				<RouteHandler />
			</Row></Grid>
		</div>

module.exports = App
'use strict';
var React = require('react');
var _ = require('lodash');
var RoomTypes = require('../constants/RoomTypes');

module.exports = React.createClass({
	propTypes: {
		width: React.PropTypes.number,
		height: React.PropTypes.number,
		roomType: React.PropTypes.oneOf(_.keys(RoomTypes)).isRequired
	},

	getInitialState: function () {
		return {
			occupant: []
		}
	},

	render: function () {
		var roomStyle = {
			display: 'inline-block',
			overflow: 'hidden',
			margin: '10px',
			border: '1px solid #AAA',
			width: (this.props.width*100)+'px',
			height: (this.props.height*100)+'px'
		};
		var pStyle = {
			textAlign: 'center',
			verticalAlign: 'middle',
			display: 'table-cell',
			width: (this.props.width*100)+'px',
			height: (this.props.height*100)+'px'
		};
		return (
			<div style={roomStyle}>
				<p style={pStyle}>
				{this.props.roomType}
				</p>
			</div>
		);
	}
});
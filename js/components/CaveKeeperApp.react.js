'use strict';
var React = require('react');
var Room = require('./Room.react');
var RoomTypes = require('../constants/RoomTypes');

module.exports = React.createClass({
	render: function () {
		return (
			<div>
				<h1>Hello</h1>
				<Room width={2} height={1} roomType={RoomTypes.GATE} />
				<Room width={0.5} height={1} roomType={RoomTypes.ELEVATOR} />
			</div>
		);
	}
});
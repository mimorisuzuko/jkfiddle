const _ = require('lodash');
const React = require('react');
const {lblack: backgroundColor, white, dwhite} = require('../color.jsx');
const {Component} = React;

class Side extends Component {
	render() {
		const {props: {width, items}} = this;
		const index = items.get('index');
		const contents = _.map(items.get('contents'), ({display}, i) => (
			<li style={{
				color: i === index ? white : dwhite,
				paddingLeft: 5
			}}>
				# {display}
			</li>
		));

		return (
			<div style={{
				width,
				backgroundColor
			}}>
				<ul style={{
					listStyle: 'none',
					padding: 0,
					margin: 0
				}}>
					{contents}
				</ul>
			</div>
		);
	}
}

module.exports = Side;
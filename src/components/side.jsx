const _ = require('lodash');
const React = require('react');
const {lblack: backgroundColor, white, dwhite} = require('../color.jsx');
const {Component} = React;

class Side extends Component {
	render() {
		const {props: {width, items}} = this;
		const index = items.get('index');
		const contents = _.map(items.get('contents'), ({display}, i) => (
			<li onClick={this.onClickItem.bind(this, i)} style={{
				color: i === index ? white : dwhite,
				paddingLeft: 5,
				cursor: 'pointer'
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
					margin: 0,
					webkitUserSelect: 'none',
					fontFamily: 'sans-serif'
				}}>
					{contents}
				</ul>
			</div>
		);
	}

	/**
	 * @param {number} index
	 */
	onClickItem(index) {
		const {props: {onClickItem}} = this;

		onClickItem(index);
	}
}

module.exports = Side;
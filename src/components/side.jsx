const _ = require('lodash');
const React = require('react');
const {lblack, llblack, white, dwhite} = require('../color.jsx');
const {Component} = React;

class Side extends Component {
	render() {
		const {props: {width, items}} = this;
		const index = items.get('index');
		const contents = _.map(items.get('contents'), ({display}, i) => {
			const selected = i === index;

			return (
				<li onClick={this.onClickItem.bind(this, i)} style={{
					color: selected ? white : dwhite,
					padding: '2px 4px',
					fontSize: '0.8em',
					cursor: 'pointer',
					marginRight: 5,
					borderTopRightRadius: 4,
					borderBottomRightRadius: 4,
					backgroundColor: selected ? llblack : lblack
				}}>
					#{i + 1} {display}
				</li>
			);
		});

		return (
			<div style={{
				width,
				backgroundColor: lblack
			}}>
				<ul style={{
					listStyle: 'none',
					padding: '10px 0',
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
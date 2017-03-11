const _ = require('lodash');
const React = require('react');
const { lblack, llblack, white, dwhite } = require('../color.jsx');
const { Component } = React;

class Side extends Component {
	constructor(props) {
		super(props);

		this.onClickItem = this.onClickItem.bind(this);
	}

	render() {
		const { props: { width, items, index } } = this;
		const contents = _.map(items, (name, i) => {
			const selected = i === index;
			let display = 'null';

			if (name === 'pug') {
				display = 'Pug';
			} else if (name === 'scss') {
				display = 'SCSS';
			} else if (name === 'javascript') {
				display = 'JS';
			} else if (name === 'result') {
				display = 'Result';
			}

			return (
				<li onClick={this.onClickItem} data-index={i} style={{
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
					webkitUserSelect: 'none'
				}}>
					{contents}
				</ul>
			</div>
		);
	}

	/**
	 * @param {MouseEvent} e
	 */
	onClickItem(e) {
		const { currentTarget: { dataset: { index } } } = e;
		const { props: { onClickItem } } = this;

		onClickItem(_.parseInt(index));
	}
}

module.exports = Side;
const React = require('react');
const Immutable = require('immutable');
const { blue } = require('../color.jsx');
const { Record } = Immutable;
const { Component } = React;

class BalloonModel extends Record({ title: '', body: '', color: blue }) {
	static get LIFE() {
		return 1200;
	}
}

class Balloon extends Component {
	constructor(props) {
		super(props);

		const { LIFE: life } = BalloonModel;

		this.state = { opacity: 1, life };
		this.onClick = this.onClick.bind(this);
	}

	fadeOut() {
		const { LIFE: max } = BalloonModel;
		const {
			state: { opacity: _opacity, life: _life },
			props: { remove }
		} = this;
		const life = _life - 1;
		const opacity = _opacity * (1 - (Math.cos(Math.PI * life / max) + 1) / 2);

		if (opacity < 0) {
			remove();
		} else {
			this.setState({ opacity, life });
			requestAnimationFrame(this.fadeOut.bind(this));
		}
	}

	componentDidMount() {
		this.fadeOut();
	}

	render() {
		const {
			props: { model },
			state: { opacity }
		} = this;
		const backgroundColor = model.get('color');

		return (
			<div onClick={this.onClick} style={{
				color: 'white',
				fontSize: '12',
				backgroundColor,
				padding: '5px 10px',
				marginBottom: 5,
				borderRadius: 4,
				cursor: 'pointer',
				opacity
			}}>
				<div>{model.get('title')}</div>
				<div>{model.get('body')}</div>
			</div>
		);
	}

	onClick() {
		const { props: { remove, index } } = this;

		remove(index);
	}
}

module.exports = { BalloonModel, Balloon };
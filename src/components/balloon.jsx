const React = require('react');
const Immutable = require('immutable');
const {blue} = require('../color.jsx');
const {Record} = Immutable;
const {Component} = React;

class BalloonModel extends Record({ title: '', body: '', color: blue }) { }

class Balloon extends Component {
	constructor(props) {
		super(props);

		this.state = { opacity: 1 };
	}

	fadeOut() {
		const {
			state: {opacity: _opacity},
			props: {remove}
		} = this;

		const opacity = _opacity - 0.01;

		if (opacity < 0) {
			remove();
		} else {
			this.setState({ opacity });
			requestAnimationFrame(this.fadeOut.bind(this));
		}
	}

	componentDidMount() {
		this.fadeOut();
	}

	render() {
		const {
			props: {model},
			state: {opacity}
		} = this;
		const backgroundColor = model.get('color');

		return (
			<div onClick={this.onClick.bind(this)} style={{
				color: 'white',
				fontSize: '12',
				fontFamily: 'sans-serif',
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
		const {props: {remove}} = this;

		remove();
	}
}

module.exports = { BalloonModel, Balloon };
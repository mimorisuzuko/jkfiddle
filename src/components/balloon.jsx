const React = require('react');
const Immutable = require('immutable');
const {blue} = require('../color.jsx');
const {Record} = Immutable;
const {Component} = React;

class BalloonModel extends Record({ title: '', body: '' }) { }

class Balloon extends Component {
	render() {
		const {props: {model}} = this;

		return (
			<div onClick={this.onClick.bind(this)} style={{
				color: 'white',
				fontSize: '12',
				fontFamily: 'sans-serif',
				backgroundColor: blue,
				padding: '5px 10px',
				marginBottom: 5,
				borderRadius: 4,
				cursor: 'pointer'
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
const React = require('react');
const {Component} = React;

class Body extends Component {
	render() {
		const {props: {content: {display: name}}} = this;

		return (
			<div style={{
				flex: 1
			}}>
				Body {name}
			</div>
		);
	}
}

module.exports = Body;
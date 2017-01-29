const React = require('react');
const ReactDOM = require('react-dom');
const {Component} = React;

class App extends Component {
	render() {
		return (
			<div>
				JKFiddle: Test your JavaScript, SCSS, Pug on Electron
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('main'));
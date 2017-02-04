const _ = require('lodash');
const React = require('react');
const electron = require('electron');
const Immutable = require('immutable');
const ReactDOM = require('react-dom');
const {orange} = require('../color.jsx');
const {BalloonModel} = require('./balloon.jsx');
const {Record, Map} = Immutable;
const {Component} = React;
const {ipcRenderer} = electron;

class HTMLRenderModel extends Record({ pug: '', scss: '', js: '' }) { }

class HTMLRender extends Component {
	shouldComponentUpdate(nextProps) {
		const {model: nextModel} = nextProps;
		const {props: {model}} = this;

		return !Immutable.is(Map(nextModel), Map(model));
	}

	componentDidMount() {
		const $e = ReactDOM.findDOMNode(this);

		$e.addEventListener('console-message', (e) => {
			const {message} = e;

			console.log(message);
		});
	}

	render() {
		const {props: {model, onError}} = this;
		const [
			{status: htmlStatus, result: htmlResult},
			{status: cssStatus, result: cssResult},
			{status: jsStatus, result: jsResult}
		] = ipcRenderer.sendSync('compile', [model.get('pug'), model.get('scss'), model.get('js')]);
		let src = '';

		if (_.every([htmlStatus, cssStatus, jsStatus], (a) => a === 'success')) {
			const $html = document.createElement('html');
			$html.innerHTML = htmlResult;
			const $style = document.createElement('style');
			$style.innerHTML = cssResult;
			$html.querySelector('head').appendChild($style);
			const $script = document.createElement('script');
			$script.innerHTML = jsResult;
			$html.querySelector('body').appendChild($script);
			src = $html.innerHTML;
		} else {
			const errors = [];
			if (htmlStatus === 'error') {
				errors.push(new BalloonModel({ title: 'Pug', body: htmlResult, color: orange }));
			}
			if (cssStatus === 'error') {
				errors.push(new BalloonModel({ title: 'SCSS', body: cssResult, color: orange }));
			}
			if (jsStatus === 'error') {
				errors.push(new BalloonModel({ title: 'JS', body: jsResult, color: orange }));
			}

			onError(errors);
		}

		return (
			<webview src={`data:text/html,${encodeURIComponent(src)}`} nodeintegration={true} />
		);
	}
}

module.exports = { HTMLRenderModel, HTMLRender };
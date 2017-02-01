const _ = require('lodash');
const React = require('react');
const electron = require('electron');
const Immutable = require('immutable');
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

	render() {
		const {props: {model, onError}} = this;
		const [
			{status: htmlStatus, result: htmlResult},
			{status: cssStatus, result: cssResult},
			{status: jsStatus, result: jsResult}
		] = ipcRenderer.sendSync('compile', [model.get('pug'), model.get('scss'), model.get('js')]);
		let srcDoc = '';

		if (_.every([htmlStatus, cssStatus, jsStatus], (a) => a === 'success')) {
			const $html = document.createElement('html');
			$html.innerHTML = htmlResult;
			const $style = document.createElement('style');
			$style.innerHTML = cssResult;
			$html.querySelector('head').appendChild($style);
			const $script = document.createElement('script');
			$script.innerHTML = jsResult;
			$html.querySelector('body').appendChild($script);
			srcDoc = $html.innerHTML;
		} else {
			const errors = [];
			if (htmlStatus === 'error') {
				errors.push(new BalloonModel({ title: 'Pug', body: htmlResult }));
			}
			if (cssStatus === 'error') {
				errors.push(new BalloonModel({ title: 'SCSS', body: cssResult }));
			}
			if (jsStatus === 'error') {
				errors.push(new BalloonModel({ title: 'JS', body: jsResult }));
			}

			onError(errors);
		}

		return (
			<iframe srcDoc={srcDoc} style={{
				display: 'block',
				border: 'none',
				width: '100%',
				height: '100%'
			}}></iframe>
		);
	}
}

module.exports = { HTMLRenderModel, HTMLRender };
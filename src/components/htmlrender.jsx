const _ = require('lodash');
const React = require('react');
const electron = require('electron');
const Immutable = require('immutable');
const { orange } = require('../color.jsx');
const { BalloonModel } = require('./balloon.jsx');
const { Record, Map } = Immutable;
const { Component } = React;
const { ipcRenderer } = electron;

class HTMLRenderModel extends Record({ pug: '', scss: '', js: '' }) { }

class HTMLRender extends Component {
	constructor(props) {
		super(props);

		this.openDevTools = this.openDevTools.bind(this);
	}

	shouldComponentUpdate(nextProps) {
		const { model: nextModel } = nextProps;
		const { props: { model } } = this;

		return !Immutable.is(Map(nextModel), Map(model));
	}

	componentDidMount() {
		const { refs: { $webview } } = this;

		$webview.setAttribute('nodeintegration', true);
	}

	openDevTools() {
		const { refs: { $webview } } = this;

		$webview.openDevTools();
	}

	render() {
		const { props: { model, onError } } = this;
		const [
			{ status: htmlStatus, result: htmlResult },
			{ status: cssStatus, result: cssResult },
			{ status: jsStatus, result: jsResult }
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
			src = `data:text/html;charset=utf-8,${encodeURIComponent($html.innerHTML)}`;
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
			<div style={{
				width: '100%',
				height: '100%',
				position: 'relative'
			}}>
				<webview ref='$webview' src={src} style={{
					width: '100%',
					height: '100%'
				}} />
				<div onClick={this.openDevTools} style={{
					position: 'absolute',
					left: 10,
					bottom: 10,
					color: 'white',
					padding: '4px 8px',
					borderRadius: 4,
					fontSize: 12,
					cursor: 'pointer',
					backgroundColor: 'rgba(0, 0, 0, 0.8)'
				}}>
					Open Devtools
				</div>
			</div>
		);
	}
}

module.exports = { HTMLRenderModel, HTMLRender };
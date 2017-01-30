const React = require('react');
const libpath = require('path');
const Immutable = require('immutable');
const Editor = require('./editor.jsx');
const HTMLRender = require('./htmlrender.jsx');
const {Map} = Immutable;
const {Component} = React;

class Body extends Component {
	constructor(props) {
		super(props);

		this.values = Map({
			pug: require('./sample/pug.txt'),
			scss: require('./sample/scss.txt'),
			javascript: require('./sample/js.txt')
		});
	}

	render() {
		const {
			props: {content: {name}, dwidth},
			values
		} = this;
		const pug = values.get('pug');
		const scss = values.get('scss');
		const jsString = values.get('javascript');
		const editorValue = name === 'pug' ? pug : name === 'scss' ? scss : name === 'javascript' ? jsString : null;
		const html = <HTMLRender pug={pug} scss={scss} javascript={jsString} />;
		const editor = <Editor value={editorValue} language={name} onChange={this.onChangeEditor.bind(this)} />;

		return (
			<div style={{
				width: `calc(100% - ${dwidth}px)`,
				height: '100%',
				overflowY: 'hidden'
			}}>
				{name === 'view' ? html : editor}
			</div>
		);
	}

	/**
	 * @param {string} language
	 * @param {string} value
	 */
	onChangeEditor(language, value) {
		const {values} = this;

		this.values = values.set(language, value);
	}
}

module.exports = Body;
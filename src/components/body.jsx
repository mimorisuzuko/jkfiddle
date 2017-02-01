const React = require('react');
const ReactDOM = require('react-dom');
const libpath = require('path');
const Immutable = require('immutable');
const {Editor, EditorModel} = require('./editor.jsx');
const HTMLRender = require('./htmlrender.jsx');
const {Map} = Immutable;
const {Component} = React;

class Body extends Component {
	constructor(props) {
		super(props);

		this.values = Map({
			pug: localStorage.getItem('jkfiddle-pug') || require('./sample/pug.txt'),
			scss: localStorage.getItem('jkfiddle-scss') || require('./sample/scss.txt'),
			javascript: localStorage.getItem('jkfiddle-javascript') || require('./sample/js.txt')
		});
		this.state = {
			width: 0,
			height: 0
		};

		window.addEventListener('resize', this.onResize.bind(this));
	}

	resize() {
		const {width, height} = ReactDOM.findDOMNode(this).getBoundingClientRect();

		this.setState({ width, height });
	}

	onResize() {
		this.resize();
	}

	render() {
		const {
			props: {content: {name}, dwidth},
			state: {width, height},
			values
		} = this;
		const pug = values.get('pug');
		const scss = values.get('scss');
		const js = values.get('javascript');
		const value = name === 'pug' ? pug : name === 'scss' ? scss : name === 'javascript' ? js : null;
		const html = <HTMLRender pug={pug} scss={scss} js={js} />;
		const editor = <Editor
			model={new EditorModel({ width, height, value, language: name })}
			onChange={this.onChangeEditor.bind(this)}
			editorDidMount={this.resize.bind(this)}
			/>;

		return (
			<div style={{
				width: `calc(100% - ${dwidth}px)`,
				height: '100%',
				overflowY: 'hidden'
			}}>
				{name === 'result' ? html : editor}
			</div>
		);
	}

	/**
	 * @param {EditorModel} model
	 */
	onChangeEditor(model) {
		const {values} = this;
		const language = model.get('language');
		const value = model.get('value');

		this.values = values.set(language, value);
	}
}

module.exports = Body;
const React = require('react');
const ReactDOM = require('react-dom');
const libpath = require('path');
const Immutable = require('immutable');
const {Editor, EditorModel} = require('./editor.jsx');
const {Balloon, BalloonModel} = require('./balloon.jsx');
const {HTMLRender, HTMLRenderModel} = require('./htmlrender.jsx');
const {Map, List} = Immutable;
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
			height: 0,
			balloons: List()
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
			state: {width, height, balloons},
			values
		} = this;
		const pug = values.get('pug');
		const scss = values.get('scss');
		const js = values.get('javascript');
		const value = name === 'pug' ? pug : name === 'scss' ? scss : name === 'javascript' ? js : null;
		const html = <HTMLRender onError={this.onError.bind(this)} model={new HTMLRenderModel({ pug, scss, js })} />;
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
				<div style={{
					position: 'absolute',
					right: 10,
					bottom: 10
				}}>
					{balloons.map((a, i) => <Balloon model={a} remove={this.removeBalloon.bind(this, i)} />)}
				</div>
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

	/**
	 * @param {number} index
	 */
	removeBalloon(index) {
		const {state: {balloons}} = this;

		this.setState({ balloons: balloons.filter((a, i) => i !== index) });
	}

	/**
	 * @param {BalloonModel[]} models
	 */
	onError(models) {
		const {state: {balloons}} = this;

		this.setState({ balloons: balloons.concat(models) });
	}
}

module.exports = Body;
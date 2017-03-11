const React = require('react');
const ReactDOM = require('react-dom');
const libpath = require('path');
const Immutable = require('immutable');
const _ = require('lodash');
const fs = require('fs');
const { orange } = require('../color.jsx');
const { Editor, EditorModel } = require('./editor.jsx');
const { Balloon, BalloonModel } = require('./balloon.jsx');
const { HTMLRender, HTMLRenderModel } = require('./htmlrender.jsx');
const { Map, List } = Immutable;
const { Component } = React;

class Body extends Component {
	constructor(props) {
		super(props);

		this.editors = Map({
			pug: new EditorModel({ value: localStorage.getItem('jkfiddle-pug') || require('./sample/pug.txt'), language: 'pug' }),
			scss: new EditorModel({ value: localStorage.getItem('jkfiddle-scss') || require('./sample/scss.txt'), language: 'scss' }),
			javascript: new EditorModel({ value: localStorage.getItem('jkfiddle-javascript') || require('./sample/javascript.txt'), language: 'javascript' })
		});

		this.state = {
			width: 0,
			height: 0,
			balloons: List()
		};
		this.onError = this.onError.bind(this);
		this.onChangeEditor = this.onChangeEditor.bind(this);
		this.resize = this.resize.bind(this);
		this.removeBalloon = this.removeBalloon.bind(this);
		window.addEventListener('resize', this.onResize.bind(this));
	}

	componentDidMount() {
		document.addEventListener('dragover', this.onDragOver.bind(this));
		document.addEventListener('drop', this.onDrop.bind(this));
	}

	resize() {
		const { width, height } = ReactDOM.findDOMNode(this).getBoundingClientRect();

		this.setState({ width, height });
	}

	onResize() {
		this.resize();
	}

	render() {
		const {
			props: { language, dwidth },
			state: { width, height, balloons },
			editors
		} = this;
		const pug = editors.get('pug').get('value');
		const scss = editors.get('scss').get('value');
		const js = editors.get('javascript').get('value');
		const html = <HTMLRender onError={this.onError} model={new HTMLRenderModel({ pug, scss, js })} />;
		const editor = language === 'result' ? null : <Editor
			model={editors.get(language)}
			onChange={this.onChangeEditor}
			editorDidMount={this.resize}
			width={width}
			height={height}
		/>;

		return (
			<div style={{
				width: `calc(100% - ${dwidth}px)`,
				height: '100%',
				overflowY: 'hidden'
			}}>
				{language === 'result' ? html : editor}
				<div style={{
					position: 'absolute',
					right: 10,
					bottom: 10
				}}>
					{balloons.map((a, i) => <Balloon model={a} remove={this.removeBalloon} index={i} />)}
				</div>
			</div>
		);
	}

	/**
	 * @param {DragEvent} e
	 */
	onDragOver(e) {
		e.preventDefault();
	}

	/**
	 * @param {DragEvent} e
	 */
	onDrop(e) {
		e.preventDefault();

		const { dataTransfer: { files } } = e;
		const { editors, state: { balloons: balloons } } = this;
		const dballoons = [];

		_.forEach(files, ({ path }) => {
			const basename = libpath.basename(path);
			const extension = _.last(_.split(basename, '.'));
			const hasUploaded = _.some(['pug', 'scss', 'js'], (a) => {
				if (a !== extension) { return false; }
				const value = fs.readFileSync(path, 'utf-8');
				const language = a === 'js' ? 'javascript' : a;
				const editor = editors.get(language);

				this.editors = this.editors.set(language, editor.set('value', value));
				dballoons.push(new BalloonModel({ body: `Uploaded ${basename}` }));
				return true;
			});

			if (!hasUploaded) {
				dballoons.push(new BalloonModel({ body: `.${extension} is not supported`, color: orange }));
			}
		});

		if (dballoons.length > 0) {
			this.setState({ balloons: balloons.concat(dballoons) });
		}
	}

	/**
	 * @param {EditorModel} model
	 */
	onChangeEditor(model) {
		const { editors } = this;
		const language = model.get('language');
		
		this.editors = editors.set(language, model);
	}

	/**
	 * @param {number} index
	 */
	removeBalloon(index) {
		const { state: { balloons } } = this;

		this.setState({ balloons: balloons.filter((a, i) => i !== index) });
	}

	/**
	 * @param {BalloonModel[]} models
	 */
	onError(models) {
		const { state: { balloons } } = this;

		this.setState({ balloons: balloons.concat(models) });
	}
}

module.exports = Body;
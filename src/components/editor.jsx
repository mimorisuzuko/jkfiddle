self.module = undefined;
self.process.browser = true;

const Immutable = require('immutable');
const libpath = require('path');
const React = require('react');
const {Component} = React;
const {Record, Map} = Immutable;

class EditorModel extends Record({ width: 0, height: 0, value: '', language: '' }) { }

class Editor extends Component {
	constructor(props) {
		super(props);

		this.id = `editor-${Date.now()}`;
		/** @type {monaco.editor.IStandaloneCodeEditor} */
		this.editor = null;
		/** @type {HTMLDivElement} */
		this.$element = null;
	}

	render() {
		const {id} = this;

		return (
			<div id={id}></div>
		);
	}

	componentWillReceiveProps(nextProps) {
		const {model: nextModel} = nextProps;
		const {editor, props: {model}} = this;

		if (editor && Immutable.is(Map(nextModel), Map(model))) { return; }
		this.create(nextModel);
	}

	onKeyUp() {
		const {editor, props: {model, onChange}} = this;
		const _value = model.get('value');
		const value = editor.getValue();

		if (_value === value) { return; }
		const language = model.get('language');

		localStorage.setItem(`jkfiddle-${language}`, value);
		onChange(model.merge({ language, value }));
	}

	/**
	 * @param {EditorModel} model
	 */
	create(model) {
		let language = model.get('language');
		const value = model.get('value');
		const width = model.get('width');
		const height = model.get('height');
		const {$element, editor: _editor} = this;

		// Clear the editor
		if (_editor) {
			_editor.dispose();
		}
		language = language === 'pug' ? 'jade' : language;
		$element.innerText = '';
		$element.style.width = `${width}px`;
		$element.style.height = `${height}px`;

		// Re-create the editor
		const editor = monaco.editor.create($element, {
			value,
			language,
			theme: 'vs-dark'
		});
		editor.onKeyUp(this.onKeyUp.bind(this));

		this.editor = editor;
	}

	componentDidMount() {
		const {
			props: {editorDidMount},
			id,
		} = this;

		amdRequire.config({
			baseUrl: `file://${libpath.join(__dirname, '../../node_modules/monaco-editor/min')}`
		});

		amdRequire(['vs/editor/editor.main'], () => {
			this.$element = document.getElementById(id);
			editorDidMount();
		});
	}
}

module.exports = { EditorModel, Editor };
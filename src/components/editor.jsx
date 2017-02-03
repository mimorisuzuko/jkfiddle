self.module = undefined;
self.process.browser = true;

const _ = require('lodash');
const Immutable = require('immutable');
const libpath = require('path');
const React = require('react');
const {Component} = React;
const {Record, Map} = Immutable;

class EditorModel extends Record({ value: '', language: '', lineNumber: 0, column: 0 }) { }

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

	componentWillReceiveProps(_nextProps) {
		const {editor, props: _props} = this;
		const nextProps = _.cloneDeep(_nextProps);
		const props = _.cloneDeep(_props);

		_.forEach([props, nextProps], (a) => {
			_.forEach(_.toPairs(a), ([k, v]) => {
				if (typeof v !== 'function') { return; }
				delete a[k];
			});
		});
		if (editor && Immutable.is(Map(nextProps), Map(props))) { return; }
		this.create(nextProps);
	}

	onDidChangeCursorPosition() {
		const {editor, props: {model, onChange}} = this;
		const _value = model.get('value');
		const value = editor.getValue();

		if (_value === value) { return; }
		const language = model.get('language');
		const {lineNumber, column} = editor.getPosition();

		localStorage.setItem(`jkfiddle-${language}`, value);
		onChange(model.merge({ language, value, lineNumber, column }));
	}

	/**
	 * @param {{model: EditorModel, width: number, height: number}} props
	 */
	create(props) {
		const {model, width, height} = props;
		let language = model.get('language');
		const value = model.get('value');
		const lineNumber = model.get('lineNumber');
		const column = model.get('column');
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
		editor.focus();
		editor.setPosition({ column, lineNumber });
		editor.onDidChangeCursorPosition(this.onDidChangeCursorPosition.bind(this));

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
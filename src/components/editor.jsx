self.module = undefined;
self.process.browser = true;

const libpath = require('path');
const React = require('react');
const {Component} = React;

module.exports = class Editor extends Component {
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
			<div id={id}>
			</div>
		);
	}

	/**
	 * @param {{value: string, language: string, width: number, height: number}} nextProps
	 */
	componentWillReceiveProps(nextProps) {
		const {value, language, width, height} = nextProps;
		const {editor} = this;

		this.create(language, value, width, height);
	}

	onKeyUp() {
		const {editor, props: {value: _value, language, onChange}} = this;
		const value = editor.getValue();

		if (_value === value) { return; }
		localStorage.setItem(`jkfiddle-${language}`, value);
		onChange(language, value);
	}

	/**
	 * @param {string} language
	 * @param {string} value
	 * @param {number} width
	 * @param {number} height
	 */
	create(language, value, width = 0, height = 0) {
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
			props: {value, language, editorDidMount},
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
};
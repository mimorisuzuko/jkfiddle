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
			<div id={id} style={{
				width: '100%',
				height: '100%'
			}}>
			</div>
		);
	}

	/**
	 * @param {{value: string, language: string}} nextProps
	 */
	shouldComponentUpdate(nextProps) {
		const {language: nextLanguage} = nextProps;
		const {props: {language}} = this;

		return false;
	}

	/**
	 * @param {{value: string, language: string}} nextProps
	 */
	componentWillReceiveProps(nextProps) {
		const {value, language} = nextProps;
		const {editor} = this;

		this.create(language, value);
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
	 */
	create(language, value) {
		const {$element, editor: _editor} = this;

		// Clear the editor
		if (_editor) {
			_editor.dispose();
		}
		language = language === 'pug' ? 'jade' : language;
		$element.innerText = '';

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
			props: {value, language},
			id,
		} = this;

		amdRequire.config({
			baseUrl: `file://${libpath.join(__dirname, '../../node_modules/monaco-editor/min')}`
		});

		amdRequire(['vs/editor/editor.main'], () => {
			this.$element = document.getElementById(id);
			this.create(language, value);
		});
	}
};
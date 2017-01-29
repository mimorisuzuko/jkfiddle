const {ipcRenderer} = require('electron');
const React = require('react');
const ReactDOM = require('react-dom');
const {Component} = React;
const Side = require('./components/side.jsx');
const Body = require('./components/body.jsx');
const ItemsModel = require('./items-model.jsx');

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { items: new ItemsModel() };

		ipcRenderer.on('open-item-from-menu', this.openItemFromMenu.bind(this));
	}

	render() {
		const {state: {items}} = this;
		const index = items.get('index');
		const content = items.get('contents')[index];

		return (
			<div style={{
				display: 'flex',
				flexDirection: 'row',
				width: '100%',
				height: '100%'
			}}>
				<Side width={68} items={items} />
				<Body content={content} />
			</div>
		);
	}

	/**
	 * @param {Electron.IpcRendererEvent} e
	 * @param {{index: number}} args
	 */
	openItemFromMenu(e, args) {
		const {index} = args;
		const {state: {items}} = this;

		this.setState({ items: items.set('index', index) });
	}
}

ReactDOM.render(<App />, document.querySelector('main'));
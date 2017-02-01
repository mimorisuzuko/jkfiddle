const {ipcRenderer} = require('electron');
const React = require('react');
const ReactDOM = require('react-dom');
const {Component} = React;
const Side = require('./components/side.jsx');
const Body = require('./components/body.jsx');

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { items: ['pug', 'scss', 'javascript', 'result'], index: 0 };

		ipcRenderer.on('open-item-from-menu', this.openItemFromMenu.bind(this));
	}

	render() {
		const {state: {items, index}} = this;
		const content = items[index];
		const sideWidth = 70;

		return (
			<div style={{
				display: 'flex',
				flexDirection: 'row',
				width: '100%',
				height: '100%'
			}}>
				<Side width={sideWidth} items={items} index={index} onClickItem={this.onClickItem.bind(this)} />
				<Body content={content} dwidth={sideWidth} />
			</div>
		);
	}

	/**
	 * @param {Electron.IpcRendererEvent} e
	 * @param {{index: number}} args
	 */
	openItemFromMenu(e, args) {
		const {index} = args;

		this.setState({ index });
	}

	/**
	 * @param {number} index
	 */
	onClickItem(index) {
		this.setState({ index });
	}
}

ReactDOM.render(<App />, document.querySelector('main'));
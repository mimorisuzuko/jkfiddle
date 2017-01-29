const webpack = require('webpack');
const libpath = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const {DefinePlugin, optimize: {UglifyJsPlugin}} = webpack;
const dst = 'app/dst';

module.exports = {
	entry: libpath.join(__dirname, 'src/'),
	output: {
		path: libpath.join(__dirname, dst),
		filename: 'index.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015'],
				}
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new CleanWebpackPlugin([dst], {
			root: __dirname,
			verbose: false,
			dry: false,
			exclude: ['index.html', 'index.css']
		}),
		new DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new UglifyJsPlugin({
			compress: {
				warnings: false
			},
			mangle: true
		})
	],
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM',
		'immutable': 'Immutable',
		'lodash': '_'
	},
	target: 'electron',
	node: {
		__filename: true,
		__dirname: true
	}
};
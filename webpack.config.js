let webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = [
	// JSX
	{
		mode: 'development',
		context: path.resolve(__dirname),
		optimization: {
			minimizer: [new TerserPlugin({ /* additional options here */ })],
		},
		entry : [
			'script-loader!jquery/dist/jquery.min.js',
			'script-loader!tether/dist/js/tether.js',
			'script-loader!bootstrap/dist/js/bootstrap.js',
			'app/app.jsx',
			// 'app/styles/app.scss'
		],
		externals: {
			// module name : variable name in external scripts file
			'jquery' : 'jQuery'
		},
		plugins : [
			// "@babel/plugin-transform-runtime",
			// "@babel/plugin-syntax-dynamic-import",
			// "@babel/plugin-proposal-class-properties",
			new webpack.ProvidePlugin({
				// variable name to watch for : module to replace it with
				'$' : 'jquery',
				'jQuery' : 'jquery',
				// "window.Tether": 'tether'
			}),
			// css
			new MiniCssExtractPlugin({
				// Options similar to the same options in webpackOptions.output
				// all options are optional
				// filename: '[name].css',
				// chunkFilename: '[id].css',
				// ignoreOrder: false, // Enable to remove warnings about conflicting order
			}),
		],
		output : {
			path: __dirname,
			// filename: './public/bundle-[name]'
			filename: './public/bundle.js'
		},
		resolve : {
			// root: __dirname,
			alias: {
				// "react/jsx-runtime": "node_modules/react/jsx-runtime.js",
				// "react/jsx-dev-runtime": "node_modules/react/jsx-dev-runtime.js",
				// SomeComponent: 'app/components/SomeComponent.jsx',


				// Modules
				LayoutModule: 'app/modules/layout/LayoutModule',
				MovieModule: 'app/modules/movie/MovieModule',
				TVModule: 'app/modules/tv/TVModule',
				PersonModule: 'app/modules/person/PersonModule',
				ModalModule: 'app/modules/modal/ModalModule',
				GenreModule: 'app/modules/genre/GenreModule',
				KeywordModule: 'app/modules/keyword/KeywordModule',

				// Helper Modules
				LightboxModule: 'app/modules/lightbox/LightboxModule',
				PaginationModule: 'app/modules/pagination/PaginationModule',
				CarouselModule: 'app/modules/carousel/CarouselModule',

				// Services
				HttpService: 'app/services/HttpService',

				// Helpers (pipe like)
				CamelCase: 'app/services/CamelCase',
				BreakpointService: 'app/services/BreakpointService',
				Hyphenate: 'app/services/Hyphenate',

				Main: 'app/components/Main',
				IndexComponent: 'app/components/IndexComponent',
				AboutComponent: 'app/components/AboutComponent',

				// CSS
				// applicationStyles: 'app/styles/app.scss',

				modules: 'app/modules',

			},
			extensions : ['.js', '.jsx', '.scss'],
			modules: [
				path.resolve('./node_modules'),
				path.resolve(__dirname),
				// path.resolve('./app/modules/services'),
				// path.resolve('./app/modules'),
				// path.resolve('./app/modules/person'),
				// path.resolve('./app/modules/movie'),
				// path.resolve('./app/modules/keyword'),
				// path.resolve('./app/modules/genre/GenreModule'),
				// path.resolve('./app/modules/tv'),
				// path.resolve('./app/styles'),
				// path.resolve('./app/styles/themes'),
				// path.resolve('./node_modules/react'),
				// path.resolve('./node_modules/react-dom'),
				// path.resolve('./node_modules/react-router'),
			]
		},
		module: {

			rules: [
				{
					loader: 'thread-loader',
					// loaders with equal options will share worker pools
					options: {
						// the number of spawned workers, defaults to (number of cpus - 1) or
						// fallback to 1 when require('os').cpus() is undefined
						workers: 2,

						// number of jobs a worker processes in parallel
						// defaults to 20
						workerParallelJobs: 10,

						// Allow to respawn a dead worker pool
						// respawning slows down the entire compilation
						// and should be set to false for development
						poolRespawn: false,

						// timeout for killing the worker processes when idle
						// defaults to 500 (ms)
						// can be set to Infinity for watching builds to keep workers alive
						poolTimeout: 2000,

						// number of jobs the poll distributes to the workers
						// defaults to 200
						// decrease of less efficient but more fair distribution
						poolParallelJobs: 20
					}
				},
				{
					use: [
						'babel-loader',
						{
							loader: 'babel-loader',
							options: {
								test: /\.jsx?$/, // /\.(jsx?)$/,
								exclude: /node_modules/,
								presets: [
									'@babel/preset-env',
									'@babel/preset-react',
								]
								// presets: [
								// 	// 'react',
								// 	'es2015',
								// 	'stage-0',
								// 	'@babel/preset-react',
								// ],
							}
						}
					]
				},
				{
					test: /\.s[ac]css$/i,
					use: [
						'style-loader',
						'css-loader',
						'sass-loader',
					]
				},
				// {
				// 	test: /\.css$/i,
				// 	use: [MiniCssExtractPlugin.loader, "css-loader"],
				// },
				// {
				// 	test: /\.css/,
				// 	use: [
				// 		'style-loader',
				// 		'css-loader',
				// 	],
				// },
				// {
				// 	test: /\.css$/,
				// 	loader: "style-loader!css-loader"
				// },
				// {
				// 	test: /\.png$/,
				// 	loader: "url-loader?limit=100000"
				// },
				// {
				// 	test: /\.jpg$/,
				// 	loader: "file-loader"
				// }
			]

		},
		watch: true,
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000,
			ignored: /node_modules/ //['node_modules']
		},
		devtool: 'cheap-module-eval-source-map'
	},
	// SCSS only
	{
		entry: {
			// this object key reflects the filename (stored in /dist)
			// the object key value reflects the path to file
			// 'dummy2': './app/js/es6/dummy.js',

			// css bundles
			'styles': 'bundleStyles.js',

		},
		output: {
			filename: '[name].js',
			path: __dirname + '/public/',
			// publicPath: '/public/dist/css/',
		},
		resolve: {
			extensions: ['.js', '.scss', '.css'],
			modules: [
				path.resolve('./app/styles'),
				path.resolve('./node_modules')
			],
			alias: {
				// bootstrap: "bootstrap/js/src",
				// Cookies: "js-cookie/src/js.cookie"
			},
			symlinks: false
		},
		plugins: [

			// css
			new MiniCssExtractPlugin({
				// Options similar to the same options in webpackOptions.output
				// all options are optional
				filename: '[name].css',
				chunkFilename: '[id].css',
				ignoreOrder: false, // Enable to remove warnings about conflicting order
			}),

			// cookies
			new webpack.ProvidePlugin({
				Cookies: 'js-cookie/src/js.cookie.js'
			}),

		],
		module: {
			rules: [
				{
					test: /\.(js)$/,
					exclude: /node_modules/,
					use: [{
						loader: 'babel-loader',

						// commenting out because "it's now allowed here" hmm
						query: {

							// why this line?
							babelrc: false,

							presets: [
								'@babel/preset-env',

								// [
								//     "es2015",
								//     {
								//         modules: false
								//     }
								// ],
								// "react",
								// "stage-3"
							].map(require.resolve),

							// presets: [
							//     '@babel/preset-env',
							// ].map(require.resolve),

							plugins: [
								"@babel/plugin-proposal-class-properties",
								"@babel/plugin-transform-runtime",
								"@babel/plugin-proposal-nullish-coalescing-operator",

								// was testing this -- i don't think it's needed
								// "@babel/plugin-syntax-dynamic-import",
							].map(require.resolve)
						}
					}]
				},


				{
					test: /\.(scss|css)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: 'css/[name].css'
							}
						},
						{
							loader: 'extract-loader'
						},
						{
							loader: 'css-loader?-url'
						},
						{
							loader: 'postcss-loader'
						},
						{
							loader: 'sass-loader',
							options: {
								sassOptions: {
									indentWidth: 4,
									includePaths: ["absolute/path/a", "absolute/path/b"],
								},
							},
							// options: {
							//     includePaths: [
							//         './node_modules'
							//         // './css'
							//     ]
							// }
						}
					]
				},

				{
					test: /\.(woff|woff2|eot|ttf|otf)$/,
					loader: "file-loader",
					options: {
						outputPath: "public/fonts",
					}
				}

			]
		},

		// devtool: 'source-map',
		optimization: {
			minimizer: [
				new TerserPlugin({
					//sourceMap: true, // Must be set to true if using source-maps in production
					terserOptions: {
						output: {
							comments: false,
						},
						// compress: {
						//     drop_console: true,
						// },
					},
				}),
				new OptimizeCSSAssetsPlugin({})],
			usedExports: true
		},

		watch: true,
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000,
			ignored: /node_modules/ //['node_modules']
		},
		mode: 'development'
		// production
		// production

	},

]



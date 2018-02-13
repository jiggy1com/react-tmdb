let webpack = require('webpack');

module.exports = {
	entry : [
		'script!jquery/dist/jquery.min.js',
		// 'script!foundation-sites/dist/foundation.min.js',
		'script!tether/dist/js/tether.js',
		'script!bootstrap/dist/js/bootstrap.js',
		
		// 'font-awesome-webpack!./font-awesome.config.js',
		
		'./app/app.jsx',
	],
	externals: {
		// module name : variable name in external scripts file
		'jquery' : 'jQuery'
	},
	plugins : [
		new webpack.ProvidePlugin({
			// variable name to watch for : module to replace it with
			'$' : 'jquery',
			'jQuery' : 'jquery',
			// "window.Tether": 'tether'
		})
	],
	output : {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve : {
		root: __dirname,
		alias: {
			// SomeComponent: 'app/components/SomeComponent.jsx',
			Main : 'app/components/Main',
			IndexComponent : 'app/components/IndexComponent',
			AboutComponent : 'app/components/AboutComponent',
			
			// Modules
			LayoutModule : 'app/modules/layout/LayoutModule',
			MovieModule : 'app/modules/movie/MovieModule',
			TVModule: 'app/modules/tv/TVModule',
			PersonModule: 'app/modules/person/PersonModule',
			ModalModule : 'app/modules/modal/ModalModule',
			
			// Helper Modules
			LightboxModule : 'app/modules/lightbox/LightboxModule',
			PaginationModule : 'app/modules/pagination/PaginationModule',
			CarouselModule: 'app/modules/carousel/CarouselModule',
			
			// Services
			HttpService : 'app/services/HttpService',
			
			// Helpers (pipe like)
			CamelCase : 'app/services/CamelCase',
			BreakpointService : 'app/services/BreakpointService',
			Hyphenate: 'app/services/Hyphenate',
			
			
			// CSS
			applicationStyles : 'app/styles/app.scss'
			
		},
		extensions : ['', '.js', '.jsx']
	},
	module: {
		loaders : [
			{
				loader : 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.png$/,
				loader: "url-loader?limit=100000"
			},
			{
				test: /\.jpg$/,
				loader: "file-loader"
			},
			
			// {
			// 	test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
			// 	loader: 'url?limit=10000&mimetype=application/font-woff'
			// },
			// {
			// 	test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			// 	loader: 'url?limit=10000&mimetype=application/octet-stream'
			// },
			// {
			// 	test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			// 	loader: 'file'
			// },
			
			// the file-loader emits files.
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?&limit=10000&mimetype=application/font-woff",
				output: {
					path : './public/',
					publicPath : '/'
				}
			},
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "file-loader",
				output: {
					path : './public/',
					publicPath : '/'
				}
			},
			
			// {
			// 	test: /\.(eot|svg|ttf|woff|woff2)$/,
			// 	loader: 'file-loader?name=[name].[ext]&outputPath=../fonts/&publicPath=/assets/fonts/'
			// },
			
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=image/svg+xml'
			},
			
		],
		// rules: [
		// 	{
		// 		test: /\.css$/,
		// 		use: ['style-loader', 'css-loader']
		// 	}
		// ]
	},
	devtool: 'cheap-module-eval-source-map'
};
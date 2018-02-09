let React = require('react');
let ReactDOM = require('react-dom');

let { Route, Router, IndexRoute, hashHistory, browserHistory } = require('react-router');
// import { Route, Router, IndexRoute, hashHistory } from 'react-router'

let Main = require('Main');
let IndexComponent = require('IndexComponent');
let AboutComponent = require('AboutComponent');

import { MovieController, MovieIndexComponent, MovieDetailComponent } from './modules/movie/MovieModule';
import { TVController, TVDetailController } from 'TVModule';

// This is the default bootstrap theme in node
// import 'bootstrap/dist/css/bootstrap.min.css';

// This is a custom bootstrap theme in /themes
import './styles/themes/materia.css';

// Load foundation
// require('style!css!foundation-sites/dist/foundation.min.css');
// $(document).foundation();

// require('style!css!bootstrap/dist/css/bootstrap.css');

// font awesome
require("font-awesome-webpack");

// App CSS (update webpack.config.js for this to work)
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Router history={hashHistory}>
		
		<Route path="/" component={Main}>
			<Route exact path="/movie" render={() => (
				<Redirect to="/movie/popular" />
			)} />
			<Route path="/about" component={AboutComponent} />
			
			{/* TODO: DISCOVER */}
			{/*<Route path="/discover" component={MovieIndexComponent} />*/}
			{/*<Route path="/discover/movie" component={MoviePopularComponent} />*/}
			{/*<Route path="/discover/tv" component={MovieTopRatedComponent} />*/}
			
			{/* GENRE */}
			<Route path="/genre" component={IndexComponent} />
			<Route path="/genre/movie/:genre/:id" component={IndexComponent} />
			<Route path="/genre/tv/:genre/:id" component={IndexComponent} />
			
			{/* KEYWORD */}
			<Route path="/keyword" component={IndexComponent} />
			<Route path="/keyword/movie/:keyword/:id" component={IndexComponent} />
			<Route path="/keyword/tv/:keyword/:id" component={IndexComponent} />
			
			{/* MOVIE */}
			<Route path="/movie" component={MovieIndexComponent} />
			<Route path="/movie/latest" component={MovieController} />
			<Route path="/movie/now-playing" component={MovieController} />
			<Route path="/movie/popular" component={MovieController} />
			<Route path="/movie/top-rated" component={MovieController} />
			<Route path="/movie/upcoming" component={MovieController} />
			<Route path="/movie/detail/:title/:movieId" component={MovieDetailComponent} />
			
			{/* TODO: TV */}
			<Route path="/tv" component={TVController} />
			<Route path="/tv/latest" component={TVController} />
			<Route path="/tv/airing-today" component={TVController} />
			<Route path="/tv/on-the-air" component={TVController} />
			<Route path="/tv/popular" component={TVController} />
			<Route path="/tv/top-rated" component={TVController} />
			<Route path="/tv/detail/:title/:id" component={TVDetailController} />
			
			{/* TODO: PEOPLE */}
			<Route path="/people" component={IndexComponent} />
			<Route path="/people/:name/:id" component={IndexComponent} />
			
			{/* TODO: SEARCH */}
			<Route path="/search" component={IndexComponent} />
			<Route path="/search/people" component={IndexComponent} />
			<Route path="/search/movies" component={IndexComponent} />
			<Route path="/search/tv" component={IndexComponent} />
			<Route path="/search/collections" component={IndexComponent} />
			<Route path="/search/companies" component={IndexComponent} />
			<Route path="/search/keywords" component={IndexComponent} />
			
			{/* other potential routes */}
			<Route path="/leaderboard" component={IndexComponent} />
			
			<IndexRoute component={IndexComponent} />
		</Route>
	</Router>,
	document.getElementById('app')
);

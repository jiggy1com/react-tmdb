
//let { Route, Router, IndexRoute, hashHistory, browserHistory, createBrowserHistory, createHashHistory, useRouterHistory } = require('react-router');
import React from 'react';
import ReactDom from 'react-dom';
import {createRoot} from "react-dom/client";
import {Route, Routes, Router, RouteProvider, BrowserRouter, createBrowserRouter} from 'react-router-dom';
import {browserHistory, createRoutesFromElements, IndexRoute} from 'react-router';
// let {
// 	Route, Router, IndexRoute, hashHistory, browserHistory, createBrowserHistory, createHashHistory, useRouterHistory
// } = require("react-router-dom");

// import { createHashHistory } from 'history'
// import { Route, Router, IndexRoute, hashHistory } from 'react-router'

import {Main} from "app/components/Main";
import {IndexComponent} from "app/components/IndexComponent";
import {AboutComponent} from "app/components/AboutComponent";

import { MovieController, MovieIndexComponent, MovieDetailComponent } from 'app/modules/movie/MovieModule';
import { TVController, TVDetailController, TVSeasonController } from 'TVModule'; //
// import {TVController} from "modules/tv/TVController";
// import {TVDetailController} from "modules/tv/TVDetailController";
import { PersonController } from 'app/modules/person/PersonModule';
import { GenreController } from 'app/modules/genre/GenreModule';
import { KeywordController } from 'app/modules/keyword/KeywordModule';



/* BOOTSTRAP STYLES */

// This is the default bootstrap theme in node
// import 'bootstrap/dist/css/bootstrap.min.css';

// This is a custom bootstrap theme in /themes
// import './styles/themes/materia.css';
// import 'app/styles/themes/lux.css';
import {LayoutHeaderComponent} from "LayoutModule";

/* END BOOTSTRAP STYLES */

// require('style!css!bootstrap/dist/css/bootstrap.css');

// font awesome
// require("font-awesome-webpack");

// App CSS (update webpack.config.js for this to work)
// require('style-loader!css-loader!sass-loader!applicationStyles');

// import 'applicationStyles';
// import 'app/styles/app.scss';
// import 'public/styles';
// import 'app/styles/bundleStyles';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
<BrowserRouter>
	<div>
		<Main>
		</Main>
	</div>
</BrowserRouter>
);


// <Router history={browserHistory}>
//
// 	<Route path="/" component={Main}>
// 		<Route exact path="/movie" render={() => (
// 			<Redirect to="/movie/popular" />
// 		)} />
// 		<Route path="/about" component={AboutComponent} />
//
// 		{/* TODO: DISCOVER -- Discover is used for the Genre and Keyword, but "discover" can filter by all sorts of things */}
// 		{/*<Route path="/discover" component={MovieIndexComponent} />*/}
// 		{/*<Route path="/discover/movie" component={MoviePopularComponent} />*/}
// 		{/*<Route path="/discover/tv" component={MovieTopRatedComponent} />*/}
//
// 		{/* GENRE */}
// 		<Route path="/genre/:genreType/:genre/:id" component={GenreController} />
//
// 		{/* KEYWORD */}
// 		<Route path="/keyword/:keywordType/:keyword/:id" component={KeywordController} />
//
// 		{/* MOVIE */}
// 		<Route path="/movie" component={MovieIndexComponent} />
// 		<Route path="/movie/latest" component={MovieController} />
// 		<Route path="/movie/now-playing" component={MovieController} />
// 		<Route path="/movie/popular" component={MovieController} />
// 		<Route path="/movie/top-rated" component={MovieController} />
// 		<Route path="/movie/upcoming" component={MovieController} />
// 		<Route path="/movie/detail/:title/:movieId" component={MovieDetailComponent} />
//
// 		{/* TV */}
// 		<Route path="/tv" component={TVController} />
// 		<Route path="/tv/latest" component={TVController} />
// 		<Route path="/tv/airing-today" component={TVController} />
// 		<Route path="/tv/on-the-air" component={TVController} />
// 		<Route path="/tv/popular" component={TVController} />
// 		<Route path="/tv/top-rated" component={TVController} />
// 		<Route path="/tv/detail/:title/:id" component={TVDetailController} />
//
// 		{/* TODO: TVSeasonController */}
// 		<Route path="/tv/season/:title/:id/:seasonNumber" component={TVSeasonController} />
//
// 		{/* TODO: PERSON */}
// 		<Route path="/person" component={PersonController} />
// 		<Route path="/person/:name/:id" component={PersonController} />
//
// 		{/* TODO: SEARCH */}
// 		<Route path="/search" component={IndexComponent} />
// 		<Route path="/search/person" component={IndexComponent} />
// 		<Route path="/search/movies" component={IndexComponent} />
// 		<Route path="/search/tv" component={IndexComponent} />
// 		<Route path="/search/collections" component={IndexComponent} />
// 		<Route path="/search/companies" component={IndexComponent} />
// 		<Route path="/search/keyword" component={IndexComponent} />
//
// 		{/* other potential routes */}
// 		<Route path="/leaderboard" component={IndexComponent} />
//
// 		<IndexRoute component={IndexComponent} />
// 	</Route>
// </Router>,

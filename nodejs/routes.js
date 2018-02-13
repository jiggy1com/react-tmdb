let express = require('express');
let r = express.Router();

// controllers
let MovieController = require('./MovieController');
let TVController = require('./TVController');
let PersonController = require('./PersonController');

// routes
module.exports = function(app) {
	
	// app.get('/test', MovieController.test);
	
	//
	// Movies
	//
	
	app.get('//api/v1/discover/movie', MovieController.getDiscoverMovie);
	
	// TODO: make a page for these then add the link to the nav
	app.get('/api/v1/movie/latest', function(req, res, next){console.log('ok'); next();}, MovieController.getLatest);
	app.get('/api/v1/movie/latest/:page', function(req, res, next){console.log('ok'); next();}, MovieController.getLatest);
	
	app.get('/api/v1/movie/reviews/:movieId', MovieController.getReviews);
	app.get('/api/v1/movie/videos/:movieId', MovieController.getVideos);
	app.get('/api/v1/movie/images/:movieId', MovieController.getImages);
	app.get('/api/v1/movie/credits/:movieId', MovieController.getCredits);
	app.get('/api/v1/movie/keywords/:movieId', MovieController.getKeywords);
	app.get('/api/v1/movie/release-dates/:movieId', MovieController.getReleaseDates);
	app.get('/api/v1/movie/recommendations/:movieId', MovieController.getRecommendations);
	app.get('/api/v1/movie/similar/:movieId', MovieController.getRecommendations);
	
	// app.get('/api/v1/movie/details/:movieId', MovieController.getMovie);
	app.get('/api/v1/movie/:movieId', MovieController.getMovie);
	
	app.get('/api/v1/movie/:category/:page', MovieController.getMoviesByCategory);
	// app.get('/api/v1/movie/now_playing/:page', MovieController.getMoviesByCategory);
	// app.get('/api/v1/movie/popular/:page', MovieController.getMoviesByCategory);
	// app.get('/api/v1/movie/top_rated/:page', MovieController.getMoviesByCategory);
	// app.get('/api/v1/movie/upcoming/:page', MovieController.getMoviesByCategory);
	
	
	
	
	//
	// TV
	//
	
	// tv details
	// 1418
	app.get('/api/v1/tv/detail/:tvId', TVController.getTVDetail);
	
	// app.get('/api/v1/tv//images/:tvId', TVController.getImages);
	// app.get('/api/v1/tv//content_ratings/:tvId', TVController.getContentRatings);
	// app.get('/api/v1/tv//credits/:tvId', TVController.getCredits);
	// app.get('/api/v1/tv//external_ids/:tvId', TVController.getExternalIds);
	// app.get('/api/v1/tv//keywords/:tvId', TVController.getKeywords);
	// app.get('/api/v1/tv//recommendations/:tvId', TVController.getRecommendations);
	// // app.get('/api/v1/tv//screened_theatrically/:tvId', TVController.getTest);
	// app.get('/api/v1/tv//similar/:tvId', TVController.getSimilar);
	// app.get('/api/v1/tv//videos/:tvId', TVController.getVideos);
	// app.get('/api/v1/tv/detail/:endpoint/:tvId', TVController.getTest);
	
	// tv list
	app.get('/api/v1/tv/:category/:page', TVController.getTVByCategory);
	
	
	
	//
	// People
	//
	app.get('/api/v1/person/:personId', PersonController.getPerson);
	
	//
	// Search
	//
	
	//
	//
	//
	
	// app.get('/', MovieController.test);
	// app.get('/', MovieController.test);
	// app.get('/', MovieController.test);
	
};

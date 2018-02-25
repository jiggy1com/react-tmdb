let express = require('express');
let r = express.Router();

// controllers
let MovieController = require('./MovieController');
let TVController = require('./TVController');
let PersonController = require('./PersonController');
let SearchController = require('./SearchController');
let GenreController = require('./GenreController');
let KeywordController = require('./KeywordController');

// routes
module.exports = function(app) {
	
	// app.get('/test', MovieController.test);
	
	//
	// Movies
	//
	
	app.get('//api/v1/discover/movie', MovieController.getDiscoverMovie);
	
	// TODO: make a page for these then add the link to the nav
	// app.get('/api/v1/movie/latest', function(req, res, next){console.log('ok'); next();}, MovieController.getLatest);
	// app.get('/api/v1/movie/latest/:page', function(req, res, next){console.log('ok'); next();}, MovieController.getLatest);
	
	app.get('/api/v1/movie/reviews/:movieId', MovieController.getReviews);
	app.get('/api/v1/movie/videos/:movieId', MovieController.getVideos);
	app.get('/api/v1/movie/images/:movieId', MovieController.getImages);
	app.get('/api/v1/movie/credits/:movieId', MovieController.getCredits);
	app.get('/api/v1/movie/keywords/:movieId', MovieController.getKeywords);
	app.get('/api/v1/movie/release-dates/:movieId', MovieController.getReleaseDates);
	app.get('/api/v1/movie/recommendations/:movieId', MovieController.getRecommendations);
	app.get('/api/v1/movie/similar/:movieId', MovieController.getSimilar);
	app.get('/api/v1/movie/:movieId', MovieController.getMovie);
	app.get('/api/v1/movie/:category/:page', MovieController.getMoviesByCategory);
	
	//
	// TV
	//
	
	// tv details
	app.get('/api/v1/tv/detail/:tvId', TVController.getTVDetail);
	
	// tv list
	app.get('/api/v1/tv/:category/:page', TVController.getTVByCategory);
	
	// tv season details
	app.get('/api/v1/tv/season/:tvId/:seasonNumber', TVController.getTVSeason);
	
	//
	// People
	//
	
	app.get('/api/v1/person/:personId', PersonController.getPerson);
	
	//
	// Search
	//
	
	app.post('/api/v1/search/multi', SearchController.getMulti);
	
	//
	// Genre
	//
	
	app.get('/api/v1/genre/:genreType/:id/:page', GenreController.getByGenre);
	
	//
	// Keywords
	//
	
	app.get('/api/v1/keyword/:keywordType/:id/:page', KeywordController.getByKeyword);
	
};

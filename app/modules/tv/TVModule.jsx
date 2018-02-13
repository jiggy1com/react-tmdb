let React = require('react');

// TV Listings
let TVController = require('./TVController');
let TVList = require('./TVList');

// TV Details
let TVDetailController = require('./TVDetailController');
let TVDetailHeroComponent = require('./TVDetailHeroComponent');

// TV Seasons
let TVSeasonController = require('../tvSeason/TVSeasonController');

module.exports = {
	
	// TV Listings
	TVController,
	TVList,
	
	
	// TV Details
	TVDetailController,
	TVDetailHeroComponent,
	
	// TV Season
	TVSeasonController
	
	
	
};
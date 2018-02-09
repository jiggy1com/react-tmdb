let React = require('react');

let MovieIndexComponent = require('./MovieIndexComponent');
let MovieController = require('./MovieController');
let MovieListComponent = require('./MovieListComponent');

let MovieDetailComponent = require('./MovieDetailComponent');
let MovieDetailReviewsComponent = require('./MovieDetailReviewsComponent');
let MovieDetailVideoComponent = require('./MovieDetailVideoComponent');
let MovieDetailImageComponent = require('./MovieDetailImageComponent');
let MovieDetailImageListComponent = require('./MovieDetailImageListComponent');
let MovieDetailCreditsComponent = require('./MovieDetailCreditsComponent');
let MovieDetailGenresComponent = require('./MovieDetailGenresComponent');
let MovieDetailKeywordsComponent = require('./MovieDetailKeywordsComponent');
let MovieDetailReleaseDatesComponent = require('./MovieDetailReleaseDatesComponent');
let MovieDetailRecommendationsComponent = require('./MovieDetailRecommendationsComponent');
let MovieDetailSimilarComponent = require('./MovieDetailSimilarComponent');

module.exports = {
	MovieIndexComponent,
	
	// movie listings
	MovieController,
	MovieListComponent,
	
	// movie details
	MovieDetailComponent,
	MovieDetailReviewsComponent,
	MovieDetailVideoComponent,
	MovieDetailImageComponent,
	MovieDetailImageListComponent,
	MovieDetailCreditsComponent,
	MovieDetailGenresComponent,
	MovieDetailKeywordsComponent,
	MovieDetailReleaseDatesComponent,
	MovieDetailRecommendationsComponent,
	MovieDetailSimilarComponent
	
	
};

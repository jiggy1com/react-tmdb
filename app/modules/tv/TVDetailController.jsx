let React = require('react');
let httpService = require('HttpService');

let TVDetailComponent = require('./TVDetailComponent');
let TVDetailHeroComponent = require('./TVDetailHeroComponent');
let TVDetailImagesComponents = require('./TVDetailImagesComponents');
let TVDetailContentRatingsComponent = require('./TVDetailContentRatingsComponent');
let TVDetailCreditsComponent = require('./TVDetailCreditsComponent');
let TVDetailExternalIdsComponent = require('./TVDetailExternalIdsComponent');
let TVDetailKeywordsComponent = require('./TVDetailKeywordsComponent');
let TVDetailRecommendationsComponent = require('./TVDetailRecommendationsComponent');
let TVDetailSimilarComponent = require('./TVDetailSimilarComponent');
let TVDetailVideosComponent = require('./TVDetailVideosComponent');
let TVDetailSeasonsComponent = require('./TVDetailSeasonsComponent');
let TVDetailProductionCompaniesComponent = require('./TVDetailProductionCompaniesComponent');
let TVDetailCreatedByComponent = require('./TVDetailCreatedByComponent');
let TVDetailRunTimeComponent = require('./TVDetailRunTimeComponent');
let TVDetailGenresComponent = require('./TVDetailGenresComponent');
let TVDetailLanguagesComponent = require('./TVDetailLanguagesComponent');
let TVDetailNetworksComponent = require('./TVDetailNetworksComponent');
let TVDetailOriginCountryComponent = require('./TVDetailOriginCountryComponent');

let TVDetailController = React.createClass({
	
	// my methods
	
	getTvId: function(){
		console.log('props', this.props);
		let { location } = this.props;
		let arrLoc = location.pathname.split('/');
		return arrLoc[ arrLoc.length-1];
	},

	
	getTVDetail: function(obj){
		let self = this;
		let path = '/api/v1/tv/detail/' + obj.tvId;
		httpService.doGet(path).then(function(resp){
			self.setState({
				data : resp.data
			});
		});
	},
	
	// react methods
	
	getInitialState: function(){
		return {
			data : {
				"backdrop_path": "",
				"created_by": [
					// {
					// 	"id": 66633,
					// 	"name": "Vince Gilligan",
					// 	"profile_path": "/rLSUjr725ez1cK7SKVxC9udO03Y.jpg"
					// }
				],
				"episode_run_time": [],
				"first_air_date": "2008-01-19",
				"genres": [
					// {
					// 	"id": 18,
					// 	"name": "Drama"
					// }
				],
				"homepage": "",
				"id": 0,
				"in_production": false,
				"languages": [],
				"last_air_date": "", // 2013-09-29
				"name": "",
				"networks": [
					// {
					// 	"id": 174,
					// 	"name": "AMC"
					// }
				],
				"number_of_episodes": 0,
				"number_of_seasons": 0,
				"origin_country": [
					// "US"
				],
				"original_language": "",
				"original_name": "",
				"overview": "",
				"popularity": 0, //84.594593,
				"poster_path": "",
				"production_companies": [
					// {
					// 	"name": "Gran Via Productions",
					// 	"id": 2605
					// },
				],
				"seasons": [
					// {
					// 	"air_date": "2009-02-17",
					// 	"episode_count": 6,
					// 	"id": 3577,
					// 	"poster_path": "/AngNuUbXSciwLnUXtdOBHqphxNr.jpg",
					// 	"season_number": 0
					// }
				],
				"status": "",
				"type": "",
				"vote_average": 0,
				"vote_count": 0,
				
				
				// content_ratings
				content_ratings: {
					results : []
				},
				
				// credits
				
				// external_ids
				external_ids: {
					imdb_id: null,
					freebase_mid: null,
					freebase_id: null,
					tvdb_id: null,
					tvrage_id: null,
					facebook_id: null,
					instagram_id: null,
					twitter_id: null
				},
				
				// images
				
				images: {
					posters: [],
					backdrops: []
				},
				
				// keywords
				keywords: {
					results : []
				},
				
				// recommendations
				recommendations: {
					page : 0,
					results : [],
					total_pages: 0,
					total_results : 0
				},
				
				// similar
				similar: {
					page : 0,
					results : [],
					total_pages: 0,
					total_results : 0
				},
				
				// videos
				videos: {
					results: []
				}
				
			}
		}
	},
	
	componentDidMount: function(){
		let obj = {
			tvId : this.getTvId()
		};
		this.getTVDetail( obj );
	},
	
	render: function(){
		
		let { data } = this.state;
		
		return (
			<div id="tv-detail">
				
				<TVDetailHeroComponent data={data} />
				
				<div className={"container-fluid interior-wrapper"}>
					
					<TVDetailComponent>
						<TVDetailImagesComponents images={data.images} />
					</TVDetailComponent>
					
					<TVDetailComponent>
						<TVDetailVideosComponent videos={data.videos.results} />
					</TVDetailComponent>
					
					<TVDetailComponent>
						<TVDetailCreditsComponent credits={data.credits} />
					</TVDetailComponent>
					
					<TVDetailComponent>
						<TVDetailSeasonsComponent seasons={data.seasons} showId={data.id} showName={data.name} />
					</TVDetailComponent>
					
					<TVDetailComponent>
						<TVDetailExternalIdsComponent externalIds={data.external_ids} />
					</TVDetailComponent>
					
					<TVDetailComponent>
						<TVDetailKeywordsComponent keywords={data.keywords.results} />
					</TVDetailComponent>
					
					<TVDetailComponent>
						<TVDetailRecommendationsComponent recommendations={data.recommendations} />
					</TVDetailComponent>
					
					<TVDetailComponent>
						<TVDetailSimilarComponent similar={data.similar} />
					</TVDetailComponent>
					
					<TVDetailComponent>
						<TVDetailCreatedByComponent createdBy={data.created_by} />
					</TVDetailComponent>
					
					<TVDetailComponent>
						<TVDetailProductionCompaniesComponent productionCompanies={data.production_companies} />
					</TVDetailComponent>
					
					<TVDetailComponent>
						<TVDetailContentRatingsComponent contentRatings={data.content_ratings.results} />
					</TVDetailComponent>
					
					<TVDetailComponent>
						<TVDetailGenresComponent genres={data.genres} />
					</TVDetailComponent>
					
					<TVDetailComponent>
						<TVDetailRunTimeComponent episodeRunTime={data.episode_run_time} />
					</TVDetailComponent>
					
					<TVDetailComponent>
						<TVDetailLanguagesComponent languages={data.languages} />
					</TVDetailComponent>
					
					<TVDetailComponent>
						<TVDetailNetworksComponent networks={data.networks} />
					</TVDetailComponent>
					
					<TVDetailComponent>
						<TVDetailOriginCountryComponent originCountry={data.origin_country} />
					</TVDetailComponent>
					
				</div>
				
			</div>
		)
	}
	
});

module.exports = TVDetailController;
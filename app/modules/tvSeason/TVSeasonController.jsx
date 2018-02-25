let React = require('react');
let { Link } = require('react-router');

let httpService = require('HttpService');
let hyphenate = require('Hyphenate');

let TVSeasonHeroComponent = require('./TVSeasonHeroComponent');
let TVSeasonComponent = require('./TVSeasonComponent');
let TVSeasonEpisodesComponent = require('./TVSeasonEpisodesComponent');
let TVSeasonCarouselComponent = require('./TVSeasonCarouselComponent');

let ExternalIdsComponent = require('../../components/ExternalIdsComponent');
import { CarouselController } from 'CarouselModule';

let TVSeasonController = React.createClass({
	
	// my methods
	getSeason: function(){
		
		window.scrollTo(0,0);
		
		let self = this;
		let { params } = this.props;
		let path = '/api/v1/tv/season/' + params.id + '/' + params.seasonNumber;
		httpService.doGet(path).then(function(resp){
			self.setState({
				data : resp.data
			});
			self.setupCarousels(resp.data);
		});
	},
	
	setupCarousels: function(data){
		this.setCreditsList(data);
		this.setImagesList(data);
		this.setVideosList(data);
	},
	
	setCreditsList: function(data){
		let credits = data.credits;
		let cast = credits.cast;
		let crew = credits.crew;
		
		let castCarousel = [];
		let crewCarousel = [];
		
		let srcFolder = 'w185';
		let srcFolderLg = 'h632';
		
		
		
		cast.forEach((obj)=>{
			let item = {
				src: 'https://image.tmdb.org/t/p/' + srcFolder + obj.profile_path,
				srcLg: 'https://image.tmdb.org/t/p/' + srcFolderLg + obj.profile_path,
				href: '/person/' + hyphenate.hyphenateAndLowercase(obj.name) + '/' + obj.id,
				name: obj.name,
				character: obj.character
			};
			castCarousel.push(item);
		});
		
		crew.forEach((obj)=>{
			let item = {
				src: 'https://image.tmdb.org/t/p/' + srcFolder + obj.profile_path,
				srcLg: 'https://image.tmdb.org/t/p/' + srcFolderLg + obj.profile_path,
				href: '/person/' + hyphenate.hyphenateAndLowercase(obj.name) + '/' + obj.id,
				name: obj.name,
				department: obj.department,
				job: obj.job
			};
			crewCarousel.push(item);
		});
		
		this.setState({
			castCarousel: castCarousel,
			crewCarousel: crewCarousel
		});
		
	},
	
	setImagesList: function(data){
		let images = data.images;
		
		
	},
	
	setVideosList: function(data){
		let videos = data.videos;
		
		
	},
	
	prevSeason: function(){
	
	},
	
	nextSeason: function(){
		let { params } = this.props;
		
	},
	
	// react methods
	
	getInitialState: function(){
		return {
			
			// season object
			data : {
				_id: '',
				id: 0,
				air_date: '', // Y-m-d
				name: '',
				overview: '',
				poster_path: '',
				season_number: 0,
				
				// append to request
				episodes: [],
				credits: {
					cast: [],
					crew: []
				},
				images: {
					posters: []
				},
				videos: {
					results: []
				},
				external_ids : {
					freebase_mid: "/m/05yy27m",
					freebase_id: "/en/breaking_bad_season_1",
					tvdb_id: 30272,
					tvrage_id: null
				}
				
			},
			
			// carousels
			creditsCarousel: [],
			castCarousel: [],
			crewCarousel: [],
			videosCarousel: []
		}
	},
	
	componentWillReceiveProps: function(nextProps){
		console.log('TVSeasonController componentWillReceiveProps', nextProps);
		this.getSeason();
	},
	
	componentWillMount: function(){
	
	},
	
	componentDidMount: function(){
		this.getSeason();
	},
	
	render: function(){
		
		let { data, creditsCarousel, castCarousel, crewCarousel, videosCarousel } = this.state;
		let { params } = this.props;
		
		let prevSeason = "/tv/season/" + params.title + "/" + params.id + "/" + params.seasonNumber--;
		let nextSeason = "/tv/season/" + params.title + "/" + params.id + "/" + params.seasonNumber++;
		
		return (
			
			<div id="tv-season">
				
				<TVSeasonHeroComponent data={data}>
					Air Date:
					Name:
					Overview
					poster_path
					id
					season_number
				</TVSeasonHeroComponent>
				
				<div className={"container-fluid interior-wrapper"}>
					
					<TVSeasonComponent heading={"Episodes"}>
						<TVSeasonEpisodesComponent episodes={data.episodes}>
						</TVSeasonEpisodesComponent>
					</TVSeasonComponent>
					
					{/* Credits */}
					
					<TVSeasonComponent heading={"Cast"}>
						<CarouselController
							carouselId={"castCarousel"}
							slides={castCarousel}
							itemsPerSlide={6}
							template={"cast"}>
						</CarouselController>
					</TVSeasonComponent>
					
					<TVSeasonComponent heading={"Crew"}>
						<CarouselController
							carouselId={"crewCarousel"}
							slides={crewCarousel}
							itemsPerSlide={6}
							template={"crew"}>
						</CarouselController>
					</TVSeasonComponent>
					
					{/* Images */}
					
					<TVSeasonComponent heading={"Images"}>
					
					</TVSeasonComponent>
					
					{/* Videos */}
					
					<TVSeasonComponent heading={"Videos"}>
						Videos
					</TVSeasonComponent>
					
					{/* External Ids */}
					
					<TVSeasonComponent heading={"External Ids"}>
						<ExternalIdsComponent externalIds={data.external_ids} />
					</TVSeasonComponent>
					
					{/* Browser Seasons */}
					
					<div className={"row"}>
						<div className={"col-6"}>
							<Link className={"btn btn-primary btn-block float-left"} to={prevSeason}>
								Previous Season
							</Link>
						</div>
						<div className={"col-6"}>
							<Link className={"btn btn-primary btn-block float-right"} to={nextSeason}>
								Next Season
							</Link>
						</div>
					</div>
					
				</div>
				
			</div>
			
		)
	}
});

module.exports = TVSeasonController;
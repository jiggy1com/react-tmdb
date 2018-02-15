let React = require('react');
let { Link } = require('react-router');

let httpService = require('HttpService');
let hyphenate = require('Hyphenate');
let MovieDetailReviewsComponent = require('./MovieDetailReviewsComponent');
let MovieDetailVideoComponent = require('./MovieDetailVideoComponent');
let MovieDetailImageComponent = require('./MovieDetailImageComponent');
let MovieDetailCreditsComponent = require('./MovieDetailCreditsComponent');
let MovieDetailGenresComponent = require('./MovieDetailGenresComponent');
let MovieDetailKeywordsComponent = require('./MovieDetailKeywordsComponent');
let MovieDetailReleaseDatesComponent = require('./MovieDetailReleaseDatesComponent');
let MovieDetailRecommendationsComponent = require('./MovieDetailRecommendationsComponent');
let MovieDetailSimilarComponent = require('./MovieDetailSimilarComponent');

import { CarouselController } from 'CarouselModule';

let MovieDetailComponent = React.createClass({
	
	onEnter: function(){
		// console.error('onEnter');
	},
	
	onChange: function(){
		// console.error('onChange');
	},
	
	// My Methods
	doChangeState: function(newState){
		this.setState({
		
		});
	},
	
	
	
	// React Methods
	
	getInitialState: function(){
		// console.log('props', this.props);
		return {
			// id : this.props.routeParams.movieId,
			movieId : this.props.routeParams.movieId,
			
			// movie : {}
			rating : '',
			movie : {
				production_companies : [],
				production_countries : [],
				genres: [],
				belongs_to_collection : {},
				spoken_languages : []
			},
			
			// scroll
			// scroll :
		}
	},
	
	getMovieDetail: function(obj){
		let self = this;
		// let { movieId } = this.state;
		let path = '/api/v1/movie/' + obj.movieId;
		httpService.doGet(path).then(function(resp){
			if(resp.success){
				self.setState({
					movieId: obj.movieId,
					movie : resp.data
				});
			}else{
			
			}
		});
	},
	
	scrollUp: function(){
		// console.log('ref', this.jumbotron.position(), this.jumbotron.offset());
		let nav = $('#layout-header');
		let jumbotron = $('#jumbotron'); // document.getElementById('jumbotron');
		
		// let bounding = el.getBoundingClientRect();
		let navHeight = nav.outerHeight();
		// let navPosition = nav.position();
		let jumbotronHeight = jumbotron.outerHeight();
		// let jumbotronPosition = jumbotron.position();
		
		let doc = document.documentElement;
		let windowTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
		
		let windowTopOffset = windowTop + navHeight;
		let scrollPoint = jumbotronHeight + navHeight // navHeight + jumbotronHeight - jumbotronPosition.top;
		
		if(windowTopOffset > scrollPoint){
			window.scrollTo(0, scrollPoint);
		}
	},
	
	componentWillMount: function(){
		window.scrollTo(0,0);
	},
	
	componentDidMount: function(){
		// window.scrollTo(0,0);
		let body = document.getElementById('body');
		this.getMovieDetail({
			movieId : this.props.routeParams.movieId
		});
	},
	
	componentWillUnmount: function(){
		// console.log('MovieDetailComponent componentWillUnmount');
		let body = document.getElementById('body');
			body.style['background-image'] = '';
	},
	
	shouldComponentUpdate: function(nextProps, nextState){
		// console.error('MovieDetailComponent shouldComponentUpdate', nextProps);
		// console.error('MovieDetailComponent shouldComponentUpdate', nextState);
		
		if(nextProps.routeParams.movieId !== nextState.movieId){
			this.getMovieDetail({
				movieId : nextProps.routeParams.movieId
			});
			window.scrollTo(0,0);
			return true;
		}else{
			return true;
		}
		
		
	},
	
	render: function(){
		
		/*
		==============================
		Image Sizes
		==============================
		"backdrop_sizes": [
			"w300",
			"w780",
			"w1280",
			"original"
		],
			"logo_sizes": [
			"w45",
			"w92",
			"w154",
			"w185",
			"w300",
			"w500",
			"original"
		],
			"poster_sizes": [
			"w92",
			"w154",
			"w185",
			"w342",
			"w500",
			"w780",
			"original"
		],
			"profile_sizes": [
			"w45",
			"w185",
			"h632",
			"original"
		],
			"still_sizes": [
			"w92",
			"w185",
			"w300",
			"original"
		]
		*/
		
		let { movieId, movie, rating } = this.state;
		
		let srcBackdrop = "https://image.tmdb.org/t/p/original/" + movie.backdrop_path ;
		let srcPoster = "https://image.tmdb.org/t/p/w640/" + movie.poster_path ;
		let imdbHref = 'http://www.imdb.com/title/' + movie.imdb_id;
		
		let productionCompaniesHtml = movie.production_companies.map(function(item, idx){
			return (
				<p key={idx}>{item.name}</p>
			)
		});
		
		let productionCountriesHtml = movie.production_countries.map(function(item, idx){
			return (
				<p key={idx}>{item.nanme}</p>
			)
		});
		
		/*
		
		adult: true / false
		belongs_to_collection : object
		budget: number
		genres: array of objects (name)
		homepage: string
		original_language
		original_title
		overview
		popularity: number
		poster_path
		production_companies
		production_countries
		release_date
		revenue
		runtime
		spoken_languages: array of objs (name)
		statua
		tagline
		title
		video
		vote_average
		vote_count
		
		 */
		
		let html = document.getElementsByTagName("html")[0];
		let body = document.getElementById('body');
		// body.style['background-image'] = "url(" + srcBackdrop + ")";
		body.style['background-position'] = 'top center';
		// body.style['background-size'] = 'cover';
		body.style['background-repeat'] = 'no-repeat';
		
		let jumbotronStyles = {
			position : 'relative',
			backgroundImage : 'url(' + srcBackdrop + ')',
			backgroundPosition : 'top center',
			backgroundSize : 'cover',
			backgroundRepeat : 'no-repeat',
			minHeight : '600px'
		};
		
		let jumbrotronStylesXL = {
		
		};
		let jumbrotronStylesLG = {
		
		};
		let jumbrotronStylesMD = {
		
		};
		let jumbrotronStylesSM = {
		
		};
		let jumbrotronStylesXS = {
			minHeight : '100px'
		};
		
		let movieHeroStyles = {
			position : 'absolute',
			bottom : '50px',
			left : '50px',
			right : '50px',
			backgroundColor: '#000',
			color: '#fff',
			// opacity : '.5'
			background: 'rgba(0,0,0,0.8)'
		};
		
		let movieHeroParagraphStyles = {
			color: '#999'
		};
		
		let testCarousel = [
			{id:1},
			{id:2},
			{id:3},
			{id:4},
			{id:5},
			{id:6},
			{id:7},
			{id:8},
			{id:9},
			{id:10},
			{id:11},
			{id:12},
			{id:13},
			{id:15},
			{id:16},
			{id:17},
			{id:18},
			{id:19},
			{id:20},
			{id:21},
		];
		
		return (
			
			<div>
				
				{/* jumbotron-like hero */}
				
				
				
				<div className={"p-5"} style={jumbotronStyles} id="jumbotron">
					<div className={"movie-hero p-5"} style={movieHeroStyles}>
						<h1 className={"display-4"}>
							{movie.original_title}
						</h1>
						<p className={"lead"} style={movieHeroParagraphStyles}>
							{movie.overview}
						</p>
					</div>
				</div>
				
				{/* Tabs */}
				<div className={"bg-light sticky-top pt-4 pb-4"}>
					<div className={"container-fluid interior-wrapper"}>
						<div className={"row"}>
							<div className={"col-12"}>
								<ul className="nav nav-tabs" id="myTab" role="tablist">
									<li className="nav-item" onClick={this.scrollUp}>
										<a className="nav-link active" id="credits-tab" data-toggle="tab" href="#credits" role="tab" aria-controls="credits" aria-selected="true">
											Credits
										</a>
									</li>
									<li className="nav-item" onClick={this.scrollUp}>
										<a className="nav-link" id="videos-tab" data-toggle="tab" href="#videos" role="tab" aria-controls="videos" aria-selected="false">
											Videos
										</a>
									</li>
									<li className="nav-item" onClick={this.scrollUp}>
										<a className="nav-link" id="images-tab" data-toggle="tab" href="#images" role="tab" aria-controls="images" aria-selected="false">
											Images
										</a>
									</li>
									<li className="nav-item" onClick={this.scrollUp}>
										<a className="nav-link" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">
											Reviews
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				
				{/* Tab Guts */}
				
				<div className={"container-fluid interior-wrapper"}>
					<div className={"row"}>
						<div className={"col-12 col-md-9"}>
							<div className="tab-content" id="myTabContent">
								<div className="tab-pane fade show active" id="credits" role="tabpanel" aria-labelledby="credits-tab">
									<MovieDetailCreditsComponent movieId={movieId}>
									</MovieDetailCreditsComponent>
								</div>
								<div className="tab-pane fade" id="videos" role="tabpanel" aria-labelledby="videos-tab">
									<MovieDetailVideoComponent movieId={movieId}>
									</MovieDetailVideoComponent>
								</div>
								<div className="tab-pane fade" id="images" role="tabpanel" aria-labelledby="images-tab">
									<MovieDetailImageComponent movieId={movieId} scrollUp={this.scrollUp}>
									</MovieDetailImageComponent>
								</div>
								<div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
									<MovieDetailReviewsComponent movieId={movieId}>
									</MovieDetailReviewsComponent>
								</div>
							</div>
						</div>
						
						{/* side bar */}
						
						<div className={"col-12 col-md-3"}>
							
							<MovieDetailReleaseDatesComponent movieId={movieId} />
							
							<MovieDetailGenresComponent genres={movie.genres}/>
							
							<MovieDetailKeywordsComponent movieId={movieId} />
							
							<div className={"pt-3 pb-3"}>
								<h2 className={"card-header mb-3"}>Production Companies</h2>
								<div>
									{productionCompaniesHtml}
								</div>
							</div>
							
							<div className={"pt-3 pb-3"}>
								<h2 className={"card-header mb-3"}>Production Countries</h2>
								<div>
									{productionCountriesHtml}
								</div>
							</div>
							
							<div className={"pt-3 pb-3"}>
								<h2 className={"card-header mb-3"}>Runtime</h2>
								<div>
									{movie.runtime}
								</div>
							</div>
							
							<div className={"pt-3 pb-3"}>
								<h2 className={"card-header mb-3"}>Revenue</h2>
								<div>
									{movie.revenue}
								</div>
							</div>
							
							<div className={"pt-3 pb-3"}>
								<h2 className={"card-header mb-3"}>IMDB</h2>
								<div>
									<Link to={imdbHref} target="_blank">
										View on IMDB
									</Link>
								</div>
							</div>
							
							<div>
								<h2>Release Date</h2>
								{movie.release_date}
							</div>
							
						</div>
					</div>
				</div>
				
				{/* more */}
				
				<div className={"container-fluid interior-wrapper"}>
					<div className={"row"}>
						<div className={"col-12"}>
							
							{/*<h2>Part of the [movie name] Collection</h2>*/}
							
							<div className={"pt-3 pb-3"}>
								<h2 className={"card-header mb-3"}>Recommendations</h2>
								<div>
									<MovieDetailRecommendationsComponent movieId={movieId}>
									</MovieDetailRecommendationsComponent>
								</div>
							</div>
							
							<div className={"pt-3 pb-3"}>
								<h2 className={"card-header mb-3"}>Similar</h2>
								<div>
									<MovieDetailSimilarComponent movieId={movieId}>
									</MovieDetailSimilarComponent>
								</div>
							</div>
							
							
							
							
						</div>
					</div>
				</div>
			
			</div>
			
		);
		
	}
});

module.exports = MovieDetailComponent;
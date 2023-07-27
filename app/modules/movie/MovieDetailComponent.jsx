import React, {useState, useEffect} from 'react';

import { Link, useParams, useLocation } from "react-router-dom";
import {HttpService} from 'app/services/HttpService';
import {MovieDetailReviewsComponent,
	MovieDetailVideoComponent,
	MovieDetailImageComponent,
	MovieDetailCreditsComponent,
	MovieDetailGenresComponent,
	MovieDetailKeywordsComponent,
	MovieDetailReleaseDatesComponent,
	MovieDetailRecommendationsComponent,
	MovieDetailSimilarComponent
} from "MovieModule";

export function MovieDetailComponent(Children){

	const {movieId} = useParams();

	// locals
	const httpService = new HttpService();

	// state
	// const [movieId, setMovieId] = useState('null');
	const [rating, setRating] = useState('null');
	const [movie, setMovie] = useState({
		production_companies : [],
		production_countries : [],
		genres: [],
		belongs_to_collection : {},
		spoken_languages : []
	});
	const [genres, setGenres] = useState([]);
	const [srcBackdrop, setSrcBackdrop] = useState(null);
	const [srcPoster, setSrcPoster] = useState(null);
	const [imdbHref, setImdbHref] = useState(null);
	const [productionCompaniesHtml, setProductionCompaniesHtml] = useState(null);
	const [productionCountriesHtml, setProductionCountriesHtml] = useState(null);
	const [html, setHtml] = useState(null);
	const [body, setBody] = useState(null);
	const [jumbotronStyles, setJumbotronStyles] = useState(null);
	const [jubotronStylesXl, setJumbotronStylesXl] = useState(null);
	const [movieHeroStyles, setMovieHeroStyles] = useState(null);
	const [movieHeroParagraphStyles, setMovieHeroParagraphStyles] = useState(null);

	useEffect(()=>{
		getMovieDetail();
	}, [movieId])

	const getMovieDetail = function(){
		window.scrollTo(0,0);
		let path = '/api/v1/movie/' + movieId;
		return httpService.doGet(path).then((res)=>{
			console.log('getMovieDetail:resp', res);
			if(res.success){

				let generateProductionCompaniesHtml = res.data.production_companies.map(function (item, idx) {
					return (
						<p key={idx}>{item.name}</p>
					)
				});
				let generateProductionCountriesHtml = res.data.production_countries.map(function (item, idx) {
					return (
						<p key={idx}>{item.name}</p>
					)
				});

				let movieHeroStyles = {
					position: 'absolute',
					bottom: '50px',
					left: '50px',
					right: '50px',
					backgroundColor: '#000',
					// color: '#fff',
					// opacity : '.5'
					background: 'rgba(0,0,0,0.8)'
				};
				let movieHeroParagraphStyles = {
					color: '#999'
				};

				setMovie(res.data);
				setGenres(res.data.genres);
				setSrcBackdrop("https://image.tmdb.org/t/p/original/" + res.data.backdrop_path);
				setSrcPoster("https://image.tmdb.org/t/p/w640/" + res.data.poster_path);
				setImdbHref('http://www.imdb.com/title/' + res.data.imdb_id);
				setProductionCompaniesHtml(generateProductionCompaniesHtml);
				setProductionCountriesHtml(generateProductionCountriesHtml);
				setMovieHeroStyles(movieHeroStyles);
				setMovieHeroParagraphStyles(movieHeroParagraphStyles);

				let html = document.getElementsByTagName("html")[0];
				let body = document.getElementById('body');
				body.style['background-position'] = 'top center';
				body.style['background-repeat'] = 'no-repeat';



			}else{

			}
			return true;
		}).finally(()=>{
			//doBeforeRender();
		});
	}

	const getJumbotronStyles = function(){
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
		let jumbotronStyles = {
			position: 'relative',
			backgroundImage: 'url(' + srcBackdrop + ')',
			backgroundPosition: 'top center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			minHeight: '600px'
		};
		let jumbrotronStylesXL = {};
		let jumbrotronStylesLG = {};
		let jumbrotronStylesMD = {};
		let jumbrotronStylesSM = {};
		let jumbrotronStylesXS = {
			minHeight: '100px'
		};
		return jumbotronStyles
	}

	const scrollUp= function(){
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
	}

	const componentWillMount= function(){
		window.scrollTo(0,0);
	}

	const componentDidMount= function(){
		// window.scrollTo(0,0);
		// console.log('MovieDetailController:componentDidMount')
		// let body = document.getElementById('body');
		// getMovieDetail({
		// 	movieId :  '', //this.props.routeParams.movieId
		// });
	}

	const componentWillUnmount= function(){
		// console.log('MovieDetailComponent componentWillUnmount');
		let body = document.getElementById('body');
		body.style['background-image'] = '';
	}

	const shouldComponentUpdate= function(nextProps, nextState){
		// console.error('MovieDetailComponent shouldComponentUpdate', nextProps);
		// console.error('MovieDetailComponent shouldComponentUpdate', nextState);

		console.warn('MovieDetailComponent:shouldComponentUpdate', useParams())
return false;
		// if(nextProps.routeParams.movieId !== nextState.movieId){
		// 	this.getMovieDetail({
		// 		movieId : nextProps.routeParams.movieId
		// 	});
		// 	window.scrollTo(0,0);
		// 	return true;
		// }else{
		// 	return true;
		// }

	}

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

	return (

		<div>

			{/* jumbotron-like hero */}

			<div className={"p-5"} style={getJumbotronStyles()} id="jumbotron">
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
								<li className="nav-item" onClick={scrollUp}>
									<a className="nav-link active" id="credits-tab" data-toggle="tab" href="#credits" role="tab" aria-controls="credits" aria-selected="true">
										Credits
									</a>
								</li>
								<li className="nav-item" onClick={scrollUp}>
									<a className="nav-link" id="videos-tab" data-toggle="tab" href="#videos" role="tab" aria-controls="videos" aria-selected="false">
										Videos
									</a>
								</li>
								<li className="nav-item" onClick={scrollUp}>
									<a className="nav-link" id="images-tab" data-toggle="tab" href="#images" role="tab" aria-controls="images" aria-selected="false">
										Images
									</a>
								</li>
								<li className="nav-item" onClick={scrollUp}>
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
								<MovieDetailImageComponent
									movieId={movieId}
									scrollUp={scrollUp.bind(this)}>
								</MovieDetailImageComponent>
							</div>
							<div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
								<MovieDetailReviewsComponent
									movieId={movieId}>
								</MovieDetailReviewsComponent>
							</div>
						</div>
					</div>

					{/* side bar */}

					<div className={"col-12 col-md-3"}>

						<MovieDetailReleaseDatesComponent movieId={movieId} />

						<MovieDetailGenresComponent
							genres={genres}/>

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




// class MovieDetailComponent_ extends React.Component {
//
// 	constructor(props) {
// 		super(props);
// 		this.httpService = new HttpService();
// 		this.state = {
// 			movieId : null, //this.props.routeParams.movieId,
//
// 			// movie : {}
// 			rating : '',
// 			movie : {
// 				production_companies : [],
// 				production_countries : [],
// 				genres: [],
// 				belongs_to_collection : {},
// 				spoken_languages : []
// 			},
//
// 			// scroll
// 			// scroll :
// 		}
// 	}
//
// 	// React Methods
//
// 	getMovieDetail(obj){
// 		let self = this;
// 		let path = '/api/v1/movie/' + obj.movieId;
// 		this.httpService.doGet(path).then(function(resp){
// 			if(resp.success){
// 				self.setState({
// 					movieId: obj.movieId,
// 					movie : resp.data
// 				});
// 			}else{
//
// 			}
// 		});
// 	}
//
// 	scrollUp(){
// 		// console.log('ref', this.jumbotron.position(), this.jumbotron.offset());
// 		let nav = $('#layout-header');
// 		let jumbotron = $('#jumbotron'); // document.getElementById('jumbotron');
//
// 		// let bounding = el.getBoundingClientRect();
// 		let navHeight = nav.outerHeight();
// 		// let navPosition = nav.position();
// 		let jumbotronHeight = jumbotron.outerHeight();
// 		// let jumbotronPosition = jumbotron.position();
//
// 		let doc = document.documentElement;
// 		let windowTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
//
// 		let windowTopOffset = windowTop + navHeight;
// 		let scrollPoint = jumbotronHeight + navHeight // navHeight + jumbotronHeight - jumbotronPosition.top;
//
// 		if(windowTopOffset > scrollPoint){
// 			window.scrollTo(0, scrollPoint);
// 		}
// 	}
//
// 	componentWillMount(){
// 		window.scrollTo(0,0);
// 	}
//
// 	componentDidMount(){
// 		// window.scrollTo(0,0);
// 		console.log('MovieDetailController:componentDidMount', this)
// 		let body = document.getElementById('body');
// 		this.getMovieDetail({
// 			movieId :  '', //this.props.routeParams.movieId
// 		});
// 	}
//
// 	componentWillUnmount(){
// 		// console.log('MovieDetailComponent componentWillUnmount');
// 		let body = document.getElementById('body');
// 			body.style['background-image'] = '';
// 	}
//
// 	shouldComponentUpdate(nextProps, nextState){
// 		// console.error('MovieDetailComponent shouldComponentUpdate', nextProps);
// 		// console.error('MovieDetailComponent shouldComponentUpdate', nextState);
//
// 		console.warn('MovieDetailComponent:shouldComponentUpdate', useParams())
//
// 		// if(nextProps.routeParams.movieId !== nextState.movieId){
// 		// 	this.getMovieDetail({
// 		// 		movieId : nextProps.routeParams.movieId
// 		// 	});
// 		// 	window.scrollTo(0,0);
// 		// 	return true;
// 		// }else{
// 		// 	return true;
// 		// }
//
// 	}
//
// 	render(){
//
// 		/*
// 		==============================
// 		Image Sizes
// 		==============================
// 		"backdrop_sizes": [
// 			"w300",
// 			"w780",
// 			"w1280",
// 			"original"
// 		],
// 			"logo_sizes": [
// 			"w45",
// 			"w92",
// 			"w154",
// 			"w185",
// 			"w300",
// 			"w500",
// 			"original"
// 		],
// 			"poster_sizes": [
// 			"w92",
// 			"w154",
// 			"w185",
// 			"w342",
// 			"w500",
// 			"w780",
// 			"original"
// 		],
// 			"profile_sizes": [
// 			"w45",
// 			"w185",
// 			"h632",
// 			"original"
// 		],
// 			"still_sizes": [
// 			"w92",
// 			"w185",
// 			"w300",
// 			"original"
// 		]
// 		*/
//
// 		let { movieId, movie, rating } = this.state;
//
// 		let srcBackdrop = "https://image.tmdb.org/t/p/original/" + movie.backdrop_path ;
// 		let srcPoster = "https://image.tmdb.org/t/p/w640/" + movie.poster_path ;
// 		let imdbHref = 'http://www.imdb.com/title/' + movie.imdb_id;
//
// 		let productionCompaniesHtml = movie.production_companies.map(function(item, idx){
// 			return (
// 				<p key={idx}>{item.name}</p>
// 			)
// 		});
//
// 		let productionCountriesHtml = movie.production_countries.map(function(item, idx){
// 			return (
// 				<p key={idx}>{item.nanme}</p>
// 			)
// 		});
//
// 		/*
//
// 		adult: true / false
// 		belongs_to_collection : object
// 		budget: number
// 		genres: array of objects (name)
// 		homepage: string
// 		original_language
// 		original_title
// 		overview
// 		popularity: number
// 		poster_path
// 		production_companies
// 		production_countries
// 		release_date
// 		revenue
// 		runtime
// 		spoken_languages: array of objs (name)
// 		statua
// 		tagline
// 		title
// 		video
// 		vote_average
// 		vote_count
//
// 		 */
//
// 		let html = document.getElementsByTagName("html")[0];
// 		let body = document.getElementById('body');
// 		// body.style['background-image'] = "url(" + srcBackdrop + ")";
// 		body.style['background-position'] = 'top center';
// 		// body.style['background-size'] = 'cover';
// 		body.style['background-repeat'] = 'no-repeat';
//
// 		let jumbotronStyles = {
// 			position : 'relative',
// 			backgroundImage : 'url(' + srcBackdrop + ')',
// 			backgroundPosition : 'top center',
// 			backgroundSize : 'cover',
// 			backgroundRepeat : 'no-repeat',
// 			minHeight : '600px'
// 		};
//
// 		let jumbrotronStylesXL = {
//
// 		};
// 		let jumbrotronStylesLG = {
//
// 		};
// 		let jumbrotronStylesMD = {
//
// 		};
// 		let jumbrotronStylesSM = {
//
// 		};
// 		let jumbrotronStylesXS = {
// 			minHeight : '100px'
// 		};
//
// 		let movieHeroStyles = {
// 			position : 'absolute',
// 			bottom : '50px',
// 			left : '50px',
// 			right : '50px',
// 			backgroundColor: '#000',
// 			// color: '#fff',
// 			// opacity : '.5'
// 			background: 'rgba(0,0,0,0.8)'
// 		};
//
// 		let movieHeroParagraphStyles = {
// 			color: '#999'
// 		};
//
// 		return (
//
// 			<div>
//
// 				{/* jumbotron-like hero */}
//
// 				<div className={"p-5"} style={jumbotronStyles} id="jumbotron">
// 					<div className={"movie-hero p-5"} style={movieHeroStyles}>
// 						<h1 className={"display-4"}>
// 							{movie.original_title}
// 						</h1>
// 						<p className={"lead"} style={movieHeroParagraphStyles}>
// 							{movie.overview}
// 						</p>
// 					</div>
// 				</div>
//
// 				{/* Tabs */}
//
// 				<div className={"bg-light sticky-top pt-4 pb-4"}>
// 					<div className={"container-fluid interior-wrapper"}>
// 						<div className={"row"}>
// 							<div className={"col-12"}>
// 								<ul className="nav nav-tabs" id="myTab" role="tablist">
// 									<li className="nav-item" onClick={this.scrollUp}>
// 										<a className="nav-link active" id="credits-tab" data-toggle="tab" href="#credits" role="tab" aria-controls="credits" aria-selected="true">
// 											Credits
// 										</a>
// 									</li>
// 									<li className="nav-item" onClick={this.scrollUp}>
// 										<a className="nav-link" id="videos-tab" data-toggle="tab" href="#videos" role="tab" aria-controls="videos" aria-selected="false">
// 											Videos
// 										</a>
// 									</li>
// 									<li className="nav-item" onClick={this.scrollUp}>
// 										<a className="nav-link" id="images-tab" data-toggle="tab" href="#images" role="tab" aria-controls="images" aria-selected="false">
// 											Images
// 										</a>
// 									</li>
// 									<li className="nav-item" onClick={this.scrollUp}>
// 										<a className="nav-link" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">
// 											Reviews
// 										</a>
// 									</li>
// 								</ul>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
//
// 				{/* Tab Guts */}
//
// 				<div className={"container-fluid interior-wrapper"}>
// 					<div className={"row"}>
// 						<div className={"col-12 col-md-9"}>
// 							<div className="tab-content" id="myTabContent">
// 								<div className="tab-pane fade show active" id="credits" role="tabpanel" aria-labelledby="credits-tab">
// 									<MovieDetailCreditsComponent movieId={movieId}>
// 									</MovieDetailCreditsComponent>
// 								</div>
// 								<div className="tab-pane fade" id="videos" role="tabpanel" aria-labelledby="videos-tab">
// 									<MovieDetailVideoComponent movieId={movieId}>
// 									</MovieDetailVideoComponent>
// 								</div>
// 								<div className="tab-pane fade" id="images" role="tabpanel" aria-labelledby="images-tab">
// 									<MovieDetailImageComponent movieId={movieId} scrollUp={this.scrollUp}>
// 									</MovieDetailImageComponent>
// 								</div>
// 								<div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
// 									<MovieDetailReviewsComponent movieId={movieId}>
// 									</MovieDetailReviewsComponent>
// 								</div>
// 							</div>
// 						</div>
//
// 						{/* side bar */}
//
// 						<div className={"col-12 col-md-3"}>
//
// 							<MovieDetailReleaseDatesComponent movieId={movieId} />
//
// 							<MovieDetailGenresComponent genres={movie.genres}/>
//
// 							<MovieDetailKeywordsComponent movieId={movieId} />
//
// 							<div className={"pt-3 pb-3"}>
// 								<h2 className={"card-header mb-3"}>Production Companies</h2>
// 								<div>
// 									{productionCompaniesHtml}
// 								</div>
// 							</div>
//
// 							<div className={"pt-3 pb-3"}>
// 								<h2 className={"card-header mb-3"}>Production Countries</h2>
// 								<div>
// 									{productionCountriesHtml}
// 								</div>
// 							</div>
//
// 							<div className={"pt-3 pb-3"}>
// 								<h2 className={"card-header mb-3"}>Runtime</h2>
// 								<div>
// 									{movie.runtime}
// 								</div>
// 							</div>
//
// 							<div className={"pt-3 pb-3"}>
// 								<h2 className={"card-header mb-3"}>Revenue</h2>
// 								<div>
// 									{movie.revenue}
// 								</div>
// 							</div>
//
// 							<div className={"pt-3 pb-3"}>
// 								<h2 className={"card-header mb-3"}>IMDB</h2>
// 								<div>
// 									<Link to={imdbHref} target="_blank">
// 										View on IMDB
// 									</Link>
// 								</div>
// 							</div>
//
// 							<div>
// 								<h2>Release Date</h2>
// 								{movie.release_date}
// 							</div>
//
// 						</div>
// 					</div>
// 				</div>
//
// 				{/* more */}
//
// 				<div className={"container-fluid interior-wrapper"}>
// 					<div className={"row"}>
// 						<div className={"col-12"}>
//
// 							{/*<h2>Part of the [movie name] Collection</h2>*/}
//
// 							<div className={"pt-3 pb-3"}>
// 								<h2 className={"card-header mb-3"}>Recommendations</h2>
// 								<div>
// 									<MovieDetailRecommendationsComponent movieId={movieId}>
// 									</MovieDetailRecommendationsComponent>
// 								</div>
// 							</div>
//
// 							<div className={"pt-3 pb-3"}>
// 								<h2 className={"card-header mb-3"}>Similar</h2>
// 								<div>
// 									<MovieDetailSimilarComponent movieId={movieId}>
// 									</MovieDetailSimilarComponent>
// 								</div>
// 							</div>
//
//
//
//
// 						</div>
// 					</div>
// 				</div>
//
// 			</div>
//
// 		);
//
// 	}
// }

// export default withRouter(MovieDetailComponent);

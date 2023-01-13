import React from 'react';

import {HttpService} from 'app/services/HttpService';
import {Hyphenate} from 'app/services/Hyphenate';

import { CarouselController } from 'CarouselModule';

// TODO: remove the sidebar, stack everything

export class MovieDetailCreditsComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			results : {
				cast : [],
				crew : [],

				castCustomProperties: [],
				castCustomClasses : {},
				castCustomStyles : {},

				crewCustomProperties: [],
				crewCustomClasses : {},
				crewCustomStyles : {}
			}
		}
	}


	// state and props

	// propTypes: {
	//
	// },

	// controller methods

	getMovieCredits(nextProps){
		let self = this;
		let { movieId } = nextProps;
		let path = '/api/v1/movie/credits/' + movieId;
		httpService.doGet(path).then(function(resp){
			self.generateCarousel(resp.data.cast, 'cast');
			self.generateCarousel(resp.data.crew, 'crew');
			// self.setState({
			// 	results : resp.data
				// page : resp.data.page,
				// total_pages : resp.data.total_pages,
				// total_results : resp.data.total_results,
				// results : resp.data.results
			// });
		});
	}

	generateCarousel(data, stateProperty){

		let arr = data.map(function(obj, idx){
			let src = 'https://image.tmdb.org/t/p/w185' + obj.profile_path;
			let href = '/person/' + hyphenate.hyphenateAndLowercase(obj.name) + '/' + obj.id;
			return {
				id : obj.id,
				src : src,
				href : href,
				// custom attributes
				name : obj.name,
				character : obj.character,
				job : obj.job
			};
		});

		// this.setState({
		// 	[stateProperty] : arr
		// });

		if(stateProperty === 'cast'){
			this.setState({
				cast : arr,
				castCustomProperties : ['name', 'character'],
				castCustomClasses : {
					name: ['pt-1'],
					character: ['font-weight-bold']
				},
				castCustomStyles : {
					name : '',
					character : ''
				}
			});
		}

		if(stateProperty === 'crew'){
			this.setState({
				crew : arr,
				crewCustomProperties : ['name', 'job'],
				crewCustomClasses : {
					name: ['pt-1'],
					job: ['font-weight-bold']
				},
				crewCustomStyles : {
					name : '',
					job : ''
				}
			});
		}

	}


	// life cycle methods

	componentWillReceiveProps(nextProps){
		// console.log('ModalController componentWillReceiveProps', nextProps);
		this.setState(nextProps);
		this.getMovieCredits(nextProps)
	}

	shouldComponentUpdate(nextProps, nextState){
		// console.log('ModalController shouldComponentUpdate', nextProps, nextState);
		return true;
	}

	componentWillUpdate(){

	}

	componentDidUpdate(){

	}

	componentWillUnmount(){

	}

	render (){

		// {
		// 	"cast_id": 14,
		// 	"character": "Luke Skywalker / Dobbu Scay (voice)",
		// 	"credit_id": "5679cdd4c3a3685bbf000206",
		// 	"gender": 2,
		// 	"id": 2,
		// 	"name": "Mark Hamill",
		// 	"order": 0,
		// 	"profile_path": "/fk8OfdReNltKZqOk2TZgkofCUFq.jpg"
		// },

		let { results, cast, crew,
			castCustomProperties, castCustomClasses, castCustomStyles,
			crewCustomProperties, crewCustomClasses, crewCustomStyles } = this.state;
		// let html = results.cast.map(function(obj){
		// 	let imgSrc = 'https://image.tmdb.org/t/p/w185' + obj.profile_path;
		// 	let castLink = '#/person/' + obj.name + '/' + obj.id;
		// 	return (
		// 		<div key={obj.id} className={"col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 mb-5"}>
		// 			<a href={castLink}>
		// 				<img src={imgSrc} />
		// 			</a>
		// 			<div className={"pt-1"}>{obj.name}</div>
		// 			<div className={"font-weight-bold"}>{obj.character}</div>
		// 		</div>
		// 	)
		// });

		return (

			<div className={"pt-3 pb-3"}>
				<h2 className={"card-header mb-3"}>Credits</h2>

				<h3 className={"text-center"}>Cast</h3>

				<div className={"mb-5"}>
					<CarouselController
						carouselId={"castCarousel"}
						slides={cast}
						items={cast}
						itemsPerSlide={6}
						template={"cast"}
						customProperties={castCustomProperties}
						customClasses={castCustomClasses}
						customStyles={castCustomStyles}>
					</CarouselController>
				</div>

				<h3 className={"text-center"}>Crew</h3>

				<div className={"mb-5"}>
					<CarouselController
						carouselId={"crewCarousel"}
						slides={crew}
						items={crew}
						itemsPerSlide={6}
						template={"crew"}
						customProperties={crewCustomProperties}
						customClasses={crewCustomClasses}
						customStyles={crewCustomStyles}>
					</CarouselController>
				</div>

			</div>

		)

	}

}

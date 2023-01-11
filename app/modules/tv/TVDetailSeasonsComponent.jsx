import React from 'react';

import { CarouselController } from 'CarouselModule';

import {Hyphenate} from 'app/services/Hyphenate';

export class TVDetailSeasonsComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			seasonsSlides : []
		}
	}

	generateCarousel(objToGenerate){

		let arr = objToGenerate.data.map(function(obj, idx){

			let folder = 'w185';
			let src = 'https://image.tmdb.org/t/p/' + folder + obj.poster_path;
			let showNameHref = objToGenerate.showName + ' season ' + obj.season_number;
			let href = '/tv/season/' + hyphenate.hyphenateAndLowercase(showNameHref) + '/' + objToGenerate.showId + '/' + obj.season_number;

			return {
				id : obj.id,
				src : src,
				href : href,
				episodes : obj.episode_count,
				airDate : obj.air_date,
				season : obj.season_number
			};
		});

		let update = {
			seasonsSlides : arr
		};

		this.setState(update);

	}

	componentWillReceiveProps(nextProps){

		console.log('TVDetailSeasonsComponent', nextProps);

		let oCarousel = {
			data : nextProps.seasons,
			showName : nextProps.showName,
			showId : nextProps.showId
		};

		if(nextProps.seasons.length > 0){
			this.generateCarousel(oCarousel);
		}

	}

	// shouldComponentUpdate(){
	// 	return true;
	// },

	render(){

		let { seasonsSlides } = this.state;

		return (
			<div id={"tv-credits"}>

				<div className={"row mb-3"}>
					<div className={"col-12"}>
						<h2 className={"card-header"}>Seasons</h2>
					</div>
				</div>

				<div className={"row"}>
					<div className={"col-12"}>
						<CarouselController
							carouselId={"seasonsCarousel"}
							slides={seasonsSlides}
							itemsPerSlide={6}
							template={"season"}>
						</CarouselController>
					</div>
				</div>

			</div>
		)
	}

}

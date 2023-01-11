import React from 'react';

import {Hyphenate} from 'app/services/Hyphenate';
import {BreakpointService} from "BreakpointService";
import { CarouselController } from 'CarouselModule';


export class TVSeasonCarouselComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentBreakpoint : '',
			carouselList : [],
			type : 'undefinedType'
		}
	}


	// my methods


	handleBreakpointChange(breakpoint){

		console.log('PersonImagesComponent handleBreakpointChange', breakpoint);

		let { currentBreakpoint } = this.state;

		if(currentBreakpoint !== breakpoint){
			this.generateCarousel(this.props.images, this.props.type, breakpoint);
		}
	}

	generateCarousel(data, dataType, breakpoint){

		let { creditType } = this.props;

		let arr = data.map(function(obj, idx){

			let srcFolder =   dataType === 'images' 		? 'w185'
							: dataType === 'tagged_images' 	? 'w185'
							: dataType === 'cast' 			? 'w185' // ?
							: dataType === 'crew'			? 'w185' // ?
							: '';

			let srcFolderLg = dataType === 'images' 		? 'h632'
							: dataType === 'tagged_images' 	? 'w780'
							: dataType === 'cast' 			? 'w185' // ?
							: dataType === 'crew'			? 'w185' // ?
							: '';

			let srcFile = dataType === 'images' 		? 'file_path'
						: dataType === 'tagged_images' 	? 'file_path'
						: dataType === 'cast' 			? 'poster_path'
						: dataType === 'crew' 			? 'poster_path'
						: '';

			let src = 'https://image.tmdb.org/t/p/' + srcFolder + obj[srcFile];
			let srcLg = 'https://image.tmdb.org/t/p/' + srcFolderLg + obj[srcFile];

			let returnThis = {
				id :  dataType === 'images' ? obj.file_path
					: dataType === 'tagged_images' ? obj.media.title
					: dataType === 'cast' || dataType === 'crew' ? obj.title
					: "",
				src : src,
				srcLg : srcLg,
			};

			if(dataType === 'images' || dataType === 'tagged_images'){
				returnThis.iso_639_1 = obj.iso_639_1;
				returnThis.voteCount = obj.vote_count;
				returnThis.voteAverage = obj.vote_average.toFixed(1);
			}

			if(dataType === 'tagged_images'){
				returnThis.media = obj.media;
			}

			if(dataType === 'cast' || dataType === 'crew'){
				let hrefText = 	  creditType === 'movie' ? obj.title
					: creditType === 'tv' ? obj.name
						: ''; // something f'd up if u get here

				returnThis.href = '/' + creditType + '/detail/' + this.hyphenate.hyphenateAndLowercase(hrefText) + '/' + obj.id;
				returnThis.title = obj.title;
				returnThis.overview = obj.overview;
				returnThis.name = obj.name;
				returnThis.character = obj.character;
				returnThis.job = obj.job;
			}

			return returnThis;

		});



		let itemsPerSlide =   breakpoint === 'xs' ? 2
			: breakpoint === 'sm' ? 3
				: breakpoint === 'md' ? 4
					: breakpoint === 'lg' || breakpoint === 'xl' ? 6
						: 4;
		console.log('itemsPerSlide', itemsPerSlide, breakpoint);
		this.setState({
			currentBreakpoint : breakpoint,
			itemsPerSlide : itemsPerSlide,

			carouselList : arr,
			type : dataType
		});
	}

	// react methods

	componentWillMount(){
		// this.setState here is OK, but not recommended
		let b = new breakpointService();
		b.init({
			onChange : this.handleBreakpointChange
		});

	}

	componentDidMount(){
		// this.setState here is OK, and will trigger another render()
		// setup subscriptions here
		// make api requests here
	}

	componentWillReceiveProps(nextProps){
		// calling this.setState is OK here
		let { currentBreakpoint } = this.state;
		this.generateCarousel(nextProps.images, nextProps.type, currentBreakpoint);
	}

	// shouldComponentUpdate(nextProps, nextState){
	// 	generally speaking, let React handle whether the component should update
	// 	or be careful whether or not to return true
	// 	return true;
	// },

	componentWillUpdate(nextProps, nextState){
		// do not call this.setState here
	}

	componentDidUpdate(prevProps, prevState){
		// not called on initial render()
		// You can operate on the DOM here
		// network requests are OK here, but you need to insure the props/state did not change
	}

	componentWillUnmount(){
		// unsubscribe here, remove timers, etc
	}

	// componentDidCatch(error, info){
	// 	catches errors in child components, not this component
	// },

	// this.forceUpdate(callback) -- avoid using this

	render(){

		let { heading } = this.props;
		let { carouselList, type, itemsPerSlide } = this.state;


		return (
			<div>
				<CarouselController
					carouselId={type}
					slides={carouselList}
					items={carouselList}
					itemsPerSlide={itemsPerSlide}
					template={type}>
				</CarouselController>
			</div>
		)
	}

}

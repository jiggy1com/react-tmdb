import React from 'react';
import { Link } from "react-router-dom";

import { LightboxController } from 'LightboxModule';

export class MovieDetailImageListComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			imageList : [],
			currentIdx : -1
		}
	}


	// custom methods

	showLightbox(obj, idx){
		this.setState({
			showLightbox : true,
			currentIdx : idx
		});
	}

	onCloseLightbox(){
		this.setState({
			showLightbox : false,
			currentIdx : -1
		});
	}

	onStateChange(idx){
		this.setState({
			currentIdx : idx
		});
	}

	renderImages(){

		let self = this;
		let { imageList } = this.state;

		if(imageList.length === 0){
			return (
				<span>
				</span>
			)
		}else{
			return imageList.map(function(obj, idx){
				// console.log('MovieDetailImageListComponent', obj);
				return (
					<div key={obj.id} className={"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3"}>
						<Link to={'javascript:void(0)'} onClick={() => { self.showLightbox(obj, idx) } } >
							<img src={obj.src} />
						</Link>
						<p className={"pt-2"}>
							Vote Avg: <strong>{obj.vote_average}</strong>
							based on <strong>{obj.vote_count}</strong> total votes.
						</p>
					</div>
				)
			});
		}
	}

	setImageList(imageList){
		let arr = [];
		imageList.map(function(obj,idx){

			// preload images
			// TODO: make sure this doesn't repeat on scroll
			let src = 'https://image.tmdb.org/t/p/w300' + obj.file_path;
			// let img = new Image();
			// 	img.onload = function(){
			// 		console.log('loaded', src);
			// 		$('<img src="'+ src +'">').load(function() {
			// 			$(this).appendTo('body');
			// 		});
			// 	};
			// 	img.src = src;

			// push image into array
			arr.push({
				id : obj.file_path,
				title : obj.file_path,
				src : src,
				vote_average : obj.vote_average,
				vote_count : obj.vote_count
			});
		});
		return arr;
	}

	renderCarousel(){
		let { imageList } = this.state;
		if(imageList.length === 0){
			return (
				<span>
				</span>
			)
		}else{
			return imageList.map(function(obj, idx){
				// console.log('idx', idx);

				let thisClass = idx === 0 ? 'active' : '';

				return (
					<div key={obj.src} className={"carousel-item jiggy " + thisClass}>
						<div className={"container"}>
							<div className={"row"}>
								<div className={"col-3"}>
									<img className="d-block w-100" src={obj.src} alt="slide" />
								</div>
								<div className={"col-3"}>
									<img className="d-block w-100" src={obj.src} alt="slide" />
								</div>
								<div className={"col-3"}>
									<img className="d-block w-100" src={obj.src} alt="slide" />
								</div>
								<div className={"col-3"}>
									<img className="d-block w-100" src={obj.src} alt="slide" />
								</div>
							</div>
						</div>
					</div>
				)
			});
		}
	}

	// react methods

	componentWillReceiveProps(nextProps){
		// console.log('MovieDetailImageListComponent componentWillReceiveProps', nextProps);
		this.setState({
			imageList : this.setImageList(nextProps.imageList)
		});
	}

	shouldComponentUpdate(nextProps, nextState){
		// console.log('MovieDetailImageListComponent shouldComponentUpdate', nextProps, nextState);
		let { imageList } = this.props;
		return imageList !== nextProps.imageList || nextState.currentIdx !== -1;
	}

	render(){
		let { currentIdx, imageList, showLightbox } = this.state;
		let html = this.renderImages();
		let carousel = this.renderCarousel();

		return (
			<div className={"row"}>

				{/*
				<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
					<div className="carousel-inner mt-5">
						{carousel}
					</div>
					<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true">
						</span>
						<span className="sr-only">Previous</span>
					</a>
					<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true">
						</span>
						<span className="sr-only">Next</span>
					</a>
				</div>
				*/}


				{/* Image List */}
				{html}

				{/* Lightbox */}
				<LightboxController
					currentIdx={currentIdx}
					imageList={imageList}
					showLightbox={showLightbox}
					onCloseLightbox={this.onCloseLightbox}
					onStateChange={this.onStateChange}>
				</LightboxController>

			</div>
		);
	}
}

MovieDetailImageListComponent.defaultProps = {
	imageList : [],
	currentIdx : -1
}

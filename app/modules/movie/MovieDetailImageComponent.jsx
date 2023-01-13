import React from 'react';
import {HttpService} from 'app/services/HttpService';
import {ModalController} from "ModalModule";
import { LightboxController } from 'LightboxModule';
import { CarouselController } from 'CarouselModule';
import { MovieDetailImageListComponent } from 'MovieModule';

export class MovieDetailImageComponent extends React.Component {

	constructor() {
		super();
		this.httpService = new HttpService();
		this.state = {

			// modal
			modalHeader : 'Image',
			modalSrc : '',
			modalShow : false,

			// lightbox
			initialIdx : 0,
			imageList : [],
			showLightbox : false,

			// list of images
			results : {
				backdrops : [],
				posters : []
			},

			// up arrow
			showUpArrow : false,
			initialPosition : 0,
			backdropsList : [],
			postersList: []
		}

		// TODO: implement correctly
		window.addEventListener('scroll', (e) => {
			this.handleScroll(e);
		});

	}
	generateCarousel(data, dataType){
		let arr = data.map(function(obj, idx){
			// console.log('MovieDetailImageComponent generateCarousel', obj);

			let folderLg = dataType === 'posters' ? 'w500' : 'w780';

			let src = 'https://image.tmdb.org/t/p/w185' + obj.file_path;
			let srcLg =  'https://image.tmdb.org/t/p/' + folderLg + obj.file_path;
			return {
				id : obj.file_path,
				src : src,
				srcLg : srcLg
			};
		});

		let update = {};
		if(dataType === 'backdrops'){
			update.backdropsList =  arr;
		}
		if(dataType === 'posters'){
			update.postersList = arr;
		}

		this.setState(update);
	}

	// react methods


	componentWillReceiveProps(nextProps){
		this.setState(nextProps);
		this.getMovieImageList(nextProps)
	}

	componentWillUnmount(){
		// window.removeEventListener('scroll');
		// console.log('MovieDetailImageComponent componentWillUnmount');

		// handle scroll
		window.removeEventListener('scroll', (e) => {
			this.handleScroll(e);
		});

		this.localListener = null;
	}


	shouldComponentUpdate(nextProps, nextState){
		console.warn('MovieDetailImageComponent shouldComponentUpdate', nextProps.movieId !== '', nextProps, nextState);
		return nextProps.movieId !== '';
		// return true;
	}

	// custom methods

	getMovieImageList(nextProps){
		let self = this;
		let { movieId } = nextProps;
		let path = '/api/v1/movie/images/' + movieId;
		this.httpService.doGet(path).then(function(resp){
			self.generateCarousel(resp.data.backdrops, 'backdrops');
			self.generateCarousel(resp.data.posters, 'posters');
			// self.setState({
			// 	results : resp.data,
			// 	backdropsList : resp.data.backdrops,
			// 	postersList : resp.data.posters
			// });
		});
	}

	// setLightboxList(list){
	// 	let arr = [];
	// 	list.map(function(obj){
	// 		arr.push({
	// 			id : obj.file_path,
	// 			title : obj.file_path,
	// 			src : 'https://image.tmdb.org/t/p/original' + obj.file_path,
	// 			vote_average : obj.vote_average,
	// 			vote_count : obj.vote_count
	// 		});
	// 	});
	// 	return arr;
	// },

	showModal(obj){
		this.setState({
			modalSrc : 'https://image.tmdb.org/t/p/original' + obj.file_path,
			modalShow : true
		});
	}

	showLightbox(obj, type, idx){
		this.setState({
			showLightbox : true,
			currentIdx : idx
		});
		// let { results } = this.state;
		// let arr = [];
		// results[type].map(function(oImage){
		// 	arr.push({
		// 		src : 'https://image.tmdb.org/t/p/original' + oImage.file_path,
		// 		title : oImage.file_path
		// 	});
		// });
		// this.setState({
		// 	imageList : arr,
		// 	initialIdx : idx,
		// 	showLightbox : true
		// });
	}

	// "backdrops": [
	// {
	// 	"aspect_ratio": 1.777777777777778,
	// 	"file_path": "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
	// 	"height": 2160,
	// 	"iso_639_1": null,
	// 	"vote_average": 5.388,
	// 	"vote_count": 4,
	// 	"width": 3840
	// }],
	// "posters": [
	// {
	// 	"aspect_ratio": 1.777777777777778,
	// 	"file_path": "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
	// 	"height": 2160,
	// 	"iso_639_1": null,
	// 	"vote_average": 5.388,
	// 	"vote_count": 4,
	// 	"width": 3840
	// }]

	// renderImages(resultsList, type){
	//
	// 	let self = this;
	//
	// 	if(resultsList.length === 0){
	// 		return (
	// 			<span key={'image-key'}>
	// 			</span>
	// 		)
	// 	}else{
	// 		return resultsList.map(function(obj, idx){
	//
	// 			let imgSrc = 'https://image.tmdb.org/t/p/w500' + obj.file_path;
	//
	// 			return (
	// 				<div key={obj.file_path} className={" col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3"}>
	// 					<a href={'javascript:void(0)'} onClick={() => { self.showLightbox(obj, type, idx) } } >
	// 						<img src={imgSrc} />
	// 					</a>
	// 					<p>Vote Avg: {obj.vote_average} based on {obj.vote_count} total votes.</p>
	// 				</div>
	// 			)
	// 		});
	// 	}
	// },

	localListener = null;

	handleScroll(e){

		let self = this;

		this.localListener = $(window).scroll(function() {
			clearTimeout($.data(this, 'scrollTimer'));
			$.data(this, 'scrollTimer', setTimeout(function() {

				let itc = $('#image-tabs-container');
				// TODO: change 87 to a calculation
				if( itc.position().top > 87){
					self.setState({
						showUpArrow : true
					});
				}else{
					self.setState({
						showUpArrow : false
					});
				}

			}, 250));
		});

	}

	// render

	render(){



		let self = this;
		let { results, modalHeader, modalSrc, modalShow, showUpArrow, backdropsList, postersList } = this.state;
		// let backdropsHtml = this.renderImages(results.backdrops, 'backdrops');
		// let postersHtml = this.renderImages(results.posters, 'posters');

		return (
			<div className={"pt-3 pb-3 sticky-"}>
				<h2 className={"card-header mb-3"}>
					Images
				</h2>


				{/* TESTING */}

				<CarouselController
					carouselId={"imageCarousel"}
					slides={postersList}
					items={postersList}
					itemsPerSlide={4}
					template={"gallery"}>
				</CarouselController>

				<CarouselController
					carouselId={"backdropsCarousel"}
					slides={backdropsList}
					items={backdropsList}
					itemsPerSlide={4}
					template={"gallery"}>
				</CarouselController>

				{/* previous code, broken now - why??? */}

				<div className={"bg-light sticky-top pt-4 pb-4"} id="image-tabs-container">
					<ul className="nav nav-tabs bg-light" id="imageTabs" role="tablist">
						<li className="nav-item" onClick={this.props.scrollUp}>
							<a className="nav-link active" id="backdrops-tab" data-toggle="tab" href="#backdrops" role="tab" aria-controls="backdrops" aria-selected="true">
								Backdrops
							</a>
						</li>
						<li className="nav-item" onClick={this.props.scrollUp}>
							<a className="nav-link" id="posters-tab" data-toggle="tab" href="#posters" role="tab" aria-controls="posters" aria-selected="false">
								Posters
							</a>
						</li>
						{showUpArrow ?
							<span className={"fa fa-chevron-up scroll-up-fixed"} onClick={this.props.scrollUp}>
							</span>
							: null
						}
					</ul>
				</div>
				<div className="tab-content" id="imageTabsContent">
					<div className="tab-pane fade show active pt-3" id="backdrops" role="tabpanel" aria-labelledby="backdrops-tab">
						<MovieDetailImageListComponent imageList={backdropsList}>
						</MovieDetailImageListComponent>
						{/*{backdropsHtml}*/}
					</div>
					<div className="tab-pane fade pt-3" id="posters" role="tabpanel" aria-labelledby="posters-tab">
						<MovieDetailImageListComponent imageList={postersList}>
						</MovieDetailImageListComponent>
						{/*{postersHtml}*/}
					</div>
				</div>

				{/* TODO: change to light box
				<ModalController modalId={"image-modal"} header={modalHeader} show={modalShow}>
					<img src={modalSrc} />
				</ModalController>
				*/}

				{/* Lightbox
				<LightboxController initialIdx={initialIdx} imageList={imageList} show={showLightbox}>
				</LightboxController>
				*/}
			</div>
		);
	}
}

import React from 'react';
import {HttpService} from 'app/services/HttpService';
import {ModalController} from "ModalModule";
import { CarouselController } from 'CarouselModule';

// TODO: make movies open in a modal

export class MovieDetailVideoComponent extends React.Component {

	constructor() {
		super();
		this.httpService = new HttpService();
		this.state = {
			// no longer being used
			results : [],

			// still using
			showModal : false,
			movie: {},

			// new properties
			template : 'video',
			videos : [],
			videoCustomProperties: [],
			videoCustomClasses: {},
			videoCustomStyles: {}
		}
	}

	// my methods
	generateCarousel(data){
		let arr = data.map(function(obj, idx){
			let src = 'https://img.youtube.com/vi/'+obj.key+'/hqdefault.jpg';
			let iFrameSrc = 'https://www.youtube.com/embed/' + obj.key + '?rel=0';
			return {
				id : obj.id,
				src : src,
				iFrameSrc : iFrameSrc,
				// custom attributes
				name : obj.name
			};
		});

		this.setState({
			videos : arr,
			videoCustomProperties : ['name'],
			videoCustomClasses : {
				name: ['pt-1']
			},
			videoCustomStyles : {
				name : ''
			}
		});

	}

	// react methods



	componentWillReceiveProps(nextProps){
		// console.log('MovieDetailVideoComponent componentWillReceiveProps', nextProps);
		this.setState(nextProps);
		this.getMovieVideos(nextProps)
	}

	componentDidMount(){

	}

	getMovieVideos(nextProps){
		let self = this;
		let { movieId } = nextProps;
		let path = '/api/v1/movie/videos/' + movieId;
		this.httpService.doGet(path).then(function(resp){
			self.generateCarousel(resp.data.results);
			// self.setState({
			// 	page : resp.data.page,
			// 	total_pages : resp.data.total_pages,
			// 	total_results : resp.data.total_results,
			// 	results : resp.data.results
			// });
		});
	}

	doHideModal(){
		this.setState({
			showModal : false
		});
	}

	doShowModal(oMovie){
		this.setState({
			showModal : true,
			movie: oMovie
		});
	}

	render(){

		let self = this;
		let { results, showModal, movie, template, videos, videoCustomProperties, videoCustomClasses, videoCustomStyles  } = this.state;
		// let iframeSrc = 'https://www.youtube.com/embed/' + movie.key + '?rel=0';

		/*
		let html;

		if(results.length === 0){
			html = (
				<span>
					No results!
				</span>
			)
		}else{
			html = results.map(function(obj){

				//obj.id
				//obj.key
				//obj.name
				//obj.site
				//obj.size

				let imgSrc = 'https://img.youtube.com/vi/'+obj.key+'/hqdefault.jpg';

				return (
					<div key={obj.id} className={"video-thumbnail col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3"} onClick={()=>{
						self.doShowModal(obj);
					}}>
						<img src={imgSrc} />

						<h4>{obj.name}</h4>
					</div>
				)
			});
		}
		*/

		return (
			<div className={"pt-3 pb-3"}>
				<h2 className={"card-header mb-3"}>
					Videos
				</h2>
				<div className={"row"}>
					{/*{html}*/}

					<CarouselController
						carouselId={"videoCarousel"}
						slides={videos}
						items={videos}
						itemsPerSlide={4}
						template={"video"}
						customProperties={videoCustomProperties}
						customClasses={videoCustomClasses}
						customStyles={videoCustomStyles}>
					</CarouselController>

					{/*
					<ModalController modalId={"id"} header={"some header"} show={showModal} close={"Close"} onClose={self.doHideModal}>
						<div className="embed-responsive embed-responsive-16by9 mb-2">
							<iframe src={iframeSrc} width={'100%'} height={'100px'} frameBorder={'0'} allow={"encrypted-media"} />
						</div>
					</ModalController>
					*/}
				</div>
			</div>
		);
	}
}

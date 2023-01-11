import React from 'react';
import {CarouselPrevNext} from "modules/carousel/CarouselPrevNext";
import {CarouselSlides} from "modules/carousel/CarouselSlides";
import {BreakpointService} from "BreakpointService";
import {ModalController} from "ModalModule";

export class CarouselController extends React.Component {

	constructor() {
		super();
		this.state = {
			currentBreakpoint : '',

			slides : [],
			currentSlide : 0,
			template : 'default',
			carouselHeight : 0,

			showModal: false,
			video : {},
			image : {}
		}
		this.localHeight = 0;
		this.originalItemsPerSlide = 0;

		this.b = new BreakpointService();
		this.b.init({
			onChange : this.handleOnChange
		});

	}
	// my methods

	buildCarouselGuts(nextProps){

		let { itemsPerSlide, slides } = nextProps;

		let carousel = [];

		let cnt = 0;
		let arr = [];

		slides.forEach((itm, idx)=>{
			cnt++;
			arr.push(slides[idx]);

			// set empty placeholders only for last slide
			if(idx === slides.length-1){
				for(let j=0; j<itemsPerSlide-cnt; j++){
					arr.push({
						id : (Math.floor(Math.random() * 10000) + new Date().getTime()),
						src : null
					});
				}
			}

			// set array of array (the array of images for each slide of images)
			if(cnt === itemsPerSlide || idx === slides.length-1){
				cnt = 0;
				carousel.push(arr);
				arr = [];
			}
		});

		this.setState({
			slides : carousel
		});

	}

	handleOnChange(breakpoint){

		let { currentBreakpoint } = this.state;
		let update = {
			carouselHeight : 0
		};
		if(currentBreakpoint !== breakpoint){
			update.currentBreakpoint = breakpoint;
			update.currentSlide = 0;
		}

		this.localHeight = 0;
		this.setState(update);
	}

	// controls

	doPrev(){
		let { currentSlide, slides } = this.state;
		if(currentSlide !== 0){
			this.setState({
				currentSlide : currentSlide-1
			});
		}
	}

	doNext(){
		let { currentSlide, slides } = this.state;
		if(slides.length-1 !== currentSlide){
			this.setState({
				currentSlide : currentSlide+1
			});
		}
	}

	// helpers

	imageLoaded(){

	}

	doGetSlideHeight(){
		return this.localHeight;
	}

	doSetSlideHeight(height){
		// console.log('doSetSlideHeight');

		if(this.localHeight < height){
			this.localHeight = height;
			this.setState({
				carouselHeight : height
			});
		}
	}

	doOpenImage(obj){
		console.log('CarouselController doOpenImage', obj);
		this.setState({
			showModal: true,
			image : obj
		});
	}

	doOpenVideo(obj){
		// console.log('CarouselController doOpenVideo', obj);
		this.setState({
			showModal: true,
			video : obj
		});
	}

	// react methods

	componentWillReceiveProps(nextProps) {
		// console.log('component will receive props', nextProps);
		// let { items, itemsPerSlide } = this.props;
		this.setState(nextProps);
		this.buildCarouselGuts(nextProps);
	}

	componentDidUpdate(){
		// console.log('CarouselController component did update');
	}

	doHideModal(){
		// console.log('doHideModal');
		this.setState({
			showModal : false,
			video : {},
			image : {}
		});
	}

	// shouldComponentUpdate(nextProps, nextState){
	//
	// 	let { video } = this.state;
	//
	// 	return typeof video.id === 'undefined' || nextState.video.id !== video.id;
	//
	// },
	//
	render(){

		let self = this;
		let { carouselId, slides, currentSlide, template, carouselHeight,
				showModal, video, image} = this.state;

		let helpers = {
			handleOnChange : this.handleOnChange,
			doGetSlideHeight : this.doGetSlideHeight,
			doSetSlideHeight : this.doSetSlideHeight,
			doOpenImage : this.doOpenImage,
			doOpenVideo : this.doOpenVideo
		};


		// modal
		let modalHeader = '';
		if(typeof video.iFrameSrc !== 'undefined'){
			modalHeader = video.name;
		}
		if(typeof image.src !== 'undefined'){
			modalHeader = image.id;
		}

		return (

			<div>

				<div className={"carousel"}>

					<CarouselPrevNext
						doPrev={this.doPrev}
						doNext={this.doNext}
						slides={slides}
						currentSlide={currentSlide}>
					</CarouselPrevNext>

					<CarouselSlides
						slides={slides}
						currentSlide={currentSlide}
						helpers={helpers}
						template={template}
						carouselHeight={carouselHeight}>
					</CarouselSlides>

				</div>

				<ModalController modalId={carouselId + "-" + "modal"} header={modalHeader} show={showModal} close={"Close"} onClose={self.doHideModal}>

					{typeof video.iFrameSrc !== 'undefined' &&
						<div className="embed-responsive embed-responsive-16by9 mb-2">
							<iframe src={video.iFrameSrc} width={'100%'} height={'100px'} frameBorder={'0'} allow={"encrypted-media"} />
						</div>
					}

					{typeof image.src !== 'undefined' &&
						<img src={image.srcLg} />
					}

					{typeof image.media !== 'undefined' &&
						<div className={"mt-3"}>
							{image.media.overview}
						</div>
					}

				</ModalController>

			</div>


		)
	}
}

let React = require('react');

let CarouselPrevNext = require('./CarouselPrevNext');
let CarouselSlides = require('./CarouselSlides');
let BreakpointService = require('BreakpointService');

let ModalController = require('../modal/ModalController');

let CarouselController = React.createClass({
	
	// my methods
	
	localHeight : 0,
	
	buildCarouselGuts: function(nextProps){
		
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
		
	},
	
	handleOnChange: function(){
		// console.log('handleOnChange');
		this.localHeight = 0;
		this.setState({
			carouselHeight : 0
		});
	},
	
	// controls
	
	doPrev: function(){
		let { currentSlide, slides } = this.state;
		if(currentSlide !== 0){
			this.setState({
				currentSlide : currentSlide-1
			});
		}
	},
	
	doNext: function(){
		let { currentSlide, slides } = this.state;
		if(slides.length-1 !== currentSlide){
			this.setState({
				currentSlide : currentSlide+1
			});
		}
	},
	
	// helpers
	
	imageLoaded: function(){
	
	},
	
	doGetSlideHeight: function(){
		return this.localHeight;
	},
	
	doSetSlideHeight: function(height){
		// console.log('doSetSlideHeight');
		
		if(this.localHeight < height){
			this.localHeight = height;
			this.setState({
				carouselHeight : height
			});
		}
	},
	
	doOpenImage: function(obj){
		console.log('doOpenImage', obj);
	},
	
	doOpenVideo: function(obj){
		// console.log('doOpenVideo', obj);
		this.setState({
			showModal: true,
			video : obj
		});
	},
	
	// react methods
	
	getInitialState: function (){
		return {
			slides : [],
			currentSlide : 0,
			template : 'default',
			carouselHeight : 0,
			
			showModal: false,
			video : {},
			image : {}
		}
	},
	
	getDefaultProps: function(){
		return {
			// items: [],
			slides: [],
			itemsPerSlide: 6,
			template : 'default'
		}
	},
	
	componentWillReceiveProps: function(nextProps) {
		// console.log('component will receive props', nextProps);
		// let { items, itemsPerSlide } = this.props;
		this.setState(nextProps);
		this.buildCarouselGuts(nextProps);
	},
	
	componentDidMount: function(){
		let b = new BreakpointService();
		b.init({
			onChange : this.handleOnChange
		});
	},
	
	componentDidUpdate: function(){
		// console.log('CarouselController component did update');
	},
	
	doHideModal: function(){
		// console.log('doHideModal');
		this.setState({
			video : {},
			showModal : false
		});
	},
	
	// shouldComponentUpdate: function(nextProps, nextState){
	//
	// 	let { video } = this.state;
	//
	// 	return typeof video.id === 'undefined' || nextState.video.id !== video.id;
	//
	// },
	//
	render: function(){
		
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
		
		// console.log('render', video);
		
		// console.log('render state for ', carouselId,  slides);
		
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
				
				<ModalController modalId={carouselId + "-" + "modal"} header={video.name} show={showModal} close={"Close"} onClose={self.doHideModal}>
					<div className="embed-responsive embed-responsive-16by9 mb-2">
						<iframe src={video.iFrameSrc} width={'100%'} height={'100px'} frameBorder={'0'} allow={"encrypted-media"} />
					</div>
				</ModalController>
				
			</div>
			
			
		)
	}
});

module.exports = CarouselController;
import React from 'react';
import * as ReactDOM from 'react-dom';
import {CarouselSlide} from "modules/carousel/CarouselSlide";
import {BreakpointService} from "BreakpointService";
/*

list = []
items per slide = xs : 2, sm: 2, md: 4, lg: 6, xl: 6 (or whatever is set)


 */

// TODO: loop each .carousel-item and find out the height, set the height to each based on the highest height

export class CarouselController extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			carouselId : '',
			carouselWidth : 0,
			carouselHeight : 0,
			carouselSlideWidth : 0,
			carouselSlideHeight : 0,
			carouselSlidePaddingLeft : 0,
			carouselSlidePaddingRight : 0,

			items : [],
			itemsPerSlide : 6,
			carousel : [
				// {
				// 	items : []
				// }
			],

			// custom
			customProperties: [],
			customClasses: {},
			customStyles : {}
		}
		// carouselId : 'carousel-' + ( Math.floor(Math.random() * 1000) + new Date().getTime() ),
		this.breakpointService = new BreakpointService();
		this.carouselHeight = 0; // might store here
	}

	// My Methods




	slideWasRendered(x){
		// console.log('slide was rendered:', x);
		let c = $('#' + this.props.carouselId);
		let h = 0;
		let w = 0;
		c.find('.carousel-item').each(function(){
			if(h < $(this).height()){
				h = $(this).height();
			}
			if(w < $(this).width()){
				w = $(this).width();
			}
		});

		w = w - c.find('.carousel-control-prev').width() - c.find('.carousel-control-next').width();

		// console.log('h w', h, w);

		let update = {
		};

		if(h > 0){
			update.carouselHeight = h;
			update.carouselSlideHeight = h;
		}

		if(w > 0){
			update.carouselWidth = w;
			update.carouselSlideWidth = w;
		}

		if(update.hasOwnProperty('carouselHeight') || update.hasOwnProperty('carouselWidth')){
			this.setState(update);
		}

	}

	handleBreakpointChange(breakpoint){
		// console.log('CarouselController handleBreakpointChange');

		// let el = $(ReactDOM.findDOMNode(this));
		// // this.setState({
		// // 	carouselWidth : el.width()
		// // });
		//
		// let { carouselId } = this.state; //this.props;
		// let carousel = $('#' + carouselId);
		// let prev = carousel.find('.carousel-control-prev');
		// let next = carousel.find('.carousel-control-next');
		// let carouselWidth = carousel.outerWidth();
		// let carouselHeight = carousel.height();
		// let carouselSlideWidth = carousel.outerWidth(); // - prev.outerWidth() - next.outerWidth();
		//
		// // this.carouselHeight = carousel.height();
		//
		// this.setState({
		// 	carouselWidth : carouselWidth,
		// 	carouselHeight : carouselHeight,
		// 	carouselSlideWidth : carouselSlideWidth,
		// 	carouselSlidePaddingLeft : prev.outerWidth(),
		// 	carouselSlidePaddingRight : next.outerWidth()
		// });

	}

	buildCarouselGuts(nextProps){

		let { itemsPerSlide, items } = nextProps;

		let carousel = [];

		let cnt = 0;
		let arr = [];

		items.forEach((itm, idx)=>{
			cnt++;
			arr.push(items[idx]);

			// set empty placeholders only for last slide
			if(idx === items.length-1){
				for(let j=0; j<itemsPerSlide-cnt; j++){
					arr.push({
						id : (Math.floor(Math.random() * 10000) + new Date().getTime()),
						src : null
					});
				}
			}

			// set array of array (the array of images for each slide of images)
			if(cnt === itemsPerSlide || idx === items.length-1){
				cnt = 0;
				carousel.push(arr);
				arr = [];
			}
		});

		this.setState({
			items : carousel
		});

	}

	slideMounted(height){
		// console.log('do nothing here');
	}

	slideItemMounted(height){

		// this.handleBreakpointChange();
		//
		// let { carouselSlideHeight, carouselId } = this.state;
		// let c = $('#' + carouselId);
		// let h = 0;
		// c.find('.carousel-item').each(function(){
		// 	h = $(this).height() > 0 ? $(this).height() : h;
		// });
		//
		// this.setState({
		// 	carouselSlideHeight : h
		// });
		// this.carouselHeight = h;

		// console.log('h', h);

		/*

		let { carouselSlideHeight, carouselId } = this.state;
		// let { carouselId } = this.props;

		let el = $(ReactDOM.findDOMNode(this));
		let c = $('#' + carouselId);

		// only update the carousel height if necessary
		if(this.carouselHeight < c.height()){
			this.carouselHeight = c.height()
		}

		// set state so component updates
		this.setState({
			settingState : Math.random()
		});

		console.log('slideItemMounted', height, c.height());
		*/
	}

	// renderCarouselSlides(arr){
	// 	let self = this;
	// 	let { carouselWidth } = this.state;
	// 	let carouselWidthCss = {
	// 		width : carouselWidth
	// 	};
	//
	// 	return arr.map(function(innerArr, idx){
	//
	// 		let thisClass = "carousel-item";
	// 			thisClass += idx === 0 ? ' active' : '';
	//
	// 		return (
	// 			<div key={idx} className={thisClass} style={carouselWidthCss}>
	// 				<div className={"row"}>
	// 					{self.renderCarouselSlideItems(innerArr)}
	// 				</div>
	// 			</div>
	// 		)
	// 	});
	// },
	//
	// renderCarouselSlideItems(arr){
	// 	return arr.map(function(obj){
	// 		return (
	// 			<div key={obj.id} className={"col"}>
	// 				<div className={"text-center"}>
	// 					 {obj.id}
	// 				</div>
	// 				<img src="https://image.tmdb.org/t/p/w300//sdibVacEUaYcM41zmepM0J2xNqq.jpg" />
	// 			</div>
	// 		)
	// 	});
	// },
	//
	// renderCarousel(carousel){
	// 	return this.renderCarouselSlides(carousel);
	// },

	// React Methods

	componentWillReceiveProps(nextProps){
		// console.log('CarouselController componentWillReceiveProps', nextProps);
		this.setState(nextProps);
		this.buildCarouselGuts(nextProps);
	}

	componentWillMount(){

	}

	componentDidMount(){
		this.breakpointService.init({
			onChange : this.handleBreakpointChange
		});
	}

	componentDidUpdate(prevProps, prevState){
		console.log('carousel did update');
	}

	shouldComponentUpdate(nextProps, nextState){
		// console.log('CarouselController shouldComponentUpdate', nextProps);
		// console.log('CarouselController shouldComponentUpdate', nextState);
		// console.log('test', nextProps.items === this.props.items);
		// return nextProps !== this.props.items && nextProps.items.length !== 0;

		// console.log('compare props', this.props);
		// console.log('compare props', nextProps);
		//
		// console.log('compare state', this.state);
		// console.log('compare state', nextState);

		let { carouselHeight, carouselWidth } = this.state;
		let { items } = this.props;
		// let { carousel } = this.props;

		// console.log('carouselHeight', carouselHeight);
		// console.log('carouselWidth', carouselWidth);
		// console.log('items.length', items.length);

		console.log('carouselHeight', carouselHeight, nextState.carouselHeight, carouselHeight === 0 || carouselHeight !== nextState.carouselHeight);

		return carouselHeight === 0 || carouselHeight !== nextState.carouselHeight;

		// return false;

		// if(carouselHeight !== nextState.carouselHeight){
		// 	return true;
		// }else if(carouselWidth !== nextState.carouselWidth){
		// 	return true;
		// }else if(items.length > 0){
		// 	return true;
		// }else{
		// 	return false;
		// }
		//

	}

	render(){



		let self = this;
		let { items, carouselId, itemsPerSlide, carouselWidth, carouselHeight,
			carouselSlideWidth, carouselSlideHeight, carouselSlidePaddingLeft, carouselSlidePaddingRight,
			customProperties, customClasses, customStyles } = this.state;

		console.log('render carousel', carouselHeight, carouselSlideHeight, carouselWidth, carouselSlideWidth);

		// let { carouselId } = this.props;
		// let html = this.renderCarousel(carousel);

		let carouselStyles = {};


		if(carouselHeight !== 0){
			carouselStyles.height = carouselHeight
		}

		if(carouselWidth !== 0){
			carouselStyles.width = carouselWidth;
		}

		return (

				<div id={carouselId} className="carousel slide" data-ride="carousel" data-wrap="false" data-keyboard="true" style={carouselStyles}>
					<div className="carousel-inner">
						{items.map(function(slideItems, idx){
							return (
								<CarouselSlide
									key={'CarouselSlide-' + idx}
									carouselId={self.carouselId}
									carouselWidth={carouselWidth}
									carouselSlideWidth={carouselSlideWidth}
									carouselSlidePaddingLeft={carouselSlidePaddingLeft}
									carouselSlidePaddingRight={carouselSlidePaddingRight}
									carouselSlideHeight={carouselSlideHeight}
									slideMounted={self.slideMounted}
									slideItemMounted={self.slideItemMounted}
									slideWasRendered={self.slideWasRendered}
									items={slideItems}
									itemsPerSlide={itemsPerSlide}
									carouselSlideIdx={idx}
									customProperties={customProperties}
									customClasses={customClasses}
									customStyles={customStyles} />
							)
						})}
					</div>
					<a className="carousel-control-prev" href={"#" + carouselId} role="button" data-slide="prev">
						<span className="carousel-control-prev-icon-off fa fa-chevron-left fa-2x text-dark" aria-hidden="true">
						</span>
						<span className="sr-only">Previous</span>
					</a>
					<a className="carousel-control-next" href={"#" + carouselId} role="button" data-slide="next">
						<span className="carousel-control-next-icon-off fa fa-chevron-right fa-2x text-dark" aria-hidden="true">
						</span>
						<span className="sr-only">Next</span>
					</a>
				</div>

		)
	}

}

CarouselController.defaultProps = {
	carouselId : '',
	items : [],
	itemsPerSlide: 6,

	// custom
	customProperties: [],
	customClasses: {},
	customStyles : {}
}

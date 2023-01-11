import React from 'react';
import * as ReactDOM from 'react-dom';
import {CarouselSlideItems} from "modules/carousel/CarouselSlideItems";
import {BreakpointService} from "BreakpointService";

export class CarouselSlide extends React.Component {

	handleSlideOnChange(){
		// console.log('handleSlideOnChange');
		this.doMeasureSlide();
	}

	doMeasureSlide(){
		// console.log('doMeasureSlide');
		let { helpers } = this.props;
		let c = ReactDOM.findDOMNode(this);
		let h = c.offsetHeight;
		let currentHeight = helpers.doGetSlideHeight();
		// console.log('h', h, currentHeight);
		if(h>currentHeight){
			// console.log('setting height', h, currentHeight);
			helpers.doSetSlideHeight(h);
		}else{
			// console.log('not setting height', h, currentHeight);
		}
		// console.log('c', c.offsetHeight);
	}

	componentWillMount(){
		// console.log('CarouselSlide will mount');
	}

	componentDidMount(){
		// console.log('CarouselSlide did mount');
		// let c = ReactDOM.findDOMNode(this);
		// console.log('c', c.offsetHeight);
		let b = new BreakpointService();
		b.init({
			onChange : this.handleSlideOnChange
		});
	}

	render(){

		let { slide, slideIdx, currentSlide, helpers, template, carouselHeight } = this.props;

		let slideClass =  currentSlide   === slideIdx ? 'active'
						: currentSlide-1 === slideIdx ? 'prev'
						: currentSlide+1 === slideIdx ? 'next'
						: currentSlide > slideIdx ? 'left'
						: currentSlide < slideIdx ? 'right'
						// : currentSlide-2 === slideIdx ? 'left'
						// : currentSlide+2 === slideIdx ? 'right'
						: '';

		let doMeasureSlide = this.doMeasureSlide;

		let slideStyles = {};
		if(carouselHeight > 0){
			slideStyles.height = carouselHeight;
		}

		return (
			<div className={"carousel-slide " + slideClass} id={'slide-' + slideIdx} style={slideStyles}>
				<CarouselSlideItems key={'slideItems-' + slideIdx} slideItems={slide} helpers={helpers} template={template} doMeasureSlide={doMeasureSlide} />
			</div>
		)
	}

}

CarouselSlide.defaultProps = {
	slide: [],
	slideIdx: -1,
	currentSlide : 0,
	helpers : {
		handleOnChange (){
			console.error('handleOnChange was not included????')
		}
	},
	template : 'default',
	carouselHeight : 0,
}

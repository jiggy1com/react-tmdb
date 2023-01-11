import React from 'react';
import * as ReactDOM from 'react-dom';
import {CarouselSlideItem} from "modules/carousel/CarouselSlideItem";

export class CarouselSlide extends React.Component {

	itemWasRendered(x){
		console.log('item was rendered:', x);
		this.props.slideWasRendered(x);
	}

	shouldComponentUpdate(nextProps, nextState){
		let { items, carouselHeight, carouselSlideHeight } = this.props;
		console.warn('shouldcomponentupdate', nextProps);
		return false;
	}

	render(){

		// console.log('render slide');

		let self = this;

		let { items, itemsPerSlide, carouselSlideIdx,
			carouselSlideWidth, carouselSlideHeight, carouselSlidePaddingLeft, carouselSlidePaddingRight,
			customProperties, customClasses, customStyles } = this.props; //this.props;

		let { slideItemMounted } = this.props;

		// console.log('render items', items);



		let carouselSlideStyle = {};

		if(carouselSlideWidth !== 0){
			carouselSlideStyle.width = carouselSlideWidth;
		}

		if(carouselSlideHeight !== 0){
			carouselSlideStyle.height = carouselSlideHeight;
			carouselSlideStyle.minHeight = carouselSlideHeight;
		}

		if(carouselSlidePaddingLeft !== 0){
			carouselSlideStyle.paddingLeft = carouselSlidePaddingLeft;
		}

		if(carouselSlidePaddingRight !== 0){
			carouselSlideStyle.paddingRight = carouselSlidePaddingRight;
		}

		if(items.length > 0){

			let thisClass = 'carousel-item';
				thisClass += carouselSlideIdx === 0 ? ' active' : '';

			return (
				<div className={thisClass} style={carouselSlideStyle} key={'CarouselSlideGuts-' + carouselSlideIdx}>
					<div className={"row"}>
						{items.map(function(obj, itemIdx){
							return (

								<CarouselSlideItem
									key={'CarouselSlide-' + carouselSlideIdx + '-' + itemIdx}
									obj={obj}
									carouselSlideIdx={carouselSlideIdx}
									carouselSlideItemIdx={itemIdx}
									itemsPerSlide={itemsPerSlide}
									customProperties={customProperties}
									customClasses={customClasses}
									customStyles={customStyles}
									slideItemMounted={slideItemMounted}
									itemWasRendered={self.itemWasRendered}/>

							)
						})}
					</div>
				</div>
			)

		}else{
			return (
				<div>

				</div>
			)
		}
	}

}

CarouselSlide.defaultProps = {
	carouselId : '',
	carouselWidth : 0,
	carouselHeight : 0,
	carouselSlideWidth : 0,
	carouselSlideHeight : 0,
	carouselSlidePaddingLeft : 0,
	carouselSlidePaddingRight : 0,
	slideWasRendered(){
		console.warn('did not set slideWasRendered in slide');
	},
	slideMounted (){
		console.warn('did not set slideMounted in slide');
	},
	slideItemMounted(){
		console.warn('did not set slideItemMounted in slide');
	},
	items : [],
	itemsPerSlide : 0,
	carouselSlideIdx : -1,

	// custom
	customProperties: [],
	customClasses: {},
	customStyles: {}
}

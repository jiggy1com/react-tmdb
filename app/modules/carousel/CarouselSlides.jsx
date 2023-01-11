import React from 'react';
import * as ReactDOM from 'react-dom';
import {CarouselSlide} from "modules/carousel/CarouselSlide";
export class CarouselSlides extends React.Component {

	render() {

		let { slides, currentSlide, helpers, template, carouselHeight } = this.props;

		return (
			<div className={"carousel-slides"} ref="slide">
				{slides.length > 0 && slides.map(function (slide, slideIdx) {
					return (
						<CarouselSlide
							key={'slide-' + slideIdx}
							currentSlide={currentSlide}
							slide={slide}
							slideIdx={slideIdx}
							helpers={helpers}
							template={template}
							carouselHeight={carouselHeight}>
						</CarouselSlide>
					)
				})}
			</div>

		);

	}

}

CarouselSlides.defaultProps = {
	currentSlide: 0,
	helpers: {},
	template : 'default',
	carouselHeight : 0
}

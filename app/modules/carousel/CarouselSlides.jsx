let React = require('react');
let ReactDOM = require('react-dom');

let CarouselSlide = require('./CarouselSlide');

let CarouselSlides = React.createClass({
	
	getDefaultProps: function(){
		return {
			currentSlide: 0,
			helpers: {},
			template : 'default',
			carouselHeight : 0
		}
	},
	
	render: function() {
		
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
	
	
});

module.exports = CarouselSlides;
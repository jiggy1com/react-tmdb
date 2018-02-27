let React = require('react');

let CarouselPrevNext = React.createClass({
	
	getDefaultProps: function(){
		return {
			slides: [],
			currentSlide: 0,
			doPrev: function(){
				console.error('did not pass in doPrev');
			},
			doNext: function(){
				console.error('did not pass in doNext');
			}
		}
	},
	
	render: function(){
		
		let { slides, currentSlide, doPrev, doNext } = this.props;
		
		let prevNextClass = 'text-muted';
		let prevClass = currentSlide === 0 ? 'disabled' : 'text-dark';
		let nextClass = currentSlide === slides.length-1 && slides.length > 0 ? 'disabled' : 'text-dark';
		
		return (
			<div className={"carousel-prev-next col-12 mb-2 " + prevNextClass}>
				<div className={"text-right"}>
					<span className={"fa fa-chevron-circle-left fa-2x mr-1 " + prevClass} onClick={doPrev}>
					</span>
					<span className={"fa fa-chevron-circle-right fa-2x " + nextClass} onClick={doNext}>
					</span>
				</div>
			</div>
		)
	}
	
});

module.exports = CarouselPrevNext;
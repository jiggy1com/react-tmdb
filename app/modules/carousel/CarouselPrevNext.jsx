import React from 'react';

export class CarouselPrevNext extends React.Component {

	render(){

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

}

CarouselPrevNext.defaultProps = {
	slides: [],
	currentSlide: 0,
	doPrev(){
		console.error('did not pass in doPrev');
	},
	doNext(){
		console.error('did not pass in doNext');
	}
}

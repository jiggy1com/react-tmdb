let React = require('react');
let ReactDOM = require('react-dom');
let CarouselSlideItems = require('./CarouselSlideItems');
let BreakpointService = require('BreakpointService');

let CarouselSlide = React.createClass({
	
	handleSlideOnChange: function(){
		// console.log('handleSlideOnChange');
		this.doMeasureSlide();
	},
	
	doMeasureSlide: function(){
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
	},
	
	getDefaultProps: function(){
		return {
			slide: [],
			slideIdx: -1,
			currentSlide : 0,
			helpers : {
				handleOnChange : function(){
					console.error('handleOnChange was not included????')
				}
			},
			template : 'default',
			carouselHeight : 0,
			
		}
	},
	
	componentWillMount: function(){
		// console.log('CarouselSlide will mount');
	},
	
	componentDidMount: function(){
		// console.log('CarouselSlide did mount');
		// let c = ReactDOM.findDOMNode(this);
		// console.log('c', c.offsetHeight);
		let b = new BreakpointService();
		b.init({
			onChange : this.handleSlideOnChange
		});
	},
	
	render: function(){
		
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
	
});

module.exports = CarouselSlide;
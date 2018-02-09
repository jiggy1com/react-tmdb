let React = require('react');

let CarouselSlideItem = require('./CarouselSlideItem');

let CarouselSlideItems = React.createClass({
	
	getDefaultProps: function(){
		return {
			slideItems : [],
			helpers : {},
			template : 'default',
			doMeasureSlide : null
		}
	},
	
	render: function(){
		
		let { slideItems, helpers, template, doMeasureSlide } = this.props;
		
		return (
			<div className={"carousel-slideItems"}>
				<div className={"row"}>
					{slideItems.map(function(slideItem, slideItemIdx){
						return(
							<CarouselSlideItem key={slideItemIdx} slideItem={slideItem} helpers={helpers} template={template} doMeasureSlide={doMeasureSlide} />
						)
					})}
				</div>
			</div>
		)
	}
	
});

module.exports = CarouselSlideItems;
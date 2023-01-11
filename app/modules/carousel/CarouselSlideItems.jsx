import React from 'react';

import {CarouselSlideItem} from "modules/carousel/CarouselSlideItem";

export class CarouselSlideItems extends React.Component {

	render(){

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

}

CarouselSlideItems.defaultProps = {
	slideItems : [],
	helpers : {},
	template : 'default',
	doMeasureSlide : null
}

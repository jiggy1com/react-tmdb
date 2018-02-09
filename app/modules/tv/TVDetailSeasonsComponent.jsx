let React = require('react');

import { CarouselController } from 'CarouselModule';

let TVDetailSeasonsComponent = React.createClass({
	
	generateCarousel: function(data, showName){
		
		let arr = data.map(function(obj, idx){
			
			let folder = 'w185';
			let src = 'https://image.tmdb.org/t/p/' + folder + obj.poster_path;
			let href = '#/seasons/' + showName + '/season/' + obj.season_number + '/' + obj.id;
			
			return {
				id : obj.id,
				src : src,
				href : href,
				episodes : obj.episode_count,
				airDate : new Date(obj.air_date),
				season : obj.season_number
			};
		});
		
		let update = {
			seasonsSlides : arr
		};
		
		this.setState(update);
		
	},
	
	getInitialState: function(){
		return {
			seasonsSlides : []
		}
	},
	
	componentWillReceiveProps: function(nextProps){
		
		if(nextProps.seasons.length > 0){
			this.generateCarousel(nextProps.seasons, nextProps.showName);
		}
		
	},
	
	// shouldComponentUpdate: function(){
	// 	return true;
	// },
	
	render: function(){
		
		let { seasonsSlides } = this.state;
		
		return (
			<div id={"tv-credits"} className={"mb-5"}>
				
				<div className={"row mb-3"}>
					<div className={"col-12"}>
						<h2 className={"card-header"}>Seasons</h2>
					</div>
				</div>
				
				<div className={"row mb-5"}>
					<div className={"col-12"}>
						<CarouselController
							carouselId={"seasonsCarousel"}
							slides={seasonsSlides}
							itemsPerSlide={6}
							template={"season"}>
						</CarouselController>
					</div>
				</div>
				
			</div>
		)
	}
	
});

module.exports = TVDetailSeasonsComponent;
let React = require('react');
let hyphenate = require('Hyphenate');

import { CarouselController } from 'CarouselModule';

let TVDetailCreditsComponent = React.createClass({
	
	generateCarousel: function(data, dataType){
		
		let arr = data.map(function(obj, idx){
			
			let folder = dataType === 'castSlides' ? 'w185' : 'w185';
			let folderLg = dataType === 'castSlides' ? 'h632' : 'h632';
			
			let src = 'https://image.tmdb.org/t/p/' + folder + obj.profile_path;
			let srcLg = 'https://image.tmdb.org/t/p/' + folderLg + obj.profile_path;
			let href = '#/person/' + hyphenate.hyphenateAndLowercase(obj.name) + '/' + obj.id;
			
			return {
				id : obj.file_path,
				src : src,
				srcLg : srcLg,
				href : href,
				name : obj.name,
				character : obj.character,
				job: obj.job
			};
		});
		
		let update = {};
		
		if(dataType === 'castSlides'){
			update.castSlides =  arr;
		}
		
		if(dataType === 'crewSlides'){
			update.crewSlides = arr;
		}
		
		this.setState(update);
		
	},
	
	renderPosters: function(){
		let { images } = this.props;
		let posters = images.posters;
		
		if(posters.length === 0){
			return null
		}else{
			return (
				posters.map(function(obj){
					let src = '//image.tmdb.org/t/p/' + 'w185' + obj.file_path;
					return (
						<div className={"col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 mb-3"}>
							<img src={src} />
						</div>
					)
				})
			)
		}
	},
	
	renderBackdrops: function(){
		
		let { images } = this.props;
		let backdrops = images.backdrops;
		
		if(backdrops.length === 0){
			return null
		}else{
			return (
				backdrops.map(function(obj){
					let src = '//image.tmdb.org/t/p/' + 'w300' + obj.file_path;
					return (
						<div className={"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3"}>
							<img src={src} />
						</div>
					)
				})
			)
		}
		
	},
	
	componentWillReceiveProps: function(nextProps){
		
		if(nextProps.credits.cast.length > 0){
			this.generateCarousel(nextProps.credits.cast, 'castSlides');
			
		}
		
		if(nextProps.credits.crew.length > 0){
			this.generateCarousel(nextProps.credits.crew, 'crewSlides');
		}
		
	},
	
	getInitialState: function(){
		return {
			castSlides: [],
			crewSlides: []
		}
	},
	
	render: function(){
		
		let { castSlides, crewSlides } = this.state;
		
		return (
			<div id={"tv-credits"}>
				
				<div className={"row mb-3"}>
					<div className={"col-12"}>
						<h2 className={"card-header"}>Cast</h2>
					</div>
				</div>
				
				<div className={"row mb-5"}>
					<div className={"col-12"}>
						<CarouselController
							carouselId={"castCarousel"}
							slides={castSlides}
							itemsPerSlide={6}
							template={"cast"}>
						</CarouselController>
					</div>
				</div>
				
				<div className={"row mb-3"}>
					<div className={"col-12"}>
						<h2 className={"card-header"}>Crew</h2>
					</div>
				</div>
				
				<div className={"row"}>
					<div className={"col-12"}>
						<CarouselController
							carouselId={"crewCarousel"}
							slides={crewSlides}
							itemsPerSlide={6}
							template={"crew"}>
						</CarouselController>
					</div>
				</div>
			
			</div>
		)
	}
	
});

module.exports = TVDetailCreditsComponent;
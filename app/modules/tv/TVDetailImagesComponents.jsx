let React = require('react');

import { CarouselController } from 'CarouselModule';

let TVDetailImagesComponents = React.createClass({
	
	generateCarousel: function(data, dataType){
		
		let arr = data.map(function(obj, idx){
			
			let folder = dataType === 'postersSlides' ? 'w185' : 'w300';
			let folderLg = dataType === 'postersSlides' ? 'w780' : 'w1280';
			
			let src = 'https://image.tmdb.org/t/p/' + folder + obj.file_path;
			let srcLg = 'https://image.tmdb.org/t/p/' + folderLg + obj.file_path;
			
			return {
				id : obj.file_path,
				src : src,
				srcLg : srcLg
			};
		});
		
		let update = {};
		
		if(dataType === 'backdropsSlides'){
			update.backdropsSlides =  arr;
		}
		
		if(dataType === 'postersSlides'){
			update.postersSlides = arr;
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
		
		if(nextProps.images.posters.length > 0){
			this.generateCarousel(nextProps.images.posters, 'postersSlides');
			
		}
		
		if(nextProps.images.backdrops.length > 0){
			this.generateCarousel(nextProps.images.backdrops, 'backdropsSlides');
		}
		
	},
	
	getInitialState: function(){
		return {
			postersSlides: [],
			backdropsSlides: []
		}
	},
	
	render: function(){
		
		let { postersSlides, backdropsSlides } = this.state;
		
		console.log('postersSlides', postersSlides);
		
		return (
			<div id={"tv-created-by"}>
				
				<div className={"row mb-3"}>
					<div className={"col-12"}>
						<h2 className={"card-header"}>Posters</h2>
					</div>
				</div>
			
				<div className={"row mb-5"}>
					<div className={"col-12"}>
						<CarouselController
							carouselId={"postersCarousel"}
							slides={postersSlides}
							itemsPerSlide={6}
							template={"gallery"}>
						</CarouselController>
					</div>
				</div>
			
				<div className={"row mb-3"}>
					<div className={"col-12"}>
						<h2 className={"card-header"}>Backdrops</h2>
					</div>
				</div>
			
				<div className={"row"}>
					<div className={"col-12"}>
						<CarouselController
							carouselId={"backdropsCarousel"}
							slides={backdropsSlides}
							itemsPerSlide={4}
							template={"gallery"}>
						</CarouselController>
					</div>
				</div>
				
			</div>
		)
	}
	
});

module.exports = TVDetailImagesComponents;
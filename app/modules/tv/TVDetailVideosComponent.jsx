let React = require('react');

import { CarouselController } from 'CarouselModule';

let TVDetailVideosComponent = React.createClass({
	
	// my methods
	
	generateCarousel: function(data){
		
		console.log('data', data);
		
		let arr = data.map(function(obj, idx){
			let src = 'https://img.youtube.com/vi/'+obj.key+'/hqdefault.jpg';
			let iFrameSrc = 'https://www.youtube.com/embed/' + obj.key + '?rel=0';
			return {
				id : obj.id,
				src : src,
				iFrameSrc : iFrameSrc,
				// custom attributes
				name : obj.name
			};
		});
		
		this.setState({
			videos : arr,
			videoCustomProperties : ['name'],
			videoCustomClasses : {
				name: ['pt-1']
			},
			videoCustomStyles : {
				name : ''
			}
		});
		
	},
	
	// react methods
	
	getInitialState: function(){
		return {
			videos : [],
			videoCustomProperties: [],
			videoCustomClasses: {},
			videoCustomStyles: {}
		}
	},
	
	componentWillReceiveProps: function(nextProps){
		this.generateCarousel(nextProps.videos);
	},
	
	render: function(){
		
		let { videos, videoCustomProperties, videoCustomClasses, videoCustomStyles } = this.state;
		
		return (
			<div id={"tv-videos"}>
				
				<div className={"row mb-3"}>
					<div className={"col-12"}>
						<h2 className={"card-header"}>Videos</h2>
					</div>
				</div>
				
				<div className={"row mb-3"}>
					<div className={"col-12"}>
						<CarouselController
							carouselId={"videoCarousel"}
							slides={videos}
							items={videos}
							itemsPerSlide={4}
							template={"video"}
							customProperties={videoCustomProperties}
							customClasses={videoCustomClasses}
							customStyles={videoCustomStyles}>
						</CarouselController>
					</div>
				</div>
				
			</div>
		)
	}
	
});

module.exports = TVDetailVideosComponent;
import React from 'react';

import { CarouselController } from 'CarouselModule';

export class TVDetailVideosComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			videos : [],
			videoCustomProperties: [],
			videoCustomClasses: {},
			videoCustomStyles: {}
		}
	}


	// my methods

	generateCarousel(data){

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

	}

	// react methods


	componentWillReceiveProps(nextProps){
		this.generateCarousel(nextProps.videos);
	}

	render(){

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

}

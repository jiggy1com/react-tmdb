import React from 'react';
import { Link } from "react-router-dom";

export class CarouselSlideItem extends React.Component {

	constructor(props) {
		super(props);
	}

	// my methods

	openVideo(){
		let { slideItem, helpers } = this.props;
		helpers.doOpenVideo(slideItem);
	}

	openImage(){
		let { slideItem, helpers } = this.props;
		helpers.doOpenImage(slideItem);
	}

	onErrorComplete(e){

		// console.log('error', e.target.getAttribute('src'));
		e.target.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg');

		let { doMeasureSlide, helpers } = this.props;
		setTimeout(()=>{
			// console.log('onErrorComplete...');
			helpers.handleOnChange();
			doMeasureSlide();
		},1);
	}

	onLoadComplete(){
		let { doMeasureSlide, helpers } = this.props;
		setTimeout(()=>{
			// console.log('onLoadComplete...');
			helpers.handleOnChange();
			doMeasureSlide();
		},1);
	}

	// react methods

	render(){

		let self = this;
		let { slideItem, helpers, template, doMeasureSlide } = this.props;

		// if(slideItem.src){
		// 	let img = new Image();
		// 	img.onload = function(){
		// 		console.log('image', this.height);
		// 		doMeasureSlide();
		// 	};
		// 	img.src = slideItem.src;
		// }

		if(template === 'video'){
			// console.log('template video', slideItem);
		}

		// console.log('CarouselSlideItem slideItem', slideItem);

		return(
			<div className={"col"}>

				{template === 'cast' && (
					<div className={"template-cast"}>
						<Link to={slideItem.href}>
							<img src={slideItem.src}
								 onLoad={this.onLoadComplete.bind(this)}
								 onError={this.onErrorComplete.bind(this)}  />
						</Link>
						<div className={"pt-1"}>{slideItem.name}</div>
						<div className={"font-weight-bold"}>{slideItem.character}</div>
					</div>
				)}

				{template === 'crew' && (
					<div className={"template-crew"}>
						<Link to={slideItem.href}>
							<img src={slideItem.src}
								 onLoad={this.onLoadComplete.bind(this)}
								 onError={this.onErrorComplete.bind(this)} />
						</Link>
						<div className={"pt-1"}>{slideItem.name}</div>
						<div className={"font-weight-bold"}>{slideItem.job}</div>
					</div>
				)}

				{template === 'video' && (
					<div className={"template-video"}>
						<img src={slideItem.src}
							 onLoad={this.onLoadComplete.bind(this)}
							 onError={this.onErrorComplete.bind(this)}
							 onClick={this.openVideo.bind(this)} />
						<h4 className={"pt-1"}>{slideItem.name}</h4>
					</div>
				)}

				{template === 'gallery' && (
					<div className={"template-gallery"}>
						<img src={slideItem.src}
							 onLoad={this.onLoadComplete.bind(this)}
							 onError={this.onErrorComplete.bind(this)}
							 onClick={this.openImage.bind(this)} />
						{/*<div>*/}
							{/*<strong>{slideItem.voteAverage}</strong> rating based on {slideItem.voteCount} votes.*/}
						{/*</div>*/}
					</div>
				)}

				{template === 'season' && (
					<div className={"template-season"}>
						<Link to={slideItem.href}>
							<img src={slideItem.src}
								 onLoad={this.onLoadComplete.bind(this)}
								 onError={this.onErrorComplete.bind(this)} />
						</Link>
						<div>
							Season {slideItem.season}
						</div>
						<div>
							Episodes: {slideItem.episodes}
						</div>
					</div>
				)}

				{/* PERSON */}

				{template === 'images' && (
					<div className={"template-gallery"}>
						<img src={slideItem.src}
							 onLoad={this.onLoadComplete.bind(this)}
							 onError={this.onErrorComplete.bind(this)}
							 onClick={this.openImage.bind(this)} />
						<div>
							<strong>{slideItem.voteAverage}</strong>
							rating based on {slideItem.voteCount} votes.
						</div>
					</div>
				)}

				{template === 'tagged_images' && (
					<div className={"template-gallery"}>
						<img src={slideItem.src}
							 onLoad={this.onLoadComplete.bind(this)}
							 onError={this.onErrorComplete.bind(this)}
							 onClick={this.openImage.bind(this)} />
						<h4>
							{typeof slideItem.media !== 'undefined' && typeof slideItem.media.title !== 'undefined' &&
								<span>
									{slideItem.media.title}
								</span>
							}
						</h4>
						<div>
							<strong>{slideItem.voteAverage}</strong>
							rating based on {slideItem.voteCount} votes.
						</div>
					</div>
				)}

			</div>
		)

	}

}

CarouselSlideItem.defaultProps = {
	slideItem : {},
	helpers : {},
	template : 'default',
	doMeasureSlide : null
}

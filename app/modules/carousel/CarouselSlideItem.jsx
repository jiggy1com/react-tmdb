let React = require('react');

let CarouselSlideItem = React.createClass({
	
	// my methods
	
	openVideo: function(){
		let { slideItem, helpers } = this.props;
		helpers.doOpenVideo(slideItem);
	},
	
	openImage: function(){
		let { slideItem, helpers } = this.props;
		helpers.doOpenImage(slideItem);
	},
	
	onErrorComplete: function(e){
		
		// console.log('error', e.target.getAttribute('src'));
		e.target.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg');
		
		let { doMeasureSlide, helpers } = this.props;
		setTimeout(()=>{
			// console.log('onErrorComplete...');
			helpers.handleOnChange();
			doMeasureSlide();
		},1);
	},
	
	onLoadComplete: function(){
		let { doMeasureSlide, helpers } = this.props;
		setTimeout(()=>{
			// console.log('onLoadComplete...');
			helpers.handleOnChange();
			doMeasureSlide();
		},1);
	},
	
	// react methods
	
	getDefaultProps: function(){
		return {
			slideItem : {},
			helpers : {},
			template : 'default',
			doMeasureSlide : null
		}
	},
	
	render: function(){
		
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
		
		return(
			<div className={"col"}>
				
				{template === 'cast' && (
					<div className={"template-cast"}>
						<a href={slideItem.href}>
							<img src={slideItem.src} onLoad={this.onLoadComplete} onError={this.onErrorComplete} />
						</a>
						<div className={"pt-1"}>{slideItem.name}</div>
						<div className={"font-weight-bold"}>{slideItem.character}</div>
					</div>
				)}
				
				{template === 'crew' && (
					<div className={"template-crew"}>
						<a href={slideItem.href}>
							<img src={slideItem.src} onLoad={this.onLoadComplete} onError={this.onErrorComplete} />
						</a>
						<div className={"pt-1"}>{slideItem.name}</div>
						<div className={"font-weight-bold"}>{slideItem.job}</div>
					</div>
				)}
				
				{template === 'video' && (
					<div className={"template-video"}>
						<img src={slideItem.src} onLoad={this.onLoadComplete} onError={this.onErrorComplete} onClick={this.openVideo} />
						<h4 className={"pt-1"}>{slideItem.name}</h4>
					</div>
				)}
				
				{template === 'gallery' && (
					<div className={"template-gallery"}>
						<img src={slideItem.src} onLoad={this.onLoadComplete} onError={this.onErrorComplete} onClick={this.openImage} />
					</div>
				)}
				
			</div>
		)
		
	}
	
});

module.exports = CarouselSlideItem;
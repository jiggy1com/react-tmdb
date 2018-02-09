let React = require('react');

let LightboxController = React.createClass({
	
	// my methods
	prev: function(){
		
		let { currentIdx } = this.state;
		
		if(currentIdx-1 < 0){
			// do nothing
		}else{
			let prevIdx = currentIdx-1;
			this.setState({
				currentIdx : prevIdx,
				imageLoading : true
			});
			this.setCurrentImage(prevIdx);
			this.props.onStateChange(prevIdx);
		}
		
	},
	
	next: function(){
		
		let { currentIdx } = this.state;
		let { imageList } = this.props;
		
		if(currentIdx+1 > imageList.length-1){
			// do nothing
		}else{
			let nextIdx = currentIdx + 1;
			this.setState({
				currentIdx : nextIdx,
				imageLoading : true
			});
			this.setCurrentImage(nextIdx);
			this.props.onStateChange(nextIdx);
		}
		
	},
	
	close: function(e){
		e.preventDefault();
		e.stopPropagation();
		this.setState({
			imageLoading : true,
			imageError: false,
			isFirstLoad : true,
			showLightbox : false,
			currentIdx : -1,
			imageList : [],
			currentImage : {src:'',title : 'closed!'},
		});
		this.props.onCloseLightbox();
	},
	
	setCurrentImage: function(idx){
		let { imageList } = this.props;
		this.setState({
			currentImage : {
				title : '',
				src : ''
			},
			imageLoading : true,
			imageVisible : false
		});
		this.setState({
			currentImage : imageList.length > 0 ? imageList[idx] : {src: '', title: 'Oops! No images. How did this open???'},
			imageLoading : true
		});
	},
	
	getCurrentImage: function(){
		let { currentImage } = this.state;
		return currentImage;
	},
	
	// react methods
	
	getInitialState: function(){
		return {
			imageLoading : true,
			imageError: false,
			isFirstLoad : true,
			showLightbox : false, // change to false when ready to use
			currentIdx : -1,
			currentImage : {
				title : 'Initial State',
				src : ''
			}
		}
	},
	
	getDefaultProps: function(){
		return {
			// show lightbox
			showLightbox : false,
			
			// show dark overlay
			overlay : true,
			
			// currentIdx
			currentIdx : -1,
			
			// list of images
			imageList: [
				/*
				{
					src : @string - required - full url to image
					title : @string - optional - title for the lightbox
					blurb : @string - optional - blurb to go under the image // TODO: make this work
				}
				*/
			],
			
			onCloseLightbox : function(){
				console.error('You forgot to set the onCloseLightbox prop!!! The Lightbox will fail to work properly if you do not set the parent state accordingly.');
			},
			onStateChange : function(){
				console.error('You forgot to set the onStateChange prop!!! The Lightbox will fail to work properly if you do not set the parent state accordingly.');
			}
		}
	},
	
	componentWillReceiveProps: function(nextProps){
		// console.log('Lightbox componentWillReceiveProps', nextProps);
		this.setState(nextProps);
		if(nextProps.currentIdx>=0){
			this.setState({
				currentImage : nextProps.imageList[nextProps.currentIdx],
				imageLoading : true,
				imageError : false
			});
			// if(!this.state.imageLoading){
			// 	this.setState({
			// 		imageLoading : true
			// 	})
			// }
		}
	},
	
	componentDidMount:function(){
		// console.log('LightboxController componentDidMount');
	},
	
	shouldComponentUpdate: function(nextProps, nextState){
		// console.log('LightboxController shouldComponentUpdate', nextProps, nextState);
		return true;
	},
	
	handleImageLoaded:function(){
		// console.log('image loaded');
		this.setState({
			imageVisible: true,
			imageError : false,
			imageLoading : false
		});
	},
	
	handleImageError: function(){
		// console.log('image error');
		this.setState({
			imageError : true,
			imageLoading : false
		});
	},
	
	render: function(){
		// console.log('LightboxController render');
		let { isFirstLoad, showLightbox, currentIdx, imageList, imageLoading, imageError, imageVisible } = this.state;
		let { initialIdx } = this.props;
		let thisIdx = isFirstLoad ? initialIdx : currentIdx;
		let currentImage = this.getCurrentImage(currentIdx); // thisIdx
		
		// let currentImage = imageList[currentIdx];
		
		// console.log('LightboxController render', currentIdx, imageList);
		
		return (
			<div className={"jv-lightbox " + (showLightbox ? 'show' : 'hide') }>
				
				<div className={"jv-lightbox-overlay"} onClick={this.close}>
				</div>
				<div className={"jv-lightbox-modal p-5"}>
					<div className={"jv-lightbox-header pr-1 pl-1"}>
						<h1>
							{currentImage.title !== '' ? currentImage.title : null}
							<span className={"fa fa-times float-right"} onClick={this.close}>
							</span>
						</h1>
					</div>
					<div className={"jv-lightbox-body"}>
						<div className={"row no-gutters align-items-center"}>
							<div className={"prev text-center"} onClick={this.prev}>
								<span className={"fa fa-chevron-left fa-2x"}>
								</span>
							</div>
							<div className={"col"}>
								
								{imageLoading ?
									<div className={"spinner-container text-center pt-5"}>
										<span className={"fa fa-spin fa-spinner fa-4x"}>
										</span>
									</div>
									:
									null
								}
								
								{currentImage.src !== '' ?
									<img src={currentImage.src} onLoad={this.handleImageLoaded} onError={this.handleImageError} className={imageVisible ? 'visible' : 'not-visible'} />
									:
									null
								}
								
								{imageError ?
									<div>
										Sorry, the image could not be loaded. Dunno why.
									</div>
									:
									null
								}
								
							</div>
							<div className={"next text-center"} onClick={this.next}>
								<span className={"fa fa-chevron-right fa-2x"}>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	
});

module.exports = LightboxController;
let React = require('react');
let ReactDOM = require('react-dom');

let CarouselSlideItem = require('./CarouselSlideItem');

let CarouselSlide = React.createClass({
	
	itemWasRendered: function(x){
		console.log('item was rendered:', x);
		this.props.slideWasRendered(x);
	},
	
	// getInitialState: function(){
	// 	return {
	// 		carouselId: '',
	// 		carouselWidth: '100%',
	// 		carouselSlideWidth: '100%',
	// 		carouselSlideHeight: 0,
	// 		carouselSlidePaddingLeft: 0,
	// 		carouselSlidePaddingRight: 0,
	// 		slideMounted: function(){
	// 			console.error('did not define slideMounted in slide');
	// 		},
	// 		slideItemMounted: function(){
	// 			console.error('did not define slideItemMounted in slide');
	// 		},
	// 		items : [],
	// 		itemsPerSlide : 1,
	// 		carouselSlideIdx : -1,
	// 		customProperties : [],
	// 		customClasses: {},
	// 		customStyles : {}
	// 	}
	// },
	
	getDefaultProps: function(){
		return {
			carouselId : '',
			carouselWidth : 0,
			carouselHeight : 0,
			carouselSlideWidth : 0,
			carouselSlideHeight : 0,
			carouselSlidePaddingLeft : 0,
			carouselSlidePaddingRight : 0,
			slideWasRendered: function(){
				console.warn('did not set slideWasRendered in slide');
			},
			slideMounted : function(){
				console.warn('did not set slideMounted in slide');
			},
			slideItemMounted: function(){
				console.warn('did not set slideItemMounted in slide');
			},
			items : [],
			itemsPerSlide : 0,
			carouselSlideIdx : -1,
			
			// custom
			customProperties: [],
			customClasses: {},
			customStyles: {}
		}
	},
	
	shouldComponentUpdate: function(nextProps, nextState){
		let { items, carouselHeight, carouselSlideHeight } = this.props;
		// console.log('slide should update', carouselSlideHeight !== nextProps.carouselSlideHeight);

		console.warn('shouldcomponentupdate', nextProps);

		return false;

		// return true;
		// return carouselSlideHeight !== nextProps.carouselSlideHeight;


		// return true;
	},
	
	componentWillReceiveProps: function(nextProps){
		// console.log('component will receive props', nextProps);
		// this.setState(nextProps);
	},
	
	componentDidMount: function(){
		// let el = $(ReactDOM.findDOMNode(this));
		// let { slideMounted } = this.props;
		// console.log('el', el.height());
		// this.props.slideWasRendered('mount');
	},
	
	componentDidUpdate: function(){
		// this.props.slideWasRendered('update');
		console.log('slide did update');
	},
	
	render: function(){
		
		// console.log('render slide');
		
		let self = this;
		
		let { items, itemsPerSlide, carouselSlideIdx,
			carouselSlideWidth, carouselSlideHeight, carouselSlidePaddingLeft, carouselSlidePaddingRight,
			customProperties, customClasses, customStyles } = this.props; //this.props;
		
		let { slideItemMounted } = this.props;
		
		// console.log('render items', items);
		
		
		
		let carouselSlideStyle = {};
		
		if(carouselSlideWidth !== 0){
			carouselSlideStyle.width = carouselSlideWidth;
		}
		
		if(carouselSlideHeight !== 0){
			carouselSlideStyle.height = carouselSlideHeight;
			carouselSlideStyle.minHeight = carouselSlideHeight;
		}
		
		if(carouselSlidePaddingLeft !== 0){
			carouselSlideStyle.paddingLeft = carouselSlidePaddingLeft;
		}
		
		if(carouselSlidePaddingRight !== 0){
			carouselSlideStyle.paddingRight = carouselSlidePaddingRight;
		}
		
		if(items.length > 0){
			
			let thisClass = 'carousel-item';
				thisClass += carouselSlideIdx === 0 ? ' active' : '';
			
			return (
				<div className={thisClass} style={carouselSlideStyle} key={'CarouselSlideGuts-' + carouselSlideIdx}>
					<div className={"row"}>
						{items.map(function(obj, itemIdx){
							return (
								
								<CarouselSlideItem
									key={'CarouselSlide-' + carouselSlideIdx + '-' + itemIdx}
									obj={obj}
									carouselSlideIdx={carouselSlideIdx}
									carouselSlideItemIdx={itemIdx}
									itemsPerSlide={itemsPerSlide}
									customProperties={customProperties}
									customClasses={customClasses}
									customStyles={customStyles}
									slideItemMounted={slideItemMounted}
									itemWasRendered={self.itemWasRendered}/>
								
							)
						})}
					</div>
				</div>
			)

		}else{
			return (
				<div>
				
				</div>
			)
		}
	}
	
});

module.exports = CarouselSlide;
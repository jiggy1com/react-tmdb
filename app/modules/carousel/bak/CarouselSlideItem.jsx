let React = require('react');
let ReactDOM = require('react-dom');

let BreakpointService = require('BreakpointService');

let CarouselSlideItem = React.createClass({
	
	// my methods
	
	setupSlideItem: function(){
		// let self = this;
		// let { obj } = this.props; //this.props;
		// let { slideItemMounted } = this.props;
		// let el = $(ReactDOM.findDOMNode(this));
		//
		// // setup the notification to reset carousel height
		// let b = new BreakpointService();
		// b.init({
		// 	onChange : self.doOnChange
		// });
		//
		// // set height after image loads
		// let img = new Image();
		// img.onload = function(){
		// 	// slideItemMounted(el.height());
		// 	self.doOnChange();
		// };
		//
		// img.src = obj.src;
		
		// self.doOnChange();
	},
	
	doOnChange: function(){
		
		// let { obj } = this.props;
		// let { slideItemMounted } = this.props;
		// let el = $(ReactDOM.findDOMNode(this));
		//
		// slideItemMounted( el.height() );
		
		// let img = new Image();
		// img.onload = function(){
		// 	console.log('doOnChange height', el.height());
		// 	slideItemMounted(el.height());
		// };
		//
		// img.src = obj.src;
		
		
		
		// let { slideItemMounted, obj } = this.props;
		// let el = $(ReactDOM.findDOMNode(this));
		// console.log('!!!slide item height', el.height())
		// slideItemMounted( el.height() );
	},
	
	removeImage: function(){
		$(ReactDOM.findDOMNode(this)).find('img').attr('src', 'https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png/revision/latest?cb=20170219125728');
	},
	
	// react methods
	
	// getInitialState: function(){
	// 	return {
	// 		slideItemMounted : function(){
	// 			console.error(' did not defined slideItemMounted in slide item');
	// 		},
	// 		itemsPerSlide : 0,
	// 		obj : {},
	// 		idx : -1,
	// 		carouselSlideIdx : -1,
	// 		carouselSlideItemIdx : -1,
	//
	// 		// custom
	// 		customProperties: [],
	// 		customStyles : {}
	// 	}
	// },
	
	getDefaultProps: function(){
		console.log('item getDefaultProps');
		return {
			itemWasRendered: function(){
				console.log('itemWasRendered not working');
			},
			slideItemMounted : function(){
				console.warn(' did not defined slideItemMounted in slide item');
			},
			itemsPerSlide : 0,
			obj : {},
			idx : -1,
			carouselSlideIdx : -1,
			carouselSlideItemIdx : -1,
			
			// custom
			customProperties: [],
			customStyles : {}
		}
	},
	
	componentWillReceiveProps: function(nextProps){
		console.error('item componentWillReceiveProps', nextProps);
		
		// let { itemWasRendered } = this.props;
		//
		// if(nextProps.obj.src !== null){
		// 	let img = new Image();
		// 	img.onload = function(){
		// 		console.log('image loaded 2', nextProps.obj.src);
		// 		itemWasRendered('image loaded');
		// 	};
		// 	img.src = nextProps.obj.src;
		// }
		
	},
	
	componentDidMount: function(){
		console.log('item componentDidMount');
		// this.setupSlideItem();
		// this.props.itemWasRendered(' mount');
	},
	
	componentDidUpdate: function(prevProps, prevState){
		console.log('item componentDidUpdate');
		// this.props.itemWasRendered('update');
	},
	
	shouldComponentUpdate: function(nextProps, nextState){
		
		let { obj } = this.props;
		console.log('item shouldComponentUpdate', obj.id !== nextProps.id);
		// return false;
		return obj.id !== nextProps.id;
	},
	
	render: function(){
		
		console.log('item render');
		
		let {obj, itemsPerSlide, idx,
			carouselSlideIdx, carouselSlideItemIdx,
			customProperties, customClasses, customStyles,
			itemWasRendered } = this.props; //this.props;
		
		// console.log('render item', idx);
		
		// console.log('render item', obj);
		
		// console.log('----------------------');
		// console.log('customProperties from item', customProperties);
		// console.log('customClasses from item', customClasses);
		// console.log('customStyles from item', customStyles);
		
		let colClass = 	  itemsPerSlide === 1 ? 'col-12'
						: itemsPerSlide === 2 ? 'col-6'
						: itemsPerSlide === 3 ? 'col-4'
						: itemsPerSlide === 4 ? 'col-3'
						: itemsPerSlide === 6 ? 'col-2'
						: 'col';
		
		
		if(obj.src !== null){
			let img = new Image();
			img.onload = function(){
				console.log('image loaded in render', obj.src);
				itemWasRendered('image loaded');
			};
			img.src = obj.src;
		};
		
		
		return (
			<div className={colClass}>
				
				{obj.href ?
					<a href={obj.href}>
						<img src={obj.src} onError={this.removeImage} />
					</a>
					:
					<img src={obj.src} />
				}
				
				{customProperties.map(function(property){
					let key = Math.floor( Math.random() * 1000 ) + new Date().getTime();
					return (
						<div key={key} className={customClasses[property]}>
							{obj[property]}
						</div>
					)
				})}
				
			</div>
		)
		
		
			
			
		
	}
});

module.exports = CarouselSlideItem;
let React = require('react');

let SomeComponent = React.createClass({
	
	// my methods
	
	// react methods
	
	// really only need to open this up if the component will take props
	// SomeController should not need this -- but sometimes it will if it's like a shared controller (CarouselController for instance)
	// getDefaultProps: function(){
	// 	return {
	// 		someProp : 'someValue'
	// 	}
	// },
	
	// only open this up if you're going to use state,
	// generally in the SomeController otherwise props should be sufficient
	// getInitialState: function(){
	// 	return {
	// 		someKey : 'someValue'
	// 	}
	// },
	
	componentWillMount: function(){
		// this.setState here is OK, but not recommended
	},
	
	componentDidMount: function(){
		// this.setState here is OK, and will trigger another render()
		// setup subscriptions here
		// make api requests here
	},
	
	componentWillReceiveProps: function(nextProps){
		// calling this.setState is OK here
	},
	
	// shouldComponentUpdate: function(nextProps, nextState){
	// 	generally speaking, let React handle whether the component should update
	// 	or be careful whether or not to return true
	// 	return true;
	// },
	
	componentWillUpdate: function(nextProps, nextState){
		// do not call this.setState here
	},
	
	componentDidUpdate: function(prevProps, prevState){
		// not called on initial render()
		// You can operate on the DOM here
		// network requests are OK here, but you need to insure the props/state did not change
	},
	
	componentWillUnmount: function(){
		// unsubscribe here, remove timers, etc
	},
	
	// componentDidCatch: function(error, info){
	// 	catches errors in child components, not this component
	// },
	
	// this.forceUpdate(callback) -- avoid using this
	
	render: function(){
		return (
			<div>
				SomeComponent
			</div>
		)
	}
	
});

module.exports = SomeComponent;
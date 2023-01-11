/* DEPRECATED */

import React from 'react';

export class PersonTaggedImagesComponent extends React.Component {

	// my methods

	// react methods

	componentWillMount(){
		// this.setState here is OK, but not recommended
	}

	componentDidMount(){
		// this.setState here is OK, and will trigger another render()
		// setup subscriptions here
		// make api requests here
	}

	componentWillReceiveProps(nextProps){
		// calling this.setState is OK here
	}

	// shouldComponentUpdate(nextProps, nextState){
	// 	generally speaking, let React handle whether the component should update
	// 	or be careful whether or not to return true
	// 	return true;
	// },

	componentWillUpdate(nextProps, nextState){
		// do not call this.setState here
	}

	componentDidUpdate(prevProps, prevState){
		// not called on initial render()
		// You can operate on the DOM here
		// network requests are OK here, but you need to insure the props/state did not change
	}

	componentWillUnmount(){
		// unsubscribe here, remove timers, etc
	}

	// componentDidCatch(error, info){
	// 	catches errors in child components, not this component
	// },

	// this.forceUpdate(callback) -- avoid using this

	render(){
		return (
			<div>
				PersonTaggedImagesComponent
			</div>
		)
	}

}

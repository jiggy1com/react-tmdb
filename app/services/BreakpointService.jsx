import React from 'react';

// Small devices (landscape phones, 576px and up)
// @media (min-width: 576px) { ... }
// Medium devices (tablets, 768px and up)
// @media (min-width: 768px) { ... }
// Large devices (desktops, 992px and up)
// @media (min-width: 992px) { ... }
// Extra large devices (large desktops, 1200px and up)
// @media (min-width: 1200px) { ... }

// constructor

export class BreakpointService {
	constructor() {
		// properties

		this.currentBreakpoint = '';

		this.breakpoints = [
			{
				breakpoint : 'xs',
				min : 0,
				max : 575
			},
			{
				breakpoint : 'sm',
				min : 576,
				max : 767
			},
			{
				breakpoint : 'md',
				min : 768,
				max : 991
			},
			{
				breakpoint : 'lg',
				min : 992,
				max : 1199
			},
			{
				breakpoint : 'xl',
				min : 1200,
				max : 9999
			}
		];
	}

	// methods

	onResize(){

		let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

		let arrBreakpoints = this.breakpoints.filter(function(obj){
			return w >= obj.min && w <= obj.max;
		});

		let newBreakpoint = arrBreakpoints[0].breakpoint;

		// if(this.currentBreakpoint !== newBreakpoint){
		this.currentBreakpoint = arrBreakpoints[0].breakpoint;
		this.onChange( this.currentBreakpoint );
		// }

	};

	onChange(){
		console.error('You did not pass in the onChange handler. Your component may not be notified of the break point changes.');
	};

	init(obj){

		// allow parent component to pass in own handler to call when the breakpoint changes
		if(typeof obj === 'object' && obj.hasOwnProperty('onChange') && typeof obj.onChange === 'function'){
			this.onChange = obj.onChange;
		}

		// start listening to the window resizing
		$(window).resize( this.onResize.bind(this) );

		// set initial breakpoint
		this.onResize();
	};

}


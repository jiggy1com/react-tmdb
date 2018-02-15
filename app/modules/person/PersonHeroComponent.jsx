let React = require('react');
let { Link } = require('react-router');

let BreakpointService = require('BreakpointService');

let PersonHeroComponent = React.createClass({
	
	// my methods
	currentBreakpoint : '',
	breakpointService : new BreakpointService(),
	handleBreakpointChange: function(breakpoint){
		console.log('handleBreakpointChange heard', breakpoint);
		if(this.currentBreakpoint !== breakpoint){
			console.log('updating breakpoint');
			this.currentBreakpoint = breakpoint;
			this.setState({
				breakpoint : breakpoint
			});
		}
	},
	
	
	getGender: function(gender){
		return gender === 1 ? 'Female'
			: gender === 2 ? 'Male'
				: null;
	},
	
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
	getInitialState: function(){
		return {
			breakpoint : ''
		}
	},
	
	componentWillMount: function(){
		// this.setState here is OK, but not recommended
		// let b = new BreakpointService();
		this.breakpointService.init({
			onChange: this.handleBreakpointChange
		});
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
		
		let { person } = this.props;
		let { breakpoint } = this.state;
		
		let src = '//image.tmdb.org/t/p/' + 'h632' + person.profile_path;
		
		let preStyle = {
			'whiteSpace': 'pre-line',
			'fontFamily' : 'inherit'
		};
		
		let personHeroClass = breakpoint === 'xs' || breakpoint === 'sm'
							? 'pt-3'
							: 'pt-5 pr-5 pl-5';
		
		let imgClass = breakpoint === 'xs' || breakpoint === 'sm'
					? ''
					: 'mr-5';
		
		let imdbLink = 'http://www.imdb.com/name/' + person.imdb_id + '/';
		let gender = this.getGender(person.gender);
		
		return (
			<div id={"person-hero"} className={"mb-5 " + personHeroClass}>
				
				<div className={"person-hero-guts"}>
					
					<div className={"container-fluid"}>
						<div className={"row"}>
							<div className={"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"}>
								
								{person.profile_path !== '' &&
									<img src={src} className={"d-block rounded mb-3 " + imgClass} />
								}
								
								<Link to={imdbLink} target={"_blank"} className={"btn btn-primary btn-block mb-3"}>
									View on IMDB
								</Link>
								
							</div>
							<div className={"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"}>
								
								<h1>{person.name}</h1>
								
								<div>
									Sex: {gender}
								</div>
								
								<div>
									Born {person.birthday} in {person.place_of_birth}.
								</div>
								
								{person.deathday !== null &&
								<div>
									Deceased {person.deathday}
								</div>
								}
								
								{person.also_known_as.length > 0 &&
								<div>
									Also known as:
									<ul>
										{person.also_known_as.map(function(name, idx){
											return (
												<li key={idx}>{name}</li>
											)
										})}
									</ul>
								</div>
								}
								
								<pre style={preStyle}>{person.biography}</pre>
								
							</div>
						</div>
					</div>
				
				</div>
				
			</div>
		)
	}
	
});

module.exports = PersonHeroComponent;
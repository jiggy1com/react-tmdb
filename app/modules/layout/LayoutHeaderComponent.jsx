let React = require('react');

// import { BreakpointService } from 'BreakpointService';

let LayoutHeaderComponent = React.createClass({
	
	// TODO: bind onresize and set the breakpoint
	lastBreakpoint: '',
	bp : '',
	
	// Vanilla JS works...
	closeNavigation: function(){
		// let navToggler = document.getElementById('navToggler');
		// let navbarSupportedContent = document.getElementById('navbarSupportedContent');
		//
		// if(navbarSupportedContent.classList.contains('show')){
		// 	if (navToggler.onclick) {
		// 		navToggler.onclick();
		// 	} else if (navToggler.click) {
		// 		navToggler.click();
		// 	}
		// }
	},
	
	// ...but going the jQuery way to test doing it inside componentDidMount
	componentDidMount:function(){
		
		let navToggler = $('#navToggler');
		let navbarSupportedContent = $('#navbarSupportedContent');
		
		$('.nav-item').click(function(){
			if(navbarSupportedContent.hasClass('show')){
				navToggler.click();
			}
		});
		
		// changing state will trigger shouldComponentUpdate
		this.setState({
			test : true
		});
		
	},
	
	shouldComponentUpdate: function(){
		console.log('LayoutHeaderComponent shouldComponentUpdate');
		return true;
	},
	
	render: function(){
		return (
			<header>
			
				<div className="bg-dark sticky-top" id="layout-header">
					<div className="container">
						<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
							<a className="navbar-brand" href="#">TMDB with React</a>
							
							{/*
							<form className="form-inline">
								<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
								<button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
							</form>
							*/}
							
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="navToggler">
								<span className="navbar-toggler-icon">
								</span>
							</button>
							<div className="collapse navbar-collapse" id="navbarSupportedContent">
								<ul className="navbar-nav mr-auto">
									<li className="nav-item">
										<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
									</li>
									<li className="nav-item dropdown">
										<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											Movies
										</a>
										<div className="dropdown-menu" aria-labelledby="navbarDropdown">
											{/*<a className="dropdown-item" href="#/movie/latest">Latest</a>*/}
											<a className="dropdown-item" href="#/movie/now-playing">Now Playing</a>
											<a className="dropdown-item" href="#/movie/popular">Popular</a>
											<a className="dropdown-item" href="#/movie/top-rated">Top Rated</a>
											<a className="dropdown-item" href="#/movie/upcoming">Upcoming</a>
										</div>
									</li>
									<li className="nav-item dropdown">
										<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											TV
										</a>
										<div className="dropdown-menu" aria-labelledby="navbarDropdown">
											{/*<a className="dropdown-item" href="#/tv/latest">Latest</a>*/}
											<a className="dropdown-item" href="#/tv/airing-today">Airing Today</a>
											<a className="dropdown-item" href="#/tv/on-the-air">On The Air</a>
											<a className="dropdown-item" href="#/tv/popular">Popular</a>
											<a className="dropdown-item" href="#/tv/top-rated">Top Rated</a>
										</div>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</header>
		);
	}
});

module.exports = LayoutHeaderComponent;
let React = require('react');
let { Link } = require('react-router');
let httpService = require('HttpService');
let LayoutHeaderSearchResultsComponent = require('./LayoutHeaderSearchResultsComponent');

let LayoutHeaderComponent = React.createClass({
	
	// TODO: bind onresize and set the breakpoint
	lastBreakpoint: '',
	bp : '',
	
	handleKeyUp: function(e){
		e.preventDefault();
		// if(e.keyCode === 13){
		// 	this.doSearch();
		// }
	},
	
	doSearch: function(e, a){
		
		e.preventDefault();
		e.stopPropagation();
		
		let self = this;
		let search = this.refs.search.value;
		let obj = {
			search : search
		};
		
		let path;
		
		// let path = '/api/v1/search/multi';
		// httpService.doPost(obj, path).then(function(resp){
		// 	self.setState({
		// 		results : resp.data.data.results
		// 	});
		// });
		
		path = '/api/v1/search/movie';
		httpService.doPost(obj, path).then(function(resp){
			self.setState({
				movieList : resp.data.data.results
			});
		});
		
		path = '/api/v1/search/tv';
		httpService.doPost(obj, path).then(function(resp){
			self.setState({
				tvList : resp.data.data.results
			});
		});
		
		path = '/api/v1/search/person';
		httpService.doPost(obj, path).then(function(resp){
			self.setState({
				personList : resp.data.data.results
			});
		});
		
		this.setState({
			search : search
		});
		
	},
	
	clearSearchResults: function(){
		this.refs.search.value = '';
		this.setState({
			movieList: [],
			tvList: [],
			personList: []
		});
	},
	
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
		// why is this here, though?
		// this.setState({
		// 	test : true
		// });
		
	},
	
	shouldComponentUpdate: function(){
		console.log('LayoutHeaderComponent shouldComponentUpdate');
		return true;
	},
	
	getInitialState: function(){
		return {
			movieList: [],
			tvList: [],
			personList: []
		}
	},
	
	render: function(){
		
		let { movieList, tvList, personList, search } = this.state;
		
		return (
			<header>
				<div className="bg-dark sticky-top" id="layout-header">
					<div className="container">
						<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
							<Link className="navbar-brand" to="/">TMDB with React</Link>
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="navToggler">
								<span className="navbar-toggler-icon">
								</span>
							</button>
							<div className="collapse navbar-collapse" id="navbarSupportedContent">
								<ul className="navbar-nav mr-auto">
									<li className="nav-item">
										<Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
									</li>
									<li className="nav-item dropdown">
										<Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											Movies
										</Link>
										<div className="dropdown-menu" aria-labelledby="navbarDropdown">
											{/*<Link className="dropdown-item" to="/movie/latest">Latest</Link>*/}
											<Link className="dropdown-item" to="/movie/now-playing">Now Playing</Link>
											<Link className="dropdown-item" to="/movie/popular">Popular</Link>
											<Link className="dropdown-item" to="/movie/top-rated">Top Rated</Link>
											<Link className="dropdown-item" to="/movie/upcoming">Upcoming</Link>
										</div>
									</li>
									<li className="nav-item dropdown">
										<Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											TV
										</Link>
										<div className="dropdown-menu" aria-labelledby="navbarDropdown">
											{/*<Link className="dropdown-item" to="/tv/latest">Latest</Link>*/}
											<Link className="dropdown-item" to="/tv/airing-today">Airing Today</Link>
											<Link className="dropdown-item" to="/tv/on-the-air">On The Air</Link>
											<Link className="dropdown-item" to="/tv/popular">Popular</Link>
											<Link className="dropdown-item" to="/tv/top-rated">Top Rated</Link>
										</div>
									</li>
								</ul>
								<form className="form-inline" onSubmit={this.doSearch}>
									<div className="input-group">
										<input type="text" className="form-control" placeholder="Movie, Show, Actor" aria-label="Recipient's username" aria-describedby="basic-addon2" ref="search" onKeyUp={this.handleKeyUp} />
										<div className="input-group-append">
											<button className={"btn btn-primary"} onClick={this.doSearch}>
												Go
											</button>
											{/*<span className="input-group-text" id="basic-addon2">*/}
												{/*Go*/}
											{/*</span>*/}
										</div>
									</div>
								</form>
							</div>
						</nav>
						
						<LayoutHeaderSearchResultsComponent
							movieList={movieList}
							tvList={tvList}
							personList={personList}
							search={search}
							onClose={this.clearSearchResults}>
						</LayoutHeaderSearchResultsComponent>
						
					</div>
				</div>
			</header>
		);
	}
});

module.exports = LayoutHeaderComponent;
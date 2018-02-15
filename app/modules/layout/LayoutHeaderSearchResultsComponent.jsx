let React = require('react');
let { Link } = require('react-router');
let hyphenate = require('Hyphenate');

let LayoutHeaderSearchResultsComponent = React.createClass({
	
	filterResults: function(nextProps){
		
		let movieList = [];
		let tvList = [];
		let personList = [];
		
		nextProps.results.forEach(function(obj){
			if(obj.media_type === 'movie'){
				movieList.push(obj);
			}
		});
		
		nextProps.results.forEach(function(obj){
			if(obj.media_type === 'tv'){
				tvList.push(obj);
			}
		});
		
		nextProps.results.forEach(function(obj){
			if(obj.media_type === 'person'){
				personList.push(obj);
			}
		});
		
		let update = {
			movieList: movieList,
			tvList: tvList,
			personList: personList
		};
		
		this.setState(update);
		
	},
	
	getInitialState: function(){
		return {
			movieList : [],
			tvList: [],
			personList: []
		}
	},
	
	getDefaultProps: function(){
		return {
			results : [],
			onClose : function(){
				console.log('close was not passed in');
			}
		}
	},
	
	componentWillReceiveProps: function(nextProps){
		this.filterResults(nextProps);
	},
	
	renderMovieList: function(){
		let { movieList } = this.state;
		let { onClose } = this.props;
		
		if(movieList.length === 0){
			return (
				<div>
				</div>
			)
		}else{
			return movieList.map(function(obj, idx){
				let href = '/movie/detail/' + hyphenate.hyphenateAndLowercase(obj.title) + '/' + obj.id;
				return (
					<li key={idx}>
						<Link to={href} onClick={onClose}>
							{obj.title}
						</Link>
					</li>
				)
			});
		}
	},
	
	renderTvList: function(){
		let { tvList } = this.state;
		let { onClose } = this.props;
		
		if(tvList.length === 0){
			return (
				<div>
				</div>
			)
		}else{
			return tvList.map(function(obj, idx){
				let href = '/tv/detail/' + hyphenate.hyphenateAndLowercase(obj.name) + '/' + obj.id;
				return (
					<li key={idx}>
						<Link to={href} onClick={onClose}>
							{obj.name}
						</Link>
					</li>
				)
			});
		}
	},
	
	renderPersonList: function(){
		let { personList } = this.state;
		let { onClose } = this.props;
		
		if(personList.length === 0){
			return (
				<div>
				</div>
			)
		}else{
			return personList.map(function(obj, idx){
				let href = '/person/' + hyphenate.hyphenateAndLowercase(obj.name) + '/' + obj.id;
				return (
					<li key={idx}>
						<Link to={href} onClick={onClose}>
							{obj.name}
						</Link>
					</li>
				)
			});
		}
	},
	
	render: function(){
	
		let movieHtml = this.renderMovieList();
		let tvHtml = this.renderTvList();
		let personHtml = this.renderPersonList();
		let { results } = this.props;
		
		if(results.length === 0){
			return (
				<div>
				</div>
			)
		}else{
			return (
				<div id="search-results" className={"mt-3"}>
					<div className={"container"}>
						<div className={"row"}>
							<div className={"col"}>
								<h2>Movies</h2>
								<ul>
									{movieHtml}
								</ul>
							</div>
							<div className={"col"}>
								<h2>TV Shows</h2>
								<ul>
									{tvHtml}
								</ul>
							</div>
							<div className={"col"}>
								<h2>Actors</h2>
								<ul>
									{personHtml}
								</ul>
							</div>
						</div>
					</div>
				</div>
			)
		}
		
		
	}
});

module.exports = LayoutHeaderSearchResultsComponent;
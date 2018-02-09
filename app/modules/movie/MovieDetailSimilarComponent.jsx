let React = require('react');
let httpService = require('HttpService');
let MovieListComponent = require('./MovieListComponent');

let MovieDetailSimilarComponent = React.createClass({
	
	// My Methods
	
	getSimilar: function(nextProps){
		let self = this;
		let path = '/api/v1/movie/similar/' + nextProps.movieId;
		httpService.doGet(path).then(function(resp){
			self.setState({
				results : resp.data.results,
				total_pages : resp.data.total_pages,
				total_results : resp.data.total_results,
				page: resp.data.page
			});
		});
	},
	
	// React Methods
	
	getInitialState: function() {
		return {
			page : 0,
			total_pages: 0,
			total_results: 0,
			results: []
		}
	},
	
	getDefaultProps: function(){
		return {
			movieId: ''
		}
	},
	
	componentWillReceiveProps: function(nextProps){
		this.setState(nextProps);
		if(nextProps.movieId !== ''){
			this.getSimilar(nextProps);
		}
	},
	
	shouldComponentUpdate: function(){
		return true;
	},
	
	render: function(){
		
		let { results } = this.state;
		
		// console.warn('MovieDetailSimilarComponent results', results);
		
		return (
			<MovieListComponent results={results}>
			</MovieListComponent>
		)
	}
	
});

module.exports = MovieDetailSimilarComponent;
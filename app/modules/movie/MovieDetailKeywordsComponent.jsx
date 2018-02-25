let React = require('react');
let { Link } = require('react-router');

let httpService = require('HttpService');
let hyphenate = require('Hyphenate');

let MovieDetailKeywordsComponent = React.createClass({
	
	getInitialState: function(){
		return {
			results : []
		}
	},
	
	componentWillReceiveProps: function(nextProps){
		this.setState(nextProps);
		this.getMovieKeywords(nextProps)
	},
	
	componentDidMount: function(){
	
	},
	
	getMovieKeywords: function(nextProps){
		let self = this;
		let { movieId } = nextProps;
		let path = '/api/v1/movie/keywords/' + movieId;
		httpService.doGet(path).then(function(resp){
			console.log('getMovieKeywords', resp);
			self.setState({
				results : resp.data.keywords
			});
		});
	},
	
	render: function(){
		
		let { results } = this.state;
		let html;
		
		if(results.length === 0){
			html = (
				<span key={"review-span"}>
				</span>
			)
		}else{
			html = results.map(function(obj){
				let link = '/keyword/movie/' + hyphenate.hyphenateAndLowercase(obj.name) + '/' + obj.id;
				return (
					<Link key={obj.id} to={link}  className={"btn btn-primary btn-sm mr-1 mb-1"}>
						{obj.name}
					</Link>
				)
			});
		}
		
		return (
			<div className={"pt-3 pb-3"}>
				<h2 className={"card-header mb-3"}>Keywords</h2>
				<div>
					{html}
				</div>
			</div>
		);
	}
});

module.exports = MovieDetailKeywordsComponent;
let React = require('react');
let { Link } = require('react-router');
let hyphenate = require('Hyphenate');

let KeywordTvComponent = React.createClass({
	
	getDefaultProps: function(){
		return {
			results: []
		}
	},
	
	render: function(){
		
		let { results } = this.props;
		
		return (
			<div className={"container-fluid interior-wrapper mb-5"}>
				<div className={"row"}>
					
					{results.map(function(obj){
						
						let poster = 'https://image.tmdb.org/t/p/w342' + obj.poster_path;
						let backdrop = 'https://image.tmdb.org/t/p/w300' + obj.backdrop_path;
						let link = '/tv/detail/' + hyphenate.hyphenateAndLowercase(obj.name) + '/' + obj.id;
						
						return (
							<div key={obj.id} className={"col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3"}>
								<Link to={link}>
									<img src={poster} />
									<h4>{obj.name}</h4>
								</Link>
							</div>
						)
					})}
				
				</div>
			</div>
		)
	}
	
});

module.exports = KeywordTvComponent;
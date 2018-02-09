let React = require('react');

let httpService = require('HttpService');
let hyphenate = require('Hyphenate');

let MovieDetailGenresComponent = React.createClass({
	
	getInitialState: function(){
		return {
			genres : []
		}
	},
	
	componentWillReceiveProps: function(nextProps){
		this.setState(nextProps);
	},
	
	componentDidMount: function(){
	
	},
	
	render: function(){
		
		let { genres } = this.state;
		let html;
		
		if(genres.length === 0){
			html = (
				<span key={"review-span"}>
				</span>
			)
		}else{
			html = genres.map(function(obj){
				let link = "#/genre/" + hyphenate.hyphenateAndLowercase(obj.name) + '/' + obj.id;
				return (
					<a key={obj.id} href={link}  className={"badge badge-primary mr-1"}>
						{obj.name}
					</a>
				)
			});
		}
		
		return (
			<div className={"pt-3 pb-3"}>
				<h2 className={"card-header mb-3"}>Genres</h2>
				<div>
					{html}
				</div>
			</div>
		);
	}
});

module.exports = MovieDetailGenresComponent;
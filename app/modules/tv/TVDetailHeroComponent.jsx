let React = require('react');

let TVDetailHeroComponent = React.createClass({
	
	componentWillReceiveProps: function(nextProps){
		console.log('nextProps', nextProps);
	},
	
	render: function(){
		
		let { data } = this.props;
		let backgroundImage = 'https://image.tmdb.org/t/p/w1400_and_h450_face' + data.backdrop_path;
		let posterImage = 'https://image.tmdb.org/t/p/w500' + data.poster_path;
		let heroStyles = {
			backgroundImage : "url(" + backgroundImage + ")"
		};
		
		return (
			<div className="tv-hero mb-5" style={heroStyles}>
				<div className="tv-hero-guts p-5">
					<h1 className={"display-4"}>{data.name}</h1>
					<p className={"lead"}>{data.overview}</p>
				</div>
			</div>
		)
	}
	
});

module.exports = TVDetailHeroComponent;
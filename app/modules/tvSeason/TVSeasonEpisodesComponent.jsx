let React = require('react');

let TVSeasonEpisodeComponent = require('./TVSeasonEpisodeComponent');

let TVSeasonEpisodesComponent = React.createClass({
	
	getDefaultProps: function(){
		return {
			episodes: []
		}
	},
	
	render: function(){
		
		let { episodes } = this.props;
		
		return (
			<div id={"episodes-list"}>
				{episodes.map(function(episode, idx){
					return (
						<TVSeasonEpisodeComponent key={idx} episode={episode}/>
					)
				})}
			</div>
		)
	}
});

module.exports = TVSeasonEpisodesComponent;
import React from 'react';
import {TVSeasonEpisodeComponent} from "modules/tvSeason/TVSeasonEpisodeComponent";
export class TVSeasonEpisodesComponent extends React.Component {

	render(){

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
}

TVSeasonEpisodesComponent.defaultProps = {
	episodes: []
}

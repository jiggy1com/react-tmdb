import React from 'react';
import {BreakpointService} from "BreakpointService";

export class TVSeasonEpisodeComponent extends React.Component {

	constructor(props) {
		super(props);
		this.breakpointService = null;
		this.state = {
			breakpoint: ''
		}
		this.doOldDidMount()
	}

	handleBreakpointChange(breakpoint){
		this.setState({
			breakpoint: breakpoint
		});
	}

	doOldDidMount(){
		this.breakpointService = new BreakpointService();
		this.breakpointService.init({
			onChange: this.handleBreakpointChange
		});
	}

	render(){

		let { episode } = this.props;
		let { breakpoint } = this.state;

		let src = 'https://image.tmdb.org/t/p/w300' + episode.still_path;

		let episodeImgClass = breakpoint === 'xs' || breakpoint === 'sm' ? 'img-full' : '';
		let episodeTextClass = breakpoint === 'xs' || breakpoint === 'sm' ? 'mt-3' : '';

		return (
			<div className="tv-season-episode-list-item mb-3 pb-3 border-bottom">
				<div className={"row justify-content-md-center"}>
					<div className={"col-md-auto"}>
						<img src={src} className={episodeImgClass} />
					</div>
					<div className={"col " + episodeTextClass}>
						<h5 className={"text-muted"}>Season {episode.season_number} Episode {episode.episode_number} aired on {episode.air_date}</h5>
						<h4>{episode.name}</h4>
						<p>{episode.overview}</p>
						<div>Vote Average: {episode.vote_average}</div>
						<div>Vote Count: {episode.vote_count}</div>
					</div>
				</div>
				{/* TODO: drop in the Crew component here, show on click */}
				{/* TODO: drop in the Guest Stars component here, show on click */}
			</div>
		)
	}

}

TVSeasonEpisodeComponent.defaultProps = {
	episode: {
		air_date: '',
		crew: [],
		episode_number: 0,
		guest_stars: [],
		name: '',
		overview: '',
		id: 0,
		production_code: '',
		season_number: 0,
		still_path: '',
		vote_average: 0,
		vote_count: 0
	}
}

import React from 'react';
import { Link } from "react-router-dom";
import {Hyphenate} from 'app/services/Hyphenate';

export class GenreMovieComponent extends React.Component {

	// movie
	// vote_count: 7007,
	// id: 198663,
	// video: false,
	// vote_average: 7,
	// title: "The Maze Runner",
	// popularity: 336.631383,
	// poster_path: "/coss7RgL0NH6g4fC2s5atvf3dFO.jpg",
	// original_language: "en",
	// original_title: "The Maze Runner",
	// genre_ids: [
	// ],
	// backdrop_path: "/lkOZcsXcOLZYeJ2YxJd3vSldvU4.jpg",
	// adult: false,
	// overview: "Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow “runners” for a shot at escape.",
	// release_date: "2014-09-10"

	render(){

		let { results } = this.props;

		return (
			<div className={"container-fluid interior-wrapper mb-5"}>
				<div className={"row"}>

					{results.map(function(obj){

						let poster = 'https://image.tmdb.org/t/p/w342' + obj.poster_path;
						let backdrop = 'https://image.tmdb.org/t/p/w300' + obj.backdrop_path;
						let link = '/tv/detail/' + hyphenate.hyphenateAndLowercase(obj.title) + '/' + obj.id;

						return (
							<div key={obj.id} className={"col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5"}>
								<Link to={link}>
									<img src={poster} className={"mb-3"} />
									<h4>{obj.title}</h4>
								</Link>
							</div>
						)
					})}

				</div>
			</div>
		)
	}

}

GenreMovieComponent.defaultProps = {
	results: []
}

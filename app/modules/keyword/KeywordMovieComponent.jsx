import React from 'react';
import { Link } from "react-router-dom";
import {Hyphenate} from 'app/services/Hyphenate';

export class KeywordMovieComponent extends React.Component {

	render(){

		let { results } = this.props;

		return (
			<div className={"container-fluid interior-wrapper mb-5"}>
				<div className={"row"}>

					{results.map(function(obj){

						let poster = 'https://image.tmdb.org/t/p/w342' + obj.poster_path;
						let backdrop = 'https://image.tmdb.org/t/p/w300' + obj.backdrop_path;
						let link = '/movie/detail/' + hyphenate.hyphenateAndLowercase(obj.title) + '/' + obj.id;

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

KeywordMovieComponent.defaultProps = {
	results: []
}

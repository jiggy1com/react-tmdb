import React from 'react';
import { Link } from "react-router-dom";
import {Hyphenate} from 'app/services/Hyphenate';

export class GenreTvComponent extends React.Component {


	// tv
	// original_name: "Arrow",
	// genre_ids: [
	// ],
	// name: "Arrow",
	// popularity: 82.487852,
	// origin_country: [
	// 	"US"
	// ],
	// vote_count: 1618,
	// first_air_date: "2012-10-10",
	// backdrop_path: "/dKxkwAJfGuznW8Hu0mhaDJtna0n.jpg",
	// original_language: "en",
	// id: 1412,
	// vote_average: 6,
	// overview: "Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.",
	// poster_path: "/mo0FP1GxOFZT4UDde7RFDz5APXF.jpg"

	render(){

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

}

GenreTvComponent.defaultProps = {
	results: []
}

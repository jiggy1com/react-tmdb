import React from 'react';
import { Link } from "react-router-dom";

import {Hyphenate} from 'app/services/Hyphenate';
export class TVDetailGenresComponent extends React.Component {

	// badge badge-primary

	render(){
		let { genres } = this.props;

		return (
			<div id={"tv-external-ids"}>

				<div className={"row mb-3"}>
					<div className={"col-12"}>
						<h2 className={"card-header"}>Genres</h2>
					</div>
				</div>

				<div className={"row mb-3"}>
					<div className={"col-12"}>
						{genres.map(function(obj){
							let link = "/genre/tv/" + hyphenate.hyphenateAndLowercase(obj.name) + '/' + obj.id;
							return (
								<Link key={obj.id} to={link}  className={"btn btn-primary mr-1"}>
									{obj.name}
								</Link>
							)
						})}
					</div>
				</div>

			</div>
		);
	}

}

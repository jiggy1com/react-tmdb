import React from 'react';
import { Link } from "react-router-dom";

import {Hyphenate} from 'app/services/Hyphenate';

export class TVDetailKeywordsComponent extends React.Component {

	render(){

		let { keywords } = this.props;

		return (
			<div id={"tv-keywords"}>

				<div className={"row mb-3"}>
					<div className={"col-12"}>
						<h2 className={"card-header"}>Keywords</h2>
					</div>
				</div>

				<div className={"row mb-3"}>
					<div className={"col-12"}>
						{keywords.map(function(obj){

							let link = '/keyword/tv/' + hyphenate.hyphenateAndLowercase(obj.name) + '/' + obj.id;
							return (
								<Link key={obj.id} to={link}  className={"badge badge-primary mr-1"}>
									{obj.name}
								</Link>
							)

						})}
					</div>
				</div>

			</div>
		)
	}

}

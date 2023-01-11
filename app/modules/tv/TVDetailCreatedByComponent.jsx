import React from 'react';
import { Link } from "react-router-dom";

import {CamelCase} from 'app/services/CamelCase';
import {Hyphenate} from 'app/services/Hyphenate';

export class TVDetailCreatedByComponent extends React.Component {

	renderHtml(){

		let { createdBy } = this.props;

		if(createdBy.length === 0){
			return null
		}else{
			return (
				createdBy.map(function(obj){

					let linkName = hyphenate.hyphenate(obj.name);
					let href = '/person/' + linkName + '/' + obj.id;
					let src = '//image.tmdb.org/t/p/' + 'w185' + obj.profile_path;

					return (
						<div key={obj.id} className={"col"}>
							<Link to={href}>
								<img src={src} />
								{obj.name}
							</Link>
						</div>
					)
				})
			)
		}


	}

	render(){

		let html = this.renderHtml();

		return (
			<div id={"tv-created-by"}>
				<div className={"container-fluid"}>
					<div className={"row mb-3"}>
						<div className={"col-12"}>
							<h2 className={"card-header"}>Created By</h2>
						</div>
					</div>
					<div className={"row"}>
						{html}
					</div>
				</div>
			</div>
		)
	}

}

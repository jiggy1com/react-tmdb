import React from 'react';
import { Link } from "react-router-dom";

import {Hyphenate} from 'app/services/Hyphenate';

export class MovieDetailGenresComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			genres : []
		}
		this.hyphenate = new Hyphenate();
	}

	componentWillReceiveProps(nextProps){
		this.setState(nextProps);
	}

	// badge badge-primary

	render(){

		let { genres } = this.state;
		console.log('genres', genres);
		let html;

		if(genres.length === 0){
			html = (
				<span key={"review-span"}>
				</span>
			)
		}else{
			html = genres.map((obj)=>{
				let link = "/genre/movie/" + this.hyphenate.hyphenateAndLowercase(obj.name) + '/' + obj.id;
				return (
					<Link key={obj.id} to={link}
						  className={"btn btn-primary btn-sm mr-1 mb-1"}>
						{obj.name}
					</Link>
				)
			});
		}

		return (
			<div className={"pt-3 pb-3"}>
				<h2 className={"card-header mb-3"}>Genres</h2>
				<div>
					{html}
				</div>
			</div>
		);
	}
}

MovieDetailGenresComponent.defaultProps = {
	genres: []
}

import React from 'react';
import { Link } from "react-router-dom";

export class TVList extends React.Component {

	constructor() {
		super();
		this.state = {
			list : []
		}
	}

	// custom methods
	renderList(){

		let { list } = this.state;

		if(list.length === 0){
			return (
				<div className={"container mb-5"}>
					<div className={"row"}>
						<div className={"col-12 text-center"}>
							<span className={"fa fa-spin fa-spinner fa-4x"}>
							</span>
						</div>
					</div>
				</div>
			)
		}else{
			return list.map(function(obj, idx){
				let src = 'https://image.tmdb.org/t/p/original' + obj.poster_path;
				let link = '/tv/detail/' + obj.name.replace(/\s/g, '-').toLowerCase() + '/' + obj.id;
				return (
					<div key={obj.id} className={"col-6 col-md-4 col-lg-3 mb-5"}>
						<Link to={link}>
							<img src={src} className={"mb-1"}/>
						</Link>
						<h2>
							{obj.original_name}
							</h2>
						{/*<div>*/}
							{/*{obj.overview}*/}
						{/*</div>*/}
					</div>
				)
			});
		}

	}

	// react methods

	componentDidUpdate(arg){

	}

	componentWillReceiveProps(nextProps){
		this.setState(nextProps);
	}

	render(){

		let html = this.renderList();

		return (
			<div>
				<div className={"row mt-3"} id="tv-list">
					{html}
				</div>
			</div>
		)
	}

}

TVList.defaultProps = {
	list: []
}

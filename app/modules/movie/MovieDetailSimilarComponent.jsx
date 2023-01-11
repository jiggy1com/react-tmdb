import React from 'react';
import {HttpService} from 'app/services/HttpService';
import {MovieListComponent} from "MovieModule";

export class MovieDetailSimilarComponent extends React.Component {

	constructor() {
		super();
		this.httpService = new HttpService();
		this.state = {
			page : 0,
			total_pages: 0,
			total_results: 0,
			results: []
		}
	}
	// My Methods

	getSimilar(nextProps){
		let self = this;
		let path = '/api/v1/movie/similar/' + nextProps.movieId;
		this.httpService.doGet(path).then(function(resp){
			self.setState({
				results : resp.data.results,
				total_pages : resp.data.total_pages,
				total_results : resp.data.total_results,
				page: resp.data.page
			});
		});
	}

	// React Methods

	componentWillReceiveProps(nextProps){
		this.setState(nextProps);
		if(nextProps.movieId !== ''){
			this.getSimilar(nextProps);
		}
	}

	shouldComponentUpdate(){
		return true;
	}

	render(){

		let { results } = this.state;

		// console.warn('MovieDetailSimilarComponent results', results);

		return (
			<MovieListComponent results={results}>
			</MovieListComponent>
		)
	}

}

MovieDetailSimilarComponent.defaultProps = {
	movieId: ''
}

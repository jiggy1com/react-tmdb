import React from 'react';
import {HttpService} from 'app/services/HttpService';

export class MovieDetailReleaseDatesComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			results : []
		}
		this.update = true;
	}

	getReleaseDates(nextProps){
		let self = this;
		let { movieId } = nextProps;
		let path = '/api/v1/movie/release-dates/' + movieId;
		httpService.doGet(path).then(function(resp){
			self.setState({
				results : resp.data.results
			});
		});
	}

	renderReleaseDates(releaseDates){

		let self = this;

		return releaseDates.map(function(obj, idx){

			let date = new Date(obj.release_date);
			let dateFormat = (date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear();
			let typeText = self.getReleaseDateType(obj.type);

			return (
				<div key={idx}>
					{dateFormat} {typeText} {obj.note}
					{/*<div>Rated: {obj.certification}</div>*/}
				</div>
			)
		});
	}

	getReleaseDateType(type){
		let types = [
			'',
			'Premier',
			'Theatrical (limited)',
			'Theatrical',
			'Digital',
			'Physical',
			'TV'
		];
		return types[type];
	}

	renderHtml(results){
		if(results.length === 0){
			return (
				<span>
				</span>
			)
		}else{

			this.update = false;

			let releaseDatesList = results.filter(function(obj){
				return obj.iso_3166_1 === 'US';
			});

			return this.renderReleaseDates(releaseDatesList[0].release_dates);

		}
	}

	componentWillReceiveProps(nextProps){
		this.setState(nextProps);
		this.getReleaseDates(nextProps)
	}

	shouldComponentUpdate(nextProps, nextState){
		return this.update;
	}

	render(){

		let { results } = this.state;

		let html = this.renderHtml(results);

		return (
			<div className={"pt-3 pb-3"}>
				<h2 className={"card-header mb-3"}>Release Information</h2>
				<div>
					{html}
				</div>
			</div>
		)
	}

}

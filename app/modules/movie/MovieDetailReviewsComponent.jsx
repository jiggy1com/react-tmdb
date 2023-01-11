import React from 'react';


import {HttpService} from 'app/services/HttpService';

export class MovieDetailReviewsComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			results: []
		}
	}

	componentWillReceiveProps(nextProps){
		this.setState(nextProps);
		this.getMovieReviews(nextProps)
	}

	componentDidMount(){

	}

	getMovieReviews(nextProps){
		let self = this;
		let { movieId } = nextProps;
		let path = '/api/v1/movie/reviews/' + movieId;
		httpService.doGet(path).then(function(resp){
			self.setState({
				page : resp.data.page,
				total_pages : resp.data.total_pages,
				total_results : resp.data.total_results,
				results : resp.data.results
			});
		});
	}

	render(){

		let { results } = this.state;
		let html;

		if(results.length === 0){
			html = (
				<span key={"review-span"}>
					No reviews.
				</span>
				)
		}else{
			html = results.map(function(obj){
				return (
					<div key={obj.id} className={"card mb-3 p-3 review"}>
						<pre>{obj.content}</pre>
						<p>{obj.author}</p>
					</div>
				)
			});
		}

		return (
			<div className={"pt-3 pb-3"}>
				<h2 className={"card-header mb-3"}>Reviews</h2>
				<div>
					{html}
				</div>
			</div>
		);
	}
}

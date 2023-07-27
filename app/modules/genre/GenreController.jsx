import React from 'react';

import {HttpService} from 'app/services/HttpService';
import {CamelCase} from 'app/services/CamelCase';
import { PaginationController } from 'PaginationModule';
import {GenreMovieComponent} from "modules/genre/GenreMovieComponent";
import {GenreTvComponent} from "modules/genre/GenreTvComponent";

export class GenreController extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			page: 0,
			total_results: 0,
			total_pages: 0,
			results : []
		}
		this.getGenreResults({
			page : 1
		});
	}

	// my methods
	// update: false,

	getGenreResults(obj){
		window.scrollTo(0,0);
		let self = this;
		let { page } = obj;
		let { genreType, id } = this.props.params;
		let path = '/api/v1/genre/' + genreType + '/' + id + '/' + page;
		httpService.doGet(path).then(function(resp){
			self.setState({
				page: resp.data.page,
				total_results: resp.data.total_results,
				total_pages: resp.data.total_pages,
				results : resp.data.results
			});
		});
	}

	handleEvent(e){

		console.log('Genre Controller Handle Event', e);

		let { page, total_pages } = this.state;

		let newPage = 	  e.action === 'first' ? 1 									// go to first page
						: e.action === 'last' ? total_pages 						// go to last page
						: (e.action === 'prev' && page > 1) ? page - 1 				// go to previous page
						: (e.action === 'next' && page < total_pages) ? page + 1 	// go to next page
						: (e.action === 'prev' && page < 1) ? page 					// stay on page
						: (e.action === 'next' && page > total_pages) ? page 		// stay on page
						: e.page; // go directly to page

		this.setState({
			results : [],
			page : newPage
		});

		if(page !== newPage){
			// this.update = true;
			this.getGenreResults({
				page : newPage
			});
		}

	}

	// react methods


	render(){

		let { page, total_results, total_pages, results } = this.state;
		let { genreType, genre } = this.props.params;

		return (

			<div>

				<div className={"container-fluid interior-wrapper pt-5 pb-3"}>
					<div className={"row"}>
						<div className={"col-12"}>
							<h1 className={"card-header"}>
								Genre: <CamelCase str={genre} />
							</h1>
						</div>
					</div>
				</div>

				{genreType === 'tv' &&
					<GenreTvComponent results={results} />
				}

				{genreType === 'movie' &&
					<GenreMovieComponent results={results} />
				}

				{typeof results !== 'undefined' && results.length > 0 ?
					<PaginationController
						page={page}
						total_pages={total_pages}
						total_results={total_results}
						notifyParent={this.handleEvent}>
					</PaginationController>
					:
					null
				}

			</div>
		)
	}

}

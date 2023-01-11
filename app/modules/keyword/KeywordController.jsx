import React from 'react';

import {HttpService} from 'app/services/HttpService';
import {CamelCase} from 'app/services/CamelCase';

import { PaginationController } from 'PaginationModule';
import {KeywordMovieComponent, KeywordTvComponent} from "modules/keyword/KeywordModule";

export class KeywordController extends React.Component {

	constructor(props) {
		super(props);
		this.httpService = new HttpService();
		this.state = {
			page: 0,
			total_results: 0,
			total_pages: 0,
			results : []
		}
		this.getResults({
			page : 1
		});
	}


	// my methods
	// update: false,

	getResults(obj){
		window.scrollTo(0,0);
		let self = this;
		let { page } = obj;
		let { keywordType, id } = this.props.params;
		let path = '/api/v1/keyword/' + keywordType + '/' + id + '/' + page;
		this.httpService.doGet(path).then(function(resp){
			self.setState({
				page: resp.data.page,
				total_results: resp.data.total_results,
				total_pages: resp.data.total_pages,
				results : resp.data.results
			});
		});
	}

	handleEvent(e){

		console.log('Keyword Controller Handle Event', e);

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
			this.getResults({
				page : newPage
			});
		}

	}

	// react methods


	render(){

		let { page, total_results, total_pages, results } = this.state;
		let { keywordType, keyword } = this.props.params;

		return (

			<div>

				<div className={"container-fluid interior-wrapper pt-5 pb-3"}>
					<div className={"row"}>
						<div className={"col-12"}>
							<h1 className={"card-header"}>
								Keyword: <CamelCase str={keyword} />
							</h1>
						</div>
					</div>
				</div>

				{keywordType === 'tv' &&
					<KeywordTvComponent results={results} />
				}

				{keywordType === 'movie' &&
					<KeywordMovieComponent results={results} />
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

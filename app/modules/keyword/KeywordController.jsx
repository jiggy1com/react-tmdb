let React = require('react');

let httpService = require('HttpService');
let CamelCase = require('CamelCase');

import { PaginationController } from 'PaginationModule';

let KeywordMovieComponent = require('./KeywordMovieComponent');
let KeywordTvComponent = require('./KeywordTvComponent');

let KeywordController = React.createClass({
	
	// my methods
	// update: false,
	
	getResults: function(obj){
		window.scrollTo(0,0);
		let self = this;
		let { page } = obj;
		let { keywordType, id } = this.props.params;
		let path = '/api/v1/keyword/' + keywordType + '/' + id + '/' + page;
		httpService.doGet(path).then(function(resp){
			self.setState({
				page: resp.data.page,
				total_results: resp.data.total_results,
				total_pages: resp.data.total_pages,
				results : resp.data.results
			});
		});
	},
	
	handleEvent: function(e){
		
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
		
	},
	
	// react methods
	
	getInitialState: function(){
		return {
			page: 0,
			total_results: 0,
			total_pages: 0,
			results : []
		}
	},
	
	componentDidMount: function(){
		this.getResults({
			page : 1
		});
	},
	
	render: function(){
		
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
	
});

module.exports = KeywordController;
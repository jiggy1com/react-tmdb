let React = require('react');

let httpService = require('HttpService');
let CamelCase = require('CamelCase');

import { PaginationController } from 'PaginationModule';

let GenreMovieComponent = require('./GenreMovieComponent');
let GenreTvComponent = require('./GenreTvComponent');

let GenreController = React.createClass({
	
	// my methods
	// update: false,
	
	getGenreResults: function(obj){
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
	},
	
	handleEvent: function(e){
		
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
		this.getGenreResults({
			page : 1
		});
	},
	
	render: function(){
		
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
	
});

module.exports = GenreController;
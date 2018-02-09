let React = require('react');

let httpService = require('HttpService');

let MovieListComponent = require('./MovieListComponent');

import { PaginationController } from '../pagination/PaginationModule';
// import { CamelCase } from 'CamelCase';
let CamelCase = require('CamelCase');

let MovieController = React.createClass({
	
	update : false,
	
	getInitialState: function(){
		return {
			// locals
			pageTitle : '',
			route : '',
			
			// pagination & results
			page : 0,
			total_pages : 0,
			total_results : 0,
			results : []
		}
	},
	
	getDefaultProps: function(){
		return {
			page : 0,
			total_pages : 0,
			total_results : 0,
			results : []
		}
	},
	
	getMovies: function(obj){
		
		let self = this;
		let { page, route } = obj; //this.state;
		
		// let arrLoc = location.pathname.split('/');
		let arrRoute = route.split('/');
		let uri = arrRoute[arrRoute.length-1];
		let apiPath = uri.replace(/-/g, '_');
		let pageTitle = uri.replace(/-/g, ' ');
		
		this.setState({
			pageTitle : pageTitle
		});
		
		if(obj){
			page = obj.page;
		}
		
		if(page === 0){
			page = 1;
		}
		
		let path = '/api/v1/movie/' + apiPath + '/' + page;
		httpService.doGet(path).then(function(resp){
			if(resp.success){
				self.update = true;
				self.setState({
					page : resp.data.page,
					total_pages : resp.data.total_pages,
					total_results : resp.data.total_results,
					results : resp.data.results
				});
			}else{
			
			}
		});
	},
	
	componentWillMount: function(){
		// console.log('MovieController componentWillMount state', this.state);
		// console.log('MovieController componentWillMount props', this.props);
		this.setState({
			route : this.props.location.pathname,
		});
	},
	
	componentWillReceiveProps: function(nextProps){
		// console.log('MovieController componentWillReceiveProps', nextProps);
	},
	
	componentDidMount:function(){
		// console.log('MovieController componentDidMount', this.props);
		// console.log('MovieController componentDidMount', this.state);
		let { route } = this.state;
		this.getMovies({
			page : 1,
			route : route
		});
	},
	
	shouldComponentUpdate: function(nextProps, nextState){
		
		// console.log('MovieController shouldComponentUpdate', nextProps, nextState);
		// console.log('## compare state', this.state.route);
		// console.log('## compare to', nextState.route);
		// console.log('## compare props', this.props);
		// console.log('## compare to', nextProps);
		// console.log('update', this.update);
		
		if(this.props.location.pathname !== nextProps.location.pathname){
			this.getMovies({
				page : 1,
				route : nextProps.location.pathname
			});
			return true;
		}else{
			if(this.update){
				this.update = false;
				return true;
			}else{
				return false;
			}
		}
	},
	
	handleEvent:function(e){
		
		let { page, total_pages, route } = this.state;
		
		let newPage = e.action === 'first' ? 1 									// go to first page
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
			
			this.update = true;
			
			this.getMovies({
				page : newPage,
				route : route
			});
			
		}
		
	},
	
	render: function(){
		
		let { page, total_pages, total_results, results, pageTitle } = this.state;
		
		return (
			
			<div>
				<div className={"container-fluid interior-wrapper pt-5 pb-3"}>
					<div className={"row"}>
						<div className={"col-12"}>
							<h1 className={'card-header'}>
								Movies: <CamelCase str={pageTitle}>
										</CamelCase>
							</h1>
						</div>
					</div>
				</div>
				
				<MovieListComponent results={results}>
				</MovieListComponent>
				
				{results.length > 0 &&
					<PaginationController
						page={page}
						total_pages={total_pages}
						total_results={total_results}
						notifyParent={this.handleEvent}>
					</PaginationController>
				}
			
			</div>
			
		);
	}
});

module.exports = MovieController;
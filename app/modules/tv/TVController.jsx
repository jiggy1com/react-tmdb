let React = require('react');
let httpService = require('HttpService');
let TVList = require('./TVList');
let CamelCase = require('CamelCase');
import { PaginationController } from 'PaginationModule';

let TVController = React.createClass({
	
	update: false,
	
	
	// custom methods
	getTVData: function(obj){
		
		window.scrollTo(0,0);
		
		let self = this;
		let { page, route } = obj;
		
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
		// let path = '/api/v1' + this.props.location.pathname.replace(/-/g, '_') + '/' + obj.page;
		if(page === 0){
			page = 1;
		}
		
		let path = '/api/v1/tv/' + apiPath + '/' + page;
		
		// console.log('path', path);
		httpService.doGet(path).then(function(resp){
			self.update = true;
			self.setState({
				page : resp.data.page,
				total_pages : resp.data.total_pages,
				total_results : resp.data.total_results,
				results : resp.data.results
			});
		});
	},
	
	handleEvent: function(e){
		
		console.log('TV Controller Handle Event', e);
		
		let { page, total_pages, route } = this.state;
		
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
			
			this.update = true;
			
			this.getTVData({
				page : newPage,
				route : route
			});
			
		}
		
	},
	
	// react methods
	
	getInitialState: function(){
		return {
			// locals
			pageTitle : '',
			route : '',
			
			page : 0,
			total_pages : 0,
			total_results : 0,
			results : []
			
			// results
			// data : {
			// 	page : 1,
			// 	results : [],
			// 	total_pages : 0,
			// 	total_results : 0
			// }
		}
	},
	
	componentWillMount: function(){
		// let { data } = this.state;
		// this.getTVData(data);
		this.setState({
			route : this.props.location.pathname,
		});
	},
	
	componentDidMount: function(){
		let { route } = this.state;
		this.getTVData({
			page : 1,
			route: route
		});
	},
	
	componentWillUpdate: function(){
	
	},
	
	shouldComponentUpdate: function(nextProps, nextState){
		
		// console.log('MovieController shouldComponentUpdate', nextProps, nextState);
		// console.log('## compare state', this.state.route);
		// console.log('## compare to', nextState.route);
		// console.log('## compare props', this.props);
		// console.log('## compare to', nextProps);
		// console.log('update', this.update);
		
		if(this.props.location.pathname !== nextProps.location.pathname){
			this.getTVData({
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
	
	render: function(){
		
		let { data, page, total_pages, total_results, results, pageTitle } = this.state;
		
		
		// let { data } = this.state;
		// let { location } = this.props;
		
		// let locArray = location.pathname.split('/');
		// let category = locArray[locArray.length-1];
		
		console.log('render data', data);
		
		return (
			<div className={"container-fluid interior-wrapper mt-5 mb-5"}>
				
				<h1 className={"card-header"}>
					TV: <CamelCase str={pageTitle}>
						</CamelCase>
				</h1>
				
				<TVList
					list={results}>
				</TVList>
				
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

module.exports = TVController;
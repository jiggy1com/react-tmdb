import React from 'react';
import {HttpService} from 'app/services/HttpService';
// import MovieListComponent from "MovieModule";
import {MovieListComponent} from "modules/movie/MovieListComponent";
import { PaginationController } from 'app/modules/pagination/PaginationModule';
import {CamelCase} from 'app/services/CamelCase';

export class MovieController extends React.Component {

	constructor(props) {
		super(props);
		this.httpService = new HttpService();
		this.state = {
			// locals
			pageTitle : '',
			route : '',

			// pagination & results
			page : 0,
			total_pages : 0,
			total_results : 0,
			results : [],
			update: false,
		}
	}

	getMovies(obj){

		window.scrollTo(0,0);

		let self = this;
		let { page, route } = obj; //this.state;

		// let arrLoc = location.pathname.split('/');
		let arrRoute = route.split('/');
		let uri = arrRoute[arrRoute.length-1];
		let apiPath = uri.replace(/-/g, '_');
		let pageTitle = uri.replace(/-/g, ' ');

		this.setState((state,props)=>{
			return {
				pageTitle: pageTitle
			}
		})

		if(obj){
			page = obj.page;
		}

		if(page === 0){
			page = 1;
		}

		let path = '/api/v1/movie/' + apiPath + '/' + page;
		this.httpService.doGet(path).then((resp) => {
			if(resp.success){
				this.setState((state, props)=>{
					return {
						page : resp.data.page,
						total_pages : resp.data.total_pages,
						total_results : resp.data.total_results,
						results : resp.data.results,
						update: true,
					}
				});
			}else{

			}
		});
	}

	componentWillMount(){
		this.setState((state, props)=>{
			return {
				route : document.location.pathname
			}
		});
	}

	componentWillReceiveProps(nextProps){
		// console.log('MovieController componentWillReceiveProps', nextProps);
	}

	componentDidMount(){
		let { route } = this.state;
		this.getMovies({
			page : 1,
			route : route
		});
	}

	shouldComponentUpdate(nextProps, nextState){

		// console.log('MovieController shouldComponentUpdate', nextProps, nextState);
		// console.log('## compare state', this.state.route);
		// console.log('## compare to', nextState.route);
		// console.log('## compare props', this.props);
		// console.log('## compare to', nextProps);
		// console.log('update', this.update);

		if (this.state.route !== document.location.pathname) {
			this.setState((state, props) => {
				return {
					route: document.location.pathname
				}
			}, () => {
				this.getMovies({
					page: 1,
					route: this.state.route
				});
			})
			return false;
		}
		if (nextState.update) {
			this.setState((state, props) => {
				return {
					update: false
				}
			});
			return true;
		} else {
			return false;
		}
	}

	handleEvent(e){

		let { page, total_pages, route } = this.state;

		let newPage = e.action === 'first' ? 1 									// go to first page
					: e.action === 'last' ? total_pages 						// go to last page
					: (e.action === 'prev' && page > 1) ? page - 1 				// go to previous page
					: (e.action === 'next' && page < total_pages) ? page + 1 	// go to next page
					: (e.action === 'prev' && page < 1) ? page 					// stay on page
					: (e.action === 'next' && page > total_pages) ? page 		// stay on page
					: e.page; // go directly to page


		// this.setState((state, props)=>{
		// 	return {
		// 		results : [],
		// 		page : newPage
		// 	}
		// });

		if(page !== newPage){

			this.setState((state, props)=>{
				return {
					update: true
				}
			});

			this.getMovies({
				page : newPage,
				route : route
			});

		}

	}

	render(){

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
						notifyParent={this.handleEvent.bind(this)}>
					</PaginationController>
				}

			</div>

		);
	}
}

MovieController.defaultProps = {
	page : 0,
	total_pages : 0,
	total_results : 0,
	results : []
}

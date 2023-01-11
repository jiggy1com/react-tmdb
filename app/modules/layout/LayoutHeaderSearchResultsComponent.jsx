import React from 'react';
import { Link } from "react-router-dom";
import {Hyphenate} from 'app/services/Hyphenate';

export class LayoutHeaderSearchResultsComponent extends React.Component {

	constructor() {
		super();
		this.state = {
			movieList : [],
			tvList: [],
			personList: [],
			search: ''
		}
	}

	// componentWillReceiveProps(nextProps){
	// 	// this.filterResults(nextProps);
	// 	this.setState({
	// 		movieList: nextProps.movieList,
	// 		tvList: nextProps.tvList,
	// 		personList: nextProps.personList,
	// 		search: nextProps.search
	// 	});
	// }

	renderMovieList(){
		let { movieList, search } = this.state;
		let { onClose } = this.props;

		if(movieList.length === 0){
			return (
				<div>
					Sorry, no results for {search}.
				</div>
			)
		}else{
			return movieList.map(function(obj, idx){
				let href = '/movie/detail/' + hyphenate.hyphenateAndLowercase(obj.title) + '/' + obj.id;
				return (
					<li key={idx} className={"text-light"}>
						<Link to={href} onClick={onClose} className={"text-light"}>
							{obj.title}
						</Link>
					</li>
				)
			});
		}
	}

	renderTvList(){
		let { tvList, search } = this.state;
		let { onClose } = this.props;

		if(tvList.length === 0){
			return (
				<div>
					Sorry, no results for {search}.
				</div>
			)
		}else{
			return tvList.map(function(obj, idx){
				let href = '/tv/detail/' + hyphenate.hyphenateAndLowercase(obj.name) + '/' + obj.id;
				return (
					<li key={idx} className={"text-light"}>
						<Link to={href} onClick={onClose} className={"text-light"}>
							{obj.name}
						</Link>
					</li>
				)
			});
		}
	}

	renderPersonList(){
		let { personList, search } = this.state;
		let { onClose } = this.props;

		if(personList.length === 0){
			return (
				<div>
					Sorry, no results for {search}.
				</div>
			)
		}else{
			return personList.map(function(obj, idx){
				let href = '/person/' + hyphenate.hyphenateAndLowercase(obj.name) + '/' + obj.id;
				return (
					<li key={idx} className={"text-light"}>
						<Link to={href} onClick={onClose} className={"text-light"}>
							{obj.name}
						</Link>
					</li>
				)
			});
		}
	}

	render(){

		let movieHtml = this.renderMovieList();
		let tvHtml = this.renderTvList();
		let personHtml = this.renderPersonList();
		let { movieList, tvList, personList } = this.props;

		if(movieList.length === 0 && tvList.length === 0 && personList.length === 0){
			return (
				<div>
				</div>
			)
		}else{
			return (
				<div id="search-results" className={"mt-3"}>
					<div className={"container"}>
						<div className={"row"}>
							<div className={"col"}>
								<h2 className={"text-light"}>Movies</h2>
								<ul>
									{movieHtml}
								</ul>
							</div>
							<div className={"col"}>
								<h2 className={"text-light"}>TV Shows</h2>
								<ul>
									{tvHtml}
								</ul>
							</div>
							<div className={"col"}>
								<h2 className={"text-light"}>Actors</h2>
								<ul>
									{personHtml}
								</ul>
							</div>
						</div>
					</div>
				</div>
			)
		}


	}
}

// static property
LayoutHeaderSearchResultsComponent.defaultProps = {
	movieList: [],
	tvList: [],
	personList: [],
	search: '',
	onClose (){
		console.log('close was not passed in. This prop should be passed in to override THIS default prop.');
	}
}

// LayoutHeaderSearchResultsComponent.getDerivedStateFromProps = function(props, state){
// 	setState({
// 		movieList: nextProps.movieList,
// 		tvList: nextProps.tvList,
// 		personList: nextProps.personList,
// 		search: nextProps.search
// 	});
// }

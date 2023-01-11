import React from 'react';
import {PaginationPageComponent} from "PaginationModule";

export class PaginationPagesComponent extends React.Component {

	handlePageComponentEvent(e){
		this.props.handler({
			page : e.page
		});
	}

	render(){

		let self = this;

		let { page, pageArray, handler } = this.props;

		if(pageArray.length < 1){
			return (
				<span>
				</span>
			)
		}else{

			let pageListHtml = pageArray.map(function(pageNumber) {
				return (

					<PaginationPageComponent key={pageNumber} page={page} pageNumber={pageNumber} handler={self.handlePageComponentEvent}>
					</PaginationPageComponent>
				)
			});

			return (
				<span>
					{pageListHtml}
				</span>
			)
		}


	}
}

import React from 'react';
import {PaginationPageComponent} from "PaginationModule";

export class PaginationPagesComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	handlePageComponentEvent(e){
		this.props.handler({
			page : e.page
		});
	}

	render(){

		let { page, pageArray, handler } = this.props;

		if(pageArray.length < 1){
			return (
				<span>
				</span>
			)
		}else{

			let pageListHtml = pageArray.map((pageNumber) => {
				return (

					<PaginationPageComponent
						key={pageNumber}
						page={page}
						pageNumber={pageNumber}
						handler={this.handlePageComponentEvent.bind(this)}>
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

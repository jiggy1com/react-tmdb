import React from 'react';

export class PaginationPageComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	notifyPaginationPagesComponent(){
		this.props.handler({
			page : this.props.pageNumber,
		});
	}

	render(){

		let { page, pageNumber } = this.props;

		let thisClass = page === pageNumber ? 'btn btn-info' : 'btn btn-primary';

		return (
			<button key={pageNumber}
					className={thisClass}
					onClick={this.notifyPaginationPagesComponent.bind(this)}>
				{this.props.pageNumber}
			</button>
		);
	}
}

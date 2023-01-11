import React from 'react';

export class PaginationLastComponent extends React.Component {
	render(){
		return (
			<button className={"btn btn-primary"} onClick={this.props.handler}>
				<span className={"fa fa-chevron-right"}></span>
				<span className={"fa fa-chevron-right"}></span>
			</button>
		);
	}
}

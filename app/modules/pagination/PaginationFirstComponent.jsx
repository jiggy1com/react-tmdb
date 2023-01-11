import React from 'react';

export class PaginationFirstComponent extends React.Component {
	render(){
		return (
			<button className={"btn btn-primary"} onClick={this.props.handler}>
				<span className={"fa fa-chevron-left"}></span>
				<span className={"fa fa-chevron-left"}></span>
			</button>
		);
	}
}

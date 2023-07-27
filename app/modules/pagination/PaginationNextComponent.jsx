import React from 'react';

export class PaginationNextComponent extends React.Component {
	render(){
		return (
			<button className={"btn btn-primary"} onClick={this.props.handler}>
				<span className={"fa fa-chevron-right fa-solid fa-house"}></span>
			</button>
		);
	}
}

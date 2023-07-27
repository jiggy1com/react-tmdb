import React from 'react';

export class PersonComponent extends React.Component {
	render(){

		let { heading } = this.props;

		return (
			<div className={"card mb-5"}>
				<h3 className={"card-header"}>
					{heading}
				</h3>
				<div className={"card-body"}>
					{this.props.children}
				</div>
			</div>
		)
	}
}

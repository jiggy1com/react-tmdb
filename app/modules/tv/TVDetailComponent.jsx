import React from 'react';

export class TVDetailComponent extends React.Component {
	render(){
		return (
			<div className={"card mb-5"}>
				<div className={"card-body"}>
					{this.props.children}
				</div>
			</div>
		)
	}
}

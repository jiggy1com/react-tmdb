/* DEPRECATED */

import React from 'react';

export class PersonMovieCreditsComponent extends React.Component {

	render(){

		let { heading } = this.props;

		return (
			<div>
				<h1>{heading}</h1>
			</div>
		)
	}

}

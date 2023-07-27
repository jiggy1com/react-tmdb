import React from 'react';

export class TVDetailLanguagesComponent extends React.Component {

	render(){

		let { languages } = this.props;

		return (
			<div id={"tv-external-ids"}>

				<div className={"row mb-3"}>
					<div className={"col-12"}>
						<h2 className={"card-header"}>Languages</h2>
					</div>
				</div>

				<div className={"row mb-3"}>
					<div className={"col-12"}>
						{languages.map(function(val){
							return (
								<div key={val}>
									{val}
								</div>
							)
						})}
					</div>
				</div>

			</div>
		)
	}

}

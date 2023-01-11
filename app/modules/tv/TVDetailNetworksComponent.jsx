import React from 'react';

export class TVDetailNetworksComponent extends React.Component {

	render(){

		let { networks } = this.props;

		return (
			<div id={"tv-external-ids"}>

				<div className={"row mb-3"}>
					<div className={"col-12"}>
						<h2 className={"card-header"}>Networks</h2>
					</div>
				</div>

				<div className={"row mb-3"}>
					<div className={"col-12"}>
						{networks.map(function(obj){
							return (
								<div key={obj.id}>
									{obj.name}
								</div>
							)
						})}
					</div>
				</div>

			</div>
		)
	}

}

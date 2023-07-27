import React from 'react';

export class TVDetailContentRatingsComponents extends React.Component {

	renderHtml(){

		let { contentRatings } = this.props;

		if(contentRatings.length === 0){
			return null
		}else{
			return contentRatings.map(function(obj){
				return (
					<div key={obj.iso_3166_1} className={"col-2 mb-3"}>
						<div>
							Country: <strong>{obj.iso_3166_1}</strong>
						</div>
						<div>
							Rating: {obj.rating}
						</div>
					</div>
				)
			})
		}

	}

	render(){

		let html = this.renderHtml();

		return (
			<div id={"tv-content-ratings"}>

				<div className={"row mb-3"}>
					<div className={"col-12"}>
						<h2 className={"card-header"}>Content Ratings</h2>
					</div>
				</div>

				<div className={"row"}>
					{html}
				</div>

			</div>
		)
	}

}

TVDetailContentRatingsComponents.defaultProps = {
	contentRatings : []
}

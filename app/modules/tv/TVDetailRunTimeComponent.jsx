let React = require('react');

let TVDetailRunTimeComponent = React.createClass({
	
	render: function(){
		
		let { episodeRunTime } = this.props;
		

		return (
			<div id={"tv-external-ids"}>
				
				<div className={"row mb-3"}>
					<div className={"col-12"}>
						<h2 className={"card-header"}>Runtime</h2>
					</div>
				</div>
				
				<div className={"row mb-3"}>
					<div className={"col-12"}>
						{episodeRunTime.map(function(runtime, idx){
							return (
								<div key={idx}>
									{runtime} minutes
								</div>
							)
						})}
					</div>
				</div>
				
			</div>
		)
		
	}
	
});

module.exports = TVDetailRunTimeComponent;
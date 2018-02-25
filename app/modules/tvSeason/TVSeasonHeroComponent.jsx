let React = require('react');
let BreakpointService = require('BreakpointService');

let TVSeasonHeroComponent = React.createClass({

	localBreakpointService: null,
	
	handleBreakpointChange: function(breakpoint){
		this.setState({
			breakpoint: breakpoint
		});
	},
	
	getInitialState: function(){
		return {
			breakpoint : ''
		}
	},
	
	componentDidMount: function(){
		this.localBreakpointService = new BreakpointService();
		this.localBreakpointService.init({
			onChange: this.handleBreakpointChange
		});
	},
	
	render: function(){
		
		let { breakpoint } = this.state;
		let { data } = this.props;
		let posterImage = 'https://image.tmdb.org/t/p/w500' + data.poster_path;
		
		let heroClass = breakpoint === 'xs' || breakpoint === 'sm' ? '' : 'mb-5';
		let heroTextClass = breakpoint === 'xs' || breakpoint === 'sm' ? 'p-5' : 'pt-3 pr-5';

		return (
			<div className={"tv-season-hero " + heroClass}>
				<div className={""}>
					<div className={"row"}>
						<div className={"col-xs-12 col-sm-12 col-md-6"}>
							{data.poster_path !== '' &&
								<img src={posterImage}/>
							}
						</div>
						<div className={"col-xs-12 col-sm-12 col-md-6 " + heroTextClass}>
							<h1 className={"display-4"}>{data.name}</h1>
							<p className={"lead"}>{data.overview}</p>
							<p>Air Date: {data.air_date}</p>
						</div>
					</div>
				</div>
			</div>
		)
		
	}
	
	
});

module.exports = TVSeasonHeroComponent;
import React from 'react';
import { Link } from "react-router-dom";

import {BreakpointService} from "BreakpointService";

export class PersonHeroComponent extends React.Component {

	constructor(props) {
		super(props);
		this.currentBreakpoint = '';
		this.breakpointService = new BreakpointService();
		this.state = {
			breakpoint : ''
		}
	}

	// my methods

	handleBreakpointChange(breakpoint){
		console.log('handleBreakpointChange heard', breakpoint);
		if(this.currentBreakpoint !== breakpoint){
			console.log('updating breakpoint');
			this.currentBreakpoint = breakpoint;
			this.setState({
				breakpoint : breakpoint
			});
		}
	}


	getGender(gender){
		return gender === 1 ? 'Female'
			: gender === 2 ? 'Male'
				: null;
	}

	// react methods

	componentWillMount(){
		// this.setState here is OK, but not recommended
		// let b = new BreakpointService();
		this.breakpointService.init({
			onChange: this.handleBreakpointChange
		});
	}

	render(){

		let { person } = this.props;
		let { breakpoint } = this.state;

		let src = '//image.tmdb.org/t/p/' + 'h632' + person.profile_path;

		let preStyle = {
			'whiteSpace': 'pre-line',
			'fontFamily' : 'inherit'
		};

		let personHeroClass = breakpoint === 'xs' || breakpoint === 'sm'
							? 'pt-3'
							: 'pt-5 pr-5 pl-5';

		let imgClass = breakpoint === 'xs' || breakpoint === 'sm'
					? ''
					: 'mr-5';

		let imdbLink = 'http://www.imdb.com/name/' + person.imdb_id + '/';
		let gender = this.getGender(person.gender);

		return (
			<div id={"person-hero"} className={"mb-5 " + personHeroClass}>

				<div className={"person-hero-guts"}>

					<div className={"container-fluid"}>
						<div className={"row"}>
							<div className={"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"}>

								{person.profile_path !== '' && person.profile_path !== null &&
									<img src={src} className={"d-block rounded mb-3 " + imgClass} />
								}

								<Link to={imdbLink} target={"_blank"} className={"btn btn-primary btn-block mb-3"}>
									View on IMDB
								</Link>

							</div>
							<div className={"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"}>

								<h1>{person.name}</h1>

								<div>
									Sex: {gender}
								</div>

								<div>
									Born {person.birthday} in {person.place_of_birth}.
								</div>

								{person.deathday !== null &&
								<div>
									Deceased {person.deathday}
								</div>
								}

								{person.also_known_as.length > 0 &&
								<div>
									Also known as:
									<ul>
										{person.also_known_as.map(function(name, idx){
											return (
												<li key={idx}>{name}</li>
											)
										})}
									</ul>
								</div>
								}

								<pre style={preStyle}>{person.biography}</pre>

							</div>
						</div>
					</div>

				</div>

			</div>
		)
	}

}

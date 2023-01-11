import React from 'react';
import {HttpService} from 'app/services/HttpService';
import {ExternalIdsComponent} from "../../components/ExternalIdsComponent";
import {PersonComponent,
	PersonCombinedCreditsComponent,
	PersonExternalIdsComponent,
	PersonHeroComponent,
	PersonImagesComponent,
	PersonMovieCreditsComponent,
	PersonTaggedImagesComponent,
	PersonTVCreditsComponent} from "PersonModule";

export class PersonController extends React.Component {

	constructor(props) {
		super(props);
		this.httpService = new HttpService();
		this.state = {
			person : {
				"birthday": null,
				"deathday": null,
				"id": null,
				"name": null,
				"also_known_as": [],
				"gender": null,
				"biography": null,
				"popularity": null,
				"place_of_birth": null,
				"profile_path": null,
				"adult": false,
				"imdb_id": null,
				"homepage": null,

				// movie credits
				movie_credits : {
					cast : [],
					crew : []
				},

				// tv credits
				tv_credits : {
					cast : [],
					crew : []
				},

				// combined credits
				combined_credits : {
					cast : [],
					crew : []
				},

				// external_ids
				external_ids: {
					freebase_id: null,
					instagram_id: null,
					tvdb_id: null,
					tvrage_id: null,
					twitter_id: null,
					freebase_mid: null,
					imdb_id: null,
					facebook_id: null
				},

				// images
				images : {
					profiles : []
				},

				// tagged images
				tagged_images: {
					results : []
				}

			}
		}
	}

	// my methods

	getPerson(id) {

		window.scrollTo(0,0);

		let self = this;
		let path = '/api/v1/person/' + id;
		this.httpService.doGet(path).then(function (resp) {
			self.setState({
				person : resp.data
			});
		});
	}

	// react methods

	componentWillMount(){
		let { id } = this.props.params;
		this.getPerson(id);
	}

	componentDidMount(){
		// let { location } = this.props;
		// let pathname = location.pathname;
		// let arrPath = pathname.split('/');
		// let personId = arrPath[ arrPath.length-1 ];
		// this.getPerson(personId);
		// this.getPerson();
	}

	componentWillReceiveProps(nextProps){
		let { id } = nextProps.params;
		this.getPerson(id);
	}

	render(){

		let { person } = this.state;

		// 0: not set 1: Female 2: Male

		return (
			<div id="person">

				{/* hero */}

				<PersonHeroComponent person={person}>
				</PersonHeroComponent>

				<div className={"container-fluid interior-wrapper"}>

					{/* Images */}

					<PersonComponent heading={"Images"}>
						<PersonImagesComponent images={person.images.profiles} type={"images"}>
						</PersonImagesComponent>
					</PersonComponent>

					<PersonComponent heading={"Tagged Images"}>
						<PersonImagesComponent images={person.tagged_images.results} type={"tagged_images"}>
						</PersonImagesComponent>
					</PersonComponent>

					{/* Credits */}

					<PersonComponent heading={"Movie Cast Credits"}>
						<PersonImagesComponent images={person.movie_credits.cast} creditType={"movie"} type={"cast"}>
						</PersonImagesComponent>
					</PersonComponent>

					<PersonComponent heading={"Movie Crew Credits"}>
						<PersonImagesComponent images={person.movie_credits.crew} creditType={"movie"} type={"crew"}>
						</PersonImagesComponent>
					</PersonComponent>

					<PersonComponent heading={"TV Cast Credits"}>
						<PersonImagesComponent images={person.tv_credits.cast} creditType={"tv"} type={"cast"}>
						</PersonImagesComponent>
					</PersonComponent>

					<PersonComponent heading={"TV Crew Credits"}>
						<PersonImagesComponent images={person.tv_credits.crew} creditType={"tv"} type={"crew"}>
						</PersonImagesComponent>
					</PersonComponent>

					{/* External Ids */}

					<PersonComponent heading={"External IDs"}>
						<ExternalIdsComponent externalIds={person.external_ids}>
						</ExternalIdsComponent>
					</PersonComponent>

				</div>

			</div>
		)
	}
}

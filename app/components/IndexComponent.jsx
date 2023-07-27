import React from 'react';

import { Link } from "react-router-dom";

export class IndexComponent extends React.Component {

	render(){

		return (
			<div className={"container-fluid interior-wrapper"}>

				<div className={"jumbotron mr-0 ml-0"}>

					<h1>TMDB with React ... just a little project by Joe Velez</h1>

					<p className="lead">
						This project uses React and Bootstrap 4 on the frontend, and NodeJS on the backend.
						The backend connects to the themoviedb.org open API to pull movie data.
						Ok, that's enough for now. Start browsing!
					</p>

				</div>

				<div className={"row"}>
					<div className={"col-12 pt-5 pb-5"}>

						<h2 className={"mt-3 mb-3"}>Movies</h2>

						<div className={"row"}>
							<div className={"col-6 col-md-3"}>
								<Link to='/movie/popular' className={"btn btn-primary btn-block"}>
									Popular Movies
								</Link>
							</div>
							<div className={"col-6 col-md-3"}>
								<Link to='/movie/top-rated' className={"btn btn-primary btn-block"}>
									Top Rated Movies
								</Link>
							</div>
							<div className={"col-6 col-md-3"}>
								<Link to='/movie/now-playing' className={"btn btn-primary btn-block"}>
									Now Playing Movies
								</Link>
							</div>
							<div className={"col-6 col-md-3"}>
								<Link to='/movie/upcoming' className={"btn btn-primary btn-block"}>
									Upcoming Movies
								</Link>
							</div>
						</div>

						<h2 className={"mt-3 mb-3"}>TV</h2>

						<div className={"row"}>
							<div className={"col-6 col-md-3"}>
								<Link to='/tv/popular' className={"btn btn-primary btn-block"}>
									Popular TV
								</Link>
							</div>
							<div className={"col-6 col-md-3"}>
								<Link to='/tv/top-rated' className={"btn btn-primary btn-block"}>
									Top Rated TV
								</Link>
							</div>
							<div className={"col-6 col-md-3"}>
								<Link to='/tv/on-the-air' className={"btn btn-primary btn-block"}>
									On The Air
								</Link>
							</div>
							<div className={"col-6 col-md-3"}>
								<Link to='/tv/airing-today' className={"btn btn-primary btn-block"}>
									Airing Today
								</Link>
							</div>
						</div>

						{/* Jumbotron of top 3-6 TV and Movies */}

						{/* Featured Lists (whatever this is)
						<h2>Featured Lists</h2>
						*/}

						{/* Top Users (whatever this is)
						<h2>Top Users</h2>
						*/}

					</div>
				</div>
			</div>
		);
	}
}

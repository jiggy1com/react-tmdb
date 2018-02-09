let React = require('react');

let IndexComponent = React.createClass({
	
	render: function(){
		
		return (
			<div className={"container-fluid interior-wrapper"}>
				
				<div className={"jumbotron"}>
					
					<h1>TMDB with React ... just a little project by Joe Velez</h1>
					
					<p class="lead">
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
								<a href='#/movie/popular' className={"btn btn-primary btn-block"}>
									Popular Movies
								</a>
							</div>
							<div className={"col-6 col-md-3"}>
								<a href='#/movie/top-rated' className={"btn btn-primary btn-block"}>
									Top Rated Movies
								</a>
							</div>
							<div className={"col-6 col-md-3"}>
								<a href='#/movie/now-playing' className={"btn btn-primary btn-block"}>
									Now Playing Movies
								</a>
							</div>
							<div className={"col-6 col-md-3"}>
								<a href='#/movie/upcoming' className={"btn btn-primary btn-block"}>
									Upcoming Movies
								</a>
							</div>
						</div>
						
						<h2 className={"mt-3 mb-3"}>TV</h2>
						
						<div className={"row"}>
							<div className={"col-6 col-md-3"}>
								<a href='#/tv/popular' className={"btn btn-primary btn-block"}>
									Popular TV
								</a>
							</div>
							<div className={"col-6 col-md-3"}>
								<a href='#/tv/top-rated' className={"btn btn-primary btn-block"}>
									Top Rated TV
								</a>
							</div>
							<div className={"col-6 col-md-3"}>
								<a href='#/tv/on-the-air' className={"btn btn-primary btn-block"}>
									On The Air
								</a>
							</div>
							<div className={"col-6 col-md-3"}>
								<a href='#/tv/airing-today' className={"btn btn-primary btn-block"}>
									Airing Today
								</a>
							</div>
						</div>
						
						{/* Jumbotron of top 3-6 TV and Movies */}
						
						{/* Featured Lists (whatever this is) */}
						<h2>Featured Lists</h2>
						
						{/* Top Users (whatever this is) */}
						<h2>Top Users</h2>
						
					</div>
				</div>
			</div>
		);
	}
});

module.exports = IndexComponent;
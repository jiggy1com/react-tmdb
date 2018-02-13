let React = require('react');


// IMDb ID - http://www.imdb.com/title/tt0898266/
// TVDB ID - https://www.thetvdb.com/index.php?tab=series&id=73529
// Facebook - https://www.facebook.com/TheBigBangTheory/
// Instagram - https://www.instagram.com/bigbangtheory_cbs/
// Twitter - https://twitter.com/bigbangtheory

let TVDetailExternalIdsComponent = React.createClass({
	
	// renderHtml: function(){
	// 	let { externalIds } = this.props;
	//
	// 	let imdbLink = 'http://www.imdb.com/title/' + externalIds.imdb_id;
	// 	let tvdbLink = 'https://www.thetvdb.com/index.php?tab=series&id=' + externalIds.tvdb_id;
	// 	let facebookLink = 'https://www.facebook.com' + externalIds.facebook_id;
	// 	let instagramLink = 'https://www.instagram.com' + externalIds.instagram_id;
	// 	let twitterLink = 'https://twitter.com/' + externalIds.twitter_id;
	//
	// 	return (
	// 		<div>
	//
	// 			{externalIds.imdb_id !== '' &&
	// 				<div className={"col text-center"}>
	// 					<a href={imdbLink} target="_blank" title={"IMDB"}>
	// 						<span className={"mr-3 fa fa-4x fa-imdb"}>
	// 						</span>
	// 					</a>
	// 				</div>
	// 			}
	//
	// 			{externalIds.tvdb_id !== '' &&
	// 				<div className={"col text-center"}>
	// 					<a href={tvdbLink} target="_blank" title={"TVDB"}>
	// 						<span className={"mr-3 fa fa-4x fa-tv"}>
	// 						</span>
	// 					</a>
	// 				</div>
	// 			}
	//
	// 			{externalIds.facebook_id !== '' &&
	// 				<div className={"col text-center"}>
	// 					<a href={facebookLink} target="_blank" title={"Facebook"}>
	// 						<span className={"mr-3 fa fa-4x fa-facebook"}>
	// 						</span>
	// 					</a>
	// 				</div>
	// 			}
	//
	// 			{externalIds.twitter_id !== '' &&
	// 				<div className={"col text-center"}>
	// 					<a href={twitterLink} target="_blank" title={"Twitter"}>
	// 							<span className={"mr-3 fa fa-4x fa-twitter"}>
	// 							</span>
	// 					</a>
	// 				</div>
	// 			}
	//
	// 			{externalIds.instagram_id !== '' &&
	// 				<div className={"col text-center"}>
	// 					<a href={instagramLink} target="_blank" title={"Instagram"}>
	// 						<span className={"mr-3 fa fa-4x fa-instagram"}>
	// 						</span>
	// 					</a>
	// 				</div>
	// 			}
	//
	// 		</div>
	// 	)
	// },
	
	render: function(){
		
		let { externalIds } = this.props;
		
		let imdbLink = 'http://www.imdb.com/title/' + externalIds.imdb_id;
		let tvdbLink = 'https://www.thetvdb.com/index.php?tab=series&id=' + externalIds.tvdb_id;
		let facebookLink = 'https://www.facebook.com/' + externalIds.facebook_id;
		let instagramLink = 'https://www.instagram.com/' + externalIds.instagram_id;
		let twitterLink = 'https://twitter.com/' + externalIds.twitter_id;
		
		return (
			<div id={"tv-external-ids"}>
				
				<div className={"row mb-3"}>
					<div className={"col-12"}>
						<h2 className={"card-header"}>External IDs</h2>
					</div>
				</div>
				
				<div className={"row mb-3"}>
					
					{externalIds.imdb_id !== null &&
						<div className={"col text-center"}>
							<a href={imdbLink} target="_blank" title={"IMDB"}>
								<span className={"mr-3 fa fa-4x fa-imdb"}>
								</span>
							</a>
						</div>
					}
					
					{externalIds.tvdb_id !== null &&
						<div className={"col text-center"}>
							<a href={tvdbLink} target="_blank" title={"TVDB"}>
								<span className={"mr-3 fa fa-4x fa-tv"}>
								</span>
							</a>
						</div>
					}
					
					{externalIds.facebook_id !== null &&
						<div className={"col text-center"}>
							<a href={facebookLink} target="_blank" title={"Facebook"}>
								<span className={"mr-3 fa fa-4x fa-facebook"}>
								</span>
							</a>
						</div>
					}
					
					{externalIds.twitter_id !== null &&
						<div className={"col text-center"}>
							<a href={twitterLink} target="_blank" title={"Twitter"}>
									<span className={"mr-3 fa fa-4x fa-twitter"}>
									</span>
							</a>
						</div>
					}
					
					{externalIds.instagram_id !== null &&
						<div className={"col text-center"}>
							<a href={instagramLink} target="_blank" title={"Instagram"}>
								<span className={"mr-3 fa fa-4x fa-instagram"}>
								</span>
							</a>
						</div>
					}
					
				</div>
				
			</div>
		)
	}
	
});

module.exports = TVDetailExternalIdsComponent;
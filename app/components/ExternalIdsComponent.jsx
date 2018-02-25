let React = require('react');
let { Link } = require('react-router');

// IMDb ID - http://www.imdb.com/title/tt0898266/
// TVDB ID - https://www.thetvdb.com/index.php?tab=series&id=73529
// Facebook - https://www.facebook.com/TheBigBangTheory/
// Instagram - https://www.instagram.com/bigbangtheory_cbs/
// Twitter - https://twitter.com/bigbangtheory

let ExternalIdsComponent = React.createClass({
	
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
			<div id={"external-ids"}>
				
				<div className={"row mb-3"}>
					
					{typeof externalIds.imdb_id !== 'undefined' && externalIds.imdb_id !== null &&
					<div className={"col text-center"}>
						<Link to={imdbLink} target="_blank" title={"IMDB"}>
							<span className={"mr-3 fa fa-4x fa-imdb"}>
							</span>
							<span className={"mr-3"}>
								IMDB
							</span>
						</Link>
					</div>
					}
					
					{typeof externalIds.tvdb_id !== 'undefined' && externalIds.tvdb_id !== null &&
					<div className={"col text-center"}>
						<Link to={tvdbLink} target="_blank" title={"TVDB"}>
							<span className={"mr-3 fa fa-4x fa-tv"}>
							</span>
							<span className={"mr-3"}>
								TVDB
							</span>
						</Link>
					</div>
					}
					
					{typeof externalIds.facebook_id !== 'undefined' && externalIds.facebook_id !== null &&
					<div className={"col text-center"}>
						<Link to={facebookLink} target="_blank" title={"Facebook"}>
							<span className={"mr-3 fa fa-4x fa-facebook"}>
							</span>
							<span className={"mr-3"}>
								Facebook
							</span>
						</Link>
					</div>
					}
					
					{typeof externalIds.twitter_id !== 'undefined' && externalIds.twitter_id !== null && externalIds.twitter_id !== '' &&
					<div className={"col text-center"}>
						<Link to={twitterLink} target="_blank" title={"Twitter"}>
							<span className={"mr-3 fa fa-4x fa-twitter"}>
							</span>
							<span className={"mr-3"}>
								Twitter
							</span>
						</Link>
					</div>
					}
					
					{typeof externalIds.instagram_id !== 'undefined' && externalIds.instagram_id !== null &&
					<div className={"col text-center"}>
						<Link to={instagramLink} target="_blank" title={"Instagram"}>
							<span className={"mr-3 fa fa-4x fa-instagram"}>
							</span>
							<span className={"mr-3"}>
								Instagram
							</span>
						</Link>
					</div>
					}
				
				</div>
			
			</div>
		)
	}
	
});

module.exports = ExternalIdsComponent;
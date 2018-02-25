
let requestPromise = require('request-promise');
let api = require('./API');

exports.getByGenre = function(req, res){
	
	let obj = {
		path : 'discover/' + req.params.genreType,
		method : 'GET',
		qs : {
			page: req.params.page,
			with_genres: req.params.id
		}
	};
	
	let options = api.setOptions(obj);
	
	api.doRequest(req, res, options);
	
};

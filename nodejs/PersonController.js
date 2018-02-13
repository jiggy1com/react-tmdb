
let requestPromise = require('request-promise');
let api = require('./API');

exports.getPerson = function(req, res){
	
	let obj = {
		path : 'person/' + req.params.personId,
		method : 'GET',
		qs : {
			append_to_response : 'movie_credits,tv_credits,combined_credits,external_ids,images,tagged_images'
		}
	};
	
	let options = api.setOptions(obj);
	
	api.doRequest(req, res, options);
	
};

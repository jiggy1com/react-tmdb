
let requestPromise = require('request-promise');
let api = require('./API');

exports.getByKeyword = function(req, res){
	
	let obj = {
		path : 'discover/' + req.params.keywordType,
		method : 'GET',
		qs : {
			page: req.params.page,
			with_keywords: req.params.id
		}
	};
	
	let options = api.setOptions(obj);
	
	api.doRequest(req, res, options);
	
};

let requestPromise = require('request-promise');

module.exports = {
	
	// TMDB API SETTINGS
	API_HOST 				: 'https://api.themoviedb.org/3/',
	API_KEY 				: '6cdb4ea303aa341e1cbeca1aafb8527a',
	API_READ_ACCESS_TOKEN 	: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2RiNGVhMzAzYWEzNDFlMWNiZWNhMWFhZmI4NTI3YSIsInN1YiI6IjVhNTlhOGFjMGUwYTI2N2ZkNzAwNTc4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.twbf3NBpuwcb0aTAAF71S4AU1xOH70-SbyxhOetpOUs',
	
	// API HELPERS
	setOptions : function(obj){
		
		let options = {
			path : '', // options.path is actually unused, but obj.path is used in options.uri
			uri : this.API_HOST + obj.path + '?api_key=' + this.API_KEY,
			method : 'POST',
			json : true,
			qs : {},
			body : {},
			headers : {
				// "Authorization" : "Basic " + new Buffer(credentials.mail.username + ":" + credentials.mail.password).toString("base64"),
				// "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
			}
		};
		
		// override options with obj
		if(obj){
			for(let key in obj){
				if(obj.hasOwnProperty(key) && options.hasOwnProperty(key)){
					options[key] = obj[key];
				}
			}
		}
		
		return options;
	},
	
	doRequest: function(req, res, options){
		
		let promise = requestPromise(options);
		
		promise.then(function(resp){
			res.json({
				success : true,
				data : resp
			});
		})
		.catch(function(err){
			res.json({
				success : false,
				message : err
			});
		});
		
	}
	
};
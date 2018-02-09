let axios = require('axios');

axios.defaults.trailingSlash = false;

module.exports = {
	
	doGet : function(path){
		return axios.get(path).then(function(resp){
			console.log('GET:', path, resp.data);
			return resp.data;
		}).catch(function(err){
			console.error('err', err);
		});
	},
	
	doPost : function(obj, path){
		return axios.post(path, obj)
		.then(function (resp) {
			console.log('POST:', path, resp.data);
			return resp;
		})
		.catch(function (err) {
			console.error(err);
		});
	}
	
};

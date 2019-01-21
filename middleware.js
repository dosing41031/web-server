var middleware = {
	requireAuthentivation: function(req, res, next){
		console.log('private route hit');
		next();
	},
	logger: function(req, res, next){
		cDate = new Date().toString()
		console.log("Request: "  +cDate + ' ' +req.method + ' '+ req.originalUrl);
		next();
	}
};

module.exports = middleware;
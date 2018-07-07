const request = require('request');


var getWeather = (latitude,longitude,callback) => 
{
		
		request({
		url:`https://api.darksky.net/forecast/4d6af3a34a19fccbffff9bfe44a3260a/${latitude},${longitude}`,
		json: true
	}, (error,response,body) => {
		debugger;
		if(error)
		{
			callback("Unable to connect to forecast");
		}
		else if (response.statusCode == 400)
		{
			callback("Unable to fetch weather")
		}
		else if (response.statusCode ===200)
		{
			callback(undefined,{
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
		}
	});
};

module.exports = {
	getWeather
};


//4d6af3a34a19fccbffff9bfe44a3260a
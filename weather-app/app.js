const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
.options({
	address: {
		demand: true,
		alias: 'a',
		describe: "Address to fetch the weather for",
		string: true
	}
})
.help()
.alias('help','h')
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if(errorMessage)
	{
		console.log(errorMessage);
	} else
	{
		console.log(results.address);
		weather.getWeather(results.lat,results.long, (errorMessage,weatherResults) => {
		if(errorMessage)
		{
			console.log(errorMessage);
		} else
		{
			console.log(`It's currently ${weatherResults.temperature} but it feels like ${weatherResults.apparentTemperature}`); 
		}
		});
	}

});






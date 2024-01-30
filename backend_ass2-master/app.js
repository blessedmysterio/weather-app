const express = require("express");
const https = require("https");
const app = express();

const googleMapsApiKey = 'AIzaSyChyDGGQ6Iq2gt7XBHIyxRRODX7RhIGtyQ';

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html"); 
});

app.get("/location", function(req, res) {
    const query = req.query.city;

    const mapUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${googleMapsApiKey}`;

    https.get(mapUrl, function(response) {
        let data = " ";
        response.on("data", function(chunk) {
            data += chunk;
        });

        response.on("end", function() {
            const locationData = JSON.parse(data);
            const location = locationData.results[0].geometry.location;

            res.send({
                latitude: location.lat,
                longitude: location.lng
            });
        });
    });
});


app.get("/extra-data", async function(req, res) {
    
    const url = 'https://jgentes-crime-data-v1.p.rapidapi.com/crime?startdate=9%2F19%2F2015&enddate=9%2F25%2F2015&long=-122.5076392&lat=37.757815';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '62a5c2b8cbmsh9f2ea6632a30d35p13ab89jsn9d53f1e1b491',
		'X-RapidAPI-Host': 'jgentes-Crime-Data-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
    res.send({result: result});
} catch (error) {
	console.error(error);
}
});

app.get("/extra-data2", async function(req, res) {
    const url = 'https://covid-19-statistics.p.rapidapi.com/regions';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '62a5c2b8cbmsh9f2ea6632a30d35p13ab89jsn9d53f1e1b491',
		'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
    res.send({result: result});
} catch (error) {
	console.error(error);
}
})



app.get("/extra-data3", async function(req, res) {
    const url = 'https://sunrise-sunset-times.p.rapidapi.com/getSunriseAndSunset?date=2021-10-31&latitude=51.5072&longitude=-0.1276&timeZoneId=America%2FNew_York';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '62a5c2b8cbmsh9f2ea6632a30d35p13ab89jsn9d53f1e1b491',
		'X-RapidAPI-Host': 'sunrise-sunset-times.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
    res.send({result: result});
} catch (error) {
	console.error(error);
}
})



app.get("/weather", function(req, res) {
    const query = req.query.city;
    const openWeatherApiKey = '82bf0841d0880138805a0e7da491cb84'; 
    const unit = "metric";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${openWeatherApiKey}&units=${unit}`;
    https.get(url, function(response) {
        let data = " ";
        response.on("data", function(chunk) {
            data += chunk;
        });

        response.on("end", function() {
            const weatherData = JSON.parse(data);

            
            const cityName = weatherData.name;
            const temp = weatherData.main.temp;
            const feels = weatherData.main.feels_like;
            const description = weatherData.weather[0].description;
            const humidity = weatherData.main.humidity;
            const wind = weatherData.wind.speed;
            const pressure = weatherData.main.pressure;
            const code = weatherData.sys.country;
            const lon = weatherData.coord.lon;
            const lat = weatherData.coord.lat;
            const icon = weatherData.weather[0].icon;
            const imageURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;

            res.send(`
            <body style="background-color: #d3d3d3;">
            <h2 class="card-title">${cityName}'s country code is ${code} (longitude: ${lon} , latitude: ${lat})</h2>
                <div class="card" style="color: #000; margin: 20px; display: flex; flex-wrap: wrap;">
                

                    
    
                    <div class="card" style="color: #000; margin: 20px; flex: 1;">
                        <div class="card-body">
                            <h5 class="card-title">Current temperature</h5>
                            <p class="card-text">${temp}°C</p>
                        </div>
                    </div>
    
                    <div class="card" style="color: #000; margin: 20px; flex: 1;">
                        <div class="card-body">
                            <h5 class="card-title">Weather description</h5>
                            <p class="card-text">${description}</p>
                        </div>
                    </div>
    
                    <div class="card" style="color: #000; margin: 20px; flex: 1;">
                        <div class="card-body">
                            <h5 class="card-title">Feels like</h5>
                            <p class="card-text">${feels}°C</p>
                        </div>
                    </div>
    
                    <div class="card" style="color: #000; margin: 20px; flex: 1;">
                        <div class="card-body">
                            <h5 class="card-title">Humidity</h5>
                            <p class="card-text">${humidity}%</p>
                        </div>
                    </div>
    
                    <div class="card" style="color: #000; margin: 20px; flex: 1;">
                        <div class="card-body">
                            <h5 class="card-title">Wind speed</h5>
                            <p class="card-text">${wind} m/s</p>
                        </div>
                    </div>
    
                    <div class="card" style="color: #000; margin: 20px; flex: 1;">
                        <div class="card-body">
                            <h5 class="card-title">Pressure</h5>
                            <p class="card-text">${pressure} hPa</p>
                        </div>
                    </div>

                    <div class="card" style="color: #000; margin: 20px; flex: 1;">
                        <div class="card-body">
                            <h5 class="card-title">Icon</h5>
                            <img src="${imageURL}" alt="weather icon" style="max-width: 100%;margin-right:600px;"> 
                        </div>
                    </div>

                    


                </div>

                <div id="map-container" class="card" style="flex: 2; height: 700px; margin: 20px;"></div>
    
                
            </body>
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBljJnmtAIBqTq52QZJJWFelE1giDRpQaw&callback=initMap" async defer></script>
                <script src="/map.js"></script>
                <script>

    window.onload = function() {

        if (!isNaN(${lat}) && !isNaN(${lon})) {
            initMap(${lat}, ${lon});
        } else {
            console.error("Invalid latitude or longitude values.");
        }
    };
</script>
        `);
        });
    });
});

app.listen(3000, function() {
    console.log("server is running on port 3000");
});

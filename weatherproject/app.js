const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res) {


res.sendFile(__dirname+"/index.html");	
	
});

app.post("/",function(req,res){
	
	const query = req.body.cityName;
	const apiKey = "dd0c9d769563725bb2dd56005c7*****"
	const unit = "metric"
	const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+unit;


	https.get(url,function(response){
		

		response.on("data",function(data){
			const weatherData = JSON.parse(data)
			const temp = weatherData.main.temp
			const desc = weatherData.weather[0].description
			const iconx = weatherData.weather[0].icon
			const imageURL = "http://openweathermap.org/img/wn/"+ iconx + "@2x.png"
			
			res.write("<p>The weather is currently "+ desc+"</p>");
			res.write("<h1>The temp in "+ query+ " is "+ temp + " degree Celsius</h1>");
			res.write("<img src="+imageURL+">");
			res.send()
		})
	})
})




app.listen(3000,function(){
	console.log("Server started on port 3000");
})

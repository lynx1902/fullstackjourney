const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
const mailchimp = require('@mailchimp/mailchimp_marketing')


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
	res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
	const firstName = req.body.fname;
	const lastName = req.body.lname;
	const email = req.body.email;


	var data = {
		members : [
		{
			email_address:email,
			status: "subscribed",
			merge_fields: {
				FNAME: firstName,
				LNAME: lastName
			}
		}
		],
	};
	mailchimp.setConfig({
   apiKey: "71525cd61d8073e06bd9f298c3ca0df9-us5",
   server: "us5",
 });

	const run = async () => {
    const response = await mailchimp.lists.batchListMembers("9b7a84d363", data);
    console.log(response);
    if (response.error_count === 0) {
	res.sendFile(__dirname+"/success.html");
} else
 {
 	res.sendFile(__dirname+"/failure.html");
 }
  };
  run();
 
});


app.post("/failure",function(req,res){
	res.redirect("/")
})

app.listen(process.env.PORT || 3000,function(){
	console.log("Server is running on port 3000");
});

// 71525cd61d8073e06bd9f298c3ca0df9-us5


// 9b7a84d363
//url

//url request

//specify the header

//Specify the body

//Set the request type

//Get the URL session

//Create the data task

const http = require("https");

const options = {
	"method": "GET",
	"hostname": "spotify81.p.rapidapi.com",
	"port": null,
	"path": "/top_200_tracks",
	"headers": {
		"X-RapidAPI-Key": "589da794dfmsh054c4550fa5a7dcp1be7dajsn1130b3aa80cf",
		"X-RapidAPI-Host": "spotify81.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();
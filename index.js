const request= require('request'); //We require the request package
const argv = require('yargs').argv; 

let apiKey= '0334d076be9112e92468bd238754b8e8';
let city= argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}` //query params start with a ? question mark. They are then indicated with key/value pairs separated by an = equal sign. Different key/value pairs are separated with an & ampersand

request(url,function(err,response,body){ //We pass in a url, and request returns a callback function with three arguments: err, response, and body

    if(err){
    console.log('error:',error); //We check for an error in our request. If there is one, we log the error and are done.
    }
    else{
        let weather = JSON.parse(body)
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!` ;
        console.log(message); //If there is no error, we log the entire contents of the response body.
    }
    });

  




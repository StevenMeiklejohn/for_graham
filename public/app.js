

var app = function(){
  randomComic();
};

// var CryptoJS = require("crypto-js");

var randomComic = function(){
  // var button = document.getElementById('#start-button');
  var PRIV_KEY = "403c5f3406be455684061d92266dea467b382bdc";
  var API_KEY = "1a11ffc2c79394bdd4e7a7b8d97c43a9";
  // var PRIV_KEY = "0823f7d5b0592cc5ffc18f7e052fe4b93fe5a71c";
  // var API_KEY = "2331b1ccc2a9411ca23da8c89a441eb2";
  var ts = new Date().getTime();
  var randomNumber = getRandomInt(1, 50000);
  // var url = "http://gateway.marvel.com:80/v1/public/comics/" + randomNumber + "?apikey=2331b1ccc2a9411ca23da8c89a441eb2";
  var url = "http://gateway.marvel.com:80/v1/public/comics/" + randomNumber + "?apikey=1a11ffc2c79394bdd4e7a7b8d97c43a9";
  var hash = md5(ts + PRIV_KEY + API_KEY);
  url += "&ts="+ts+"&hash="+hash;
  console.log(url);
  makeRequest(url, requestComplete);
};

var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var md5 = function(value) {
    return CryptoJS.MD5(value).toString();
};

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
 request.onload = callback;
  request.send();
};

var requestComplete = function(){
  if(this.status !== 200) return;
  console.log("Got the data!")
  var jsonString = this.responseText;
  var heroes = JSON.parse(jsonString);
};










window.onload = app;

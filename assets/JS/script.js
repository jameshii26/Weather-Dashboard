// Generate & assign a unique API key to a variable
    var APIKey = "1bb5e892c1e6e4d0f099d671f59a895e";

function start() {
    var city = document.getElementById("enter-city");
    var searchBtn = document.getElementById("search-button");
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
    var clearEl = document.getElementById("clear-history");
    var nameEl = document.getElementById("city-name");
    var currentPicEl = document.getElementById("current-pic");
    var currentTempEl = document.getElementById("temperature");
    var currentHumidityEl = document.getElementById("humidity");
    var currentWindEl = document.getElementById("wind-speed");
    var currentUVEl = document.getElementById("UV-index");
    var historyEl = document.getElementById("history");
    var fivedayEl = document.getElementById("fiveday-header");
    var todayweatherEl = document.getElementById("today-weather");

    

    

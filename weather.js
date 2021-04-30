const weather = document.querySelector('.js-weather');
const API_KEY = 'ee5988678a6fa6928cc374eaa4c915de';

function getWeather(latitude, longitude){
    fetch(`
    http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temp = json.main.temp;
        const geo = json.name;
        weather.innerText = `${temp}°C, ${geo}`;
    })
}


function getGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    localStorage.setItem('coords', JSON.stringify(coordsObj))
    getWeather(latitude, longitude);
}

function getGeoFail(){
    
}

function askForCoord(){
    navigator.geolocation.getCurrentPosition(getGeoSuccess, getGeoFail);
}

function init(){
    const loadCoords = localStorage.getItem('coords');
    if (loadCoords === null){
        askForCoord();
    }else{
        const parseCoords = JSON.parse(loadCoords);
        //console.log(parseCoords.latitude);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

init();
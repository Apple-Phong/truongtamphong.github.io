function mainUpdate(type) {
if (type === "weather") { checkWeather(); }
else if (type === "battery") { updateBattery(); }
}

function updateBattery(){
document.getElementById("FreeRAM").innerHTML = ramFree;
}

function checkWeather(){
document.getElementById('WeatherIcon').src = 'Scripts/Weather/' + config.IconSet + '/' + weather.conditionCode + '.png';
document.getElementById("Condition").innerHTML = condition[weather.conditionCode];
document.getElementById('Temp').innerHTML = weather.temperature + '&degC';
document.getElementById("Rain").innerHTML = raintext + ' ' + weather.hourlyForecasts[0].percentPrecipitation + '%';
document.getElementById("Humidity").innerHTML = humiditytext + ' ' + weather.humidity + '%';
document.getElementById("WindSpeed").innerHTML = windspeedtext + ' ' + weather.windSpeed + ' km/h';
}
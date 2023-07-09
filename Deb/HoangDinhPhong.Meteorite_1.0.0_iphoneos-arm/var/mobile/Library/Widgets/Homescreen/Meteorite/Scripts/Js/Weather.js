function mainUpdate(type) {
if (type === "battery") { updateBattery(); }
if (type === "weather") { checkWeather(); }
}

function checkWeather() {
  document.getElementById('WeatherIcon').src = 'Scripts/Weather/' + config.IconSet + '/' + weather.conditionCode + '.png';
  document.getElementById("City").innerHTML = weather.city + ' ' + weather.temperature + '°C';
   document.getElementById("HiLo").innerHTML = hilotext + ' ' + weather.high + '°' + '/' + weather.low + '°';
  document.getElementById("FeelsLike").innerHTML = feelstext + ' ' + weather.feelsLike + '°C';

  document.getElementById("Day1").innerHTML = sday[weather.dayForecasts[1].dayOfWeek - 1];
  document.getElementById("Day2").innerHTML = sday[weather.dayForecasts[2].dayOfWeek - 1];
  document.getElementById("Day3").innerHTML = sday[weather.dayForecasts[3].dayOfWeek - 1];
  document.getElementById("Day4").innerHTML = sday[weather.dayForecasts[4].dayOfWeek - 1];

  document.getElementById("Day1Icon").src = "Scripts/Weather/" + config.IconSet + "/" + weather.dayForecasts[1].icon + ".png";
  document.getElementById("Day2Icon").src = "Scripts/Weather/" + config.IconSet + "/" + weather.dayForecasts[2].icon + ".png";
  document.getElementById("Day3Icon").src = "Scripts/Weather/" + config.IconSet + "/" + weather.dayForecasts[3].icon + ".png";
  document.getElementById("Day4Icon").src = "Scripts/Weather/" + config.IconSet + "/" + weather.dayForecasts[4].icon + ".png";

  document.getElementById("Day1HiLo").innerHTML = weather.dayForecasts[1].high + "°" + "|" + weather.dayForecasts[1].low + "°";
  document.getElementById("Day2HiLo").innerHTML = weather.dayForecasts[2].high + "°" + "|" + weather.dayForecasts[2].low + "°";
  document.getElementById("Day3HiLo").innerHTML = weather.dayForecasts[3].high + "°" + "|" + weather.dayForecasts[3].low + "°";
  document.getElementById("Day4HiLo").innerHTML = weather.dayForecasts[4].high + "°" + "|" + weather.dayForecasts[4].low + "°";

  document.getElementById("Condition").innerHTML = context + ' ' + condition[weather.conditionCode];
  document.getElementById("Sunrise").innerHTML = sunrisetext + ' ' + weather.sunriseTime.substring(1, 0) + ':' + weather.sunriseTime.substring(3, 1);
  document.getElementById("Sunset").innerHTML = sunsettext + ' ' + weather.sunsetTime.substring(2, 0) + ':' + weather.sunsetTime.substring(2, 4);
}

function updateBattery(){
   document.getElementById('FreeRAMtxt').innerHTML = freeRAMtxt;
   document.getElementById("FreeRAM").innerHTML = ramFree + ' ' + 'MB';
}
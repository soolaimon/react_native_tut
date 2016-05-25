var rootUrl = 'api.openweathermap.org/data/2.5/weather?APPID=2cdd94b3d2a5f3f359509ba0655a4cb8';

var kelvinToF = function(kelvin) {
  return Math.round((kelvin - 273.15) * 1.8 + 32) + '˚F';
};
module.exports = function(latitude, longitude) {
  var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;
  
  fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      return {
        city: kelvinToF(json.city),
        temperature: json.main.temp,
        description: json.weather.description
      }
    });
}

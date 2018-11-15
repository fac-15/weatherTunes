"use strict";


// get api keys
// console.log(keys.openWeather);



// first call
(function () {
    const xhr = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=London${keys.openWeather}`;
    // var url = 'http://api.openweathermap.org/data/2.5/weather?q=London'+ keys.openWeather;

    xhr.onreadystatechange = function(){
        if (xhr.status === 200 && xhr.readyState === 4){
            const details = JSON.parse(xhr.responseText);
            console.log(details);
            console.log(details.weather[0].main);
            

        }
    };

    xhr.open("GET", url, true);
    xhr.send();

})();




// all logic stuff to go here
// function sum(a, b) {
//   return a + b;
// }
var weather = {
  responseApi: function(code){
    var code = 200;
    return code;
  }
};




if (typeof module!== "undefined") {
  module.exports = weather;
};

"use strict";

const weatherFunctions = {
  getWeather: function(inputEvent, renderFunction) {
    const location = inputEvent.target.childNodes[1].childNodes[3].value;

    const xhr = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric${
      keys.openWeather
    }`;

    xhr.onreadystatechange = function() {
      if (xhr.status === 200 && xhr.readyState === 4) {
        renderFunction(JSON.parse(xhr.responseText));
      }
    };

    xhr.open("GET", url, true);
    xhr.send();
  },

  getMusic: function(weatherResults) {
    console.log("getMusic", weatherResults);

    const xhr = new XMLHttpRequest();
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${weatherResults +
      " song lyrics music"}&type=video&videoCaption=closedCaption&videoDefinition=high&videoEmbeddable=true&key=${
      keys.youtube
    }`;

    xhr.onreadystatechange = function() {
      if (xhr.status === 200 && xhr.readyState === 4) {
        const music = JSON.parse(xhr.responseText);
        const videoId = music.items[0].id.videoId;
        document.getElementById(
          "video"
        ).src = `https://www.youtube.com/embed/${videoId}`;
      }
    };

    xhr.open("GET", url, true);
    xhr.send();
  }
};

// var weather = {
//   responseApi: function(code) {
//     var code = 200;
//     return code;
//   }
// };

if (typeof module !== "undefined") {
  module.exports = weather;
}

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
      } else if (xhr.status === 404 && xhr.readyState === 4) {
        errorFunction();
      }
    };

    xhr.open("GET", url, true);
    xhr.send();
  },

  getMusic: function(weatherResults) {

    const xhr = new XMLHttpRequest();
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${weatherResults +
      " song music"}&type=video&videoCaption=closedCaption&videoDefinition=high&videoEmbeddable=true&videoCategoryId=10&maxResults=20&order=relevance&key=${
      keys.youtube
    }`;

    xhr.onreadystatechange = function() {
      if (xhr.status === 200 && xhr.readyState === 4) {
        // DOM stuff
        updateIframe(JSON.parse(xhr.responseText));
      }
      else if (xhr.status === 404 && xhr.readyState === 4) {
        // error function - needs to be video specific
        errorFunction();
      }
    };

    xhr.open("GET", url, true);
    xhr.send();
  }
};

if (typeof module !== "undefined") {
  module.exports = weather;
}

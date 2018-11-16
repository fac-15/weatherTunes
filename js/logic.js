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
    // console.log("getMusic", weatherResults);

    const xhr = new XMLHttpRequest();
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${weatherResults +
      " song music"}&type=video&videoCaption=closedCaption&videoDefinition=high&videoEmbeddable=true&videoCategoryId=10&maxResults=20&order=relevance&key=${
      keys.youtube
    }`;

    xhr.onreadystatechange = function() {
      if (xhr.status === 200 && xhr.readyState === 4) {
        const music = JSON.parse(xhr.responseText);
        const resultsLength = music.items.length;
        let videoId;
        if (resultsLength > 1) {
          const generateNumber = Math.floor(Math.random() * resultsLength);
          videoId = music.items[generateNumber].id.videoId;
        } else if (resultsLength === 1) {
          videoId = music.items[0].id.videoId;
        } else if (resultsLength === 0) {
          videoId = "ag8XcMG1EX4";
        }
        console.log(music.items.length);
        document.getElementById(
          "video"
        ).src = `https://www.youtube.com/embed/${videoId}`;
      }
    };

    xhr.open("GET", url, true);
    xhr.send();
  }
};

if (typeof module !== "undefined") {
  module.exports = weather;
}

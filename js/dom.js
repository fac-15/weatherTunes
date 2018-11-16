// all DOM manipulation to go here

// icon conversion object
// - object keys act weird when starting with numbers
const niceIcons = {
    // day
    day : {
        a01 : "wi-day-sunny",
        a02 : "wi-day-cloudy",
        a03 : "wi-cloud",
        a04 : "wi-cloudy",
        a09 : "wi-rain",
        a10 : "wi-day-rain",
        a11 : "wi-day-lightning",
        a13 : "wi-day-snow",
        a50 : "wi-day-fog"
    },
    // night
    night : {
        a01 : "wi-night-clear",
        a02 : "wi-night-alt-cloudy",
        a03 : "wi-cloud",
        a04 : "wi-cloudy",
        a09 : "wi-rain",
        a10 : "wi-night-rain",
        a11 : "wi-night-lightning",
        a13 : "wi-night-snow",
        a50 : "wi-night-fog"
    }
}


function updateDom(weatherResults) {

    // remove error class (if there)
    const resultContainer = document.getElementById("forecast-section");
    if (resultContainer.classList.contains('error-not-found')) {
        resultContainer.classList.remove('error-not-found');
    }


    const location = weatherResults.name;
    const weather = weatherResults.weather[0].main;
    const temp = weatherResults.main.temp;
    const lowtemp = weatherResults.main.temp_min;
    const hightemp = weatherResults.main.temp_max;

    // old icon
    const icon = weatherResults.weather[0].icon;
    // used to get new icon - remove trailing character and prepend with letter 'a' to work
    let iconPop = icon.substring(0, icon.length - 1);
    iconPop = `a${iconPop}`;

    let iconB;
    let day = /d$/;
    if(day.test(icon) === true) {
        iconB = niceIcons.day[iconPop];
    } else {
        iconB = niceIcons.night[iconPop];
    }

    const html = `
        <h2 class="info-content uppercase">Your city: <span id="your-city">${location}</span></h2>
        <p class="info-content">Temperature: <span id="current-temp"> ${temp}&#xb0;C</span></p>
        <p class="info-content">The forecast for your city is: <span id="forecast-value">${weather}</span></p>
        <i class="icon-large wi ${iconB}"></i>
        `;
    const low = `
        <p class="info-content">Lowest Temp<span id="current-temp">${lowtemp}&#xb0;C</span></p>
    `;
    const high = `
        <p class="info-content">Highest Temp<span id="current-temp">${hightemp}&#xb0;C</span></p>
    `;
    resultContainer.innerHTML = html;
    document.getElementById("forecast-low").innerHTML = low;
    document.getElementById("forecast-high").innerHTML = high;

}


function renderFunction(results) {
  updateDom(results);
  weatherFunctions.getMusic(results.weather[0].main);
}

function errorFunction() {
    const html = `
      <h3 class="info-content">Enter somewhere that exists (according to our app!)</h3>
    `;
    const low = `
        <p class="info-content">Lowest Temp<span id="current-temp">&#xb0;C</span></p>
    `;
    const high = `
        <p class="info-content">Highest Temp<span id="current-temp">&#xb0;C</span></p>
    `;
    document.getElementById("forecast-section").innerHTML = html;
    document.getElementById("forecast-section").classList.add('error-not-found');
    document.getElementById("forecast-low").innerHTML = low;
    document.getElementById("forecast-high").innerHTML = high;
}


// weather call - on form submit
// - calls function from logic.js
function weatherCall(submitEvent) {
  submitEvent.preventDefault();

  // run the function from logic.js
  weatherFunctions.getWeather(submitEvent, renderFunction);
  //console.log("is this the answer: " + locationWeather);
  form.reset();
}

// validation on the location input field - with input event
function validator(e) {
  // error message
  const errorP = document.querySelector("#get-weather p");
  const errorMsg =
    "Please enter a valid location. You can enter letters a-z, upper and lower case";
  // console.log(errorP);

  // add and remove error classes

  // - not valid
  if (!e.target.validity.valid) {
    e.target.classList.add("error");
    errorP.classList.add("error-msg");
    errorP.classList.remove("hidden");
    errorP.innerHTML = errorMsg;
  }
  // valid
  else {
    e.target.classList.remove("error");
    errorP.classList.remove("error-msg");
    errorP.classList.add("hidden");
    errorP.innerHTML = "";
  }
}

// get text input
const inputLocation = document.getElementById("your-location");
inputLocation.addEventListener("input", validator);

const form = document.getElementById("get-weather");
form.addEventListener("submit", weatherCall);

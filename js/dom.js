// all DOM manipulation to go here

function renderFunction(results) {
  console.log("Weather Info:", results);

  // populate DOM
//   document.getElementById("your-city").textContent = results.name;
//   document.getElementById("forecast-value").textContent = results.weather[0].main;


  const location = results.name;
  const weather = results.weather[0].main;
  const temp = results.main.temp;
  const icon = results.weather[0].icon;
  const lowtemp = results.main.temp_min;
  const hightemp = results.main.temp_max;

  const html = `
    <h2 class="info-content uppercase">Your city: <span id="your-city">${location}</span></h2>
    <p class="info-content">Temperature: <span id="current-temp"> ${temp}&#xb0;C</span> degrees celsius</p>
    <p class="info-content">The forecast for your city is: <span id="forecast-value">${weather}</span></p>
    <img src="http://openweathermap.org/img/w/${icon}.png"/ alt="${weather}">
  `;
  const low = `
  <p class="info-content">Lowest Temp<span id="current-temp">${lowtemp}&#xb0;C</span></p>
  `;
  const high = `
  <p class="info-content">Highest Temp<span id="current-temp">${hightemp}&#xb0;C</span></p>
  `;

  document.getElementById("forecast-section").innerHTML = html;
  document.getElementById("forecast-low").innerHTML = low;
  document.getElementById("forecast-high").innerHTML = high;


//   return results;
}




// weather call - on form submit
// - calls function from logic.js
function weatherCall(submitEvent) {
  submitEvent.preventDefault();

  // run the function from logic.js
  const locationWeather = weatherFunctions.getWeather(
    submitEvent,
    renderFunction
  );

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
    console.log("not valid");
  }
  // valid
  else {
    e.target.classList.remove("error");
    errorP.classList.remove("error-msg");
    errorP.classList.add("hidden");
    errorP.innerHTML = "";
    console.log("valid a to z");
  }
}

// get text input
const inputLocation = document.getElementById("your-location");
inputLocation.addEventListener("input", validator);

const form = document.getElementById("get-weather");
form.addEventListener("submit", weatherCall);

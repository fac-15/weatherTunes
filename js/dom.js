// all DOM manipulation to go here

function renderFunction(results) {
  console.log("Weather Info:", results);

  // populate DOM
  document.getElementById("your-city").textContent = results.name;
  document.getElementById("forecast-value").textContent = results.weather[0].main;

  return results;
}

// weather call - on form submit
function weatherCall(submitEvent) {
  submitEvent.preventDefault();

  // run the function from logic.js
  const locationWeather = weatherFunctions.getWeather(
    submitEvent,
    renderFunction
  );
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

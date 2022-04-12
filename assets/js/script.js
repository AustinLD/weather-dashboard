

// user inputs city into the search bar
// when they click search the geo locator inputs the keyword from the search box
// it pulls the lat an lon
// lat and long are fed into one call api
// current day weather is displayed in large format
// weather information is displayed in 5 day forcast below
// information is saved in local storage
// append buttons for previous search history

var userInput = document.querySelector("#search-box")

var searchButton = document.querySelector("#search-button")

searchButton.addEventListener("click", fetchGeo);







function fetchGeo() {
  var userInputValue = userInput.value.trim();
  if(userInputValue) {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?appid=a538c2c806727f5ba0a2671b19e32a90&q=${userInputValue}&=&=`, {
      "method": "GET",
      "headers": {}
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err);
    }); 
    
    
    }
  console.log(userInputValue);
}







// function geolocation() {
//   var userInputValue = userInput.value.trim();
// fetch(`http://api.openweathermap.org/geo/1.0/direct?appid=a538c2c806727f5ba0a2671b19e32a90&q=${userInputValue}&=&=`, {
//   "method": "GET",
//   "headers": {}
// })
// .then(response => {
//   console.log(response);
// })
// .catch(err => {
//   console.error(err);
// }); 


// }






















// fetch for one call api
// fetch("https://api.openweathermap.org/data/2.5/onecall?appid=a538c2c806727f5ba0a2671b19e32a90&lat=28.5421109&lon=-81.3790304&units=imperial", {
//   "method": "GET",
//   "headers": {}
// })
// .then(response => {
//   console.log(response);
// })
// .catch(err => {
//   console.error(err);
// });




// // fetch request for geo location api
// fetch("http://api.openweathermap.org/geo/1.0/direct?appid=a538c2c806727f5ba0a2671b19e32a90&q=orlando&=&=", {
//   "method": "GET",
//   "headers": {}
// })
// .then(response => {
//   console.log(response);
// })
// .catch(err => {
//   console.error(err);
// });
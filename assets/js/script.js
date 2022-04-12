

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
  fetch(`http://api.openweathermap.org/geo/1.0/direct?appid=a538c2c806727f5ba0a2671b19e32a90&q=${userInputValue}&=&=`)
  .then(function(res) {
    return res.json()
  })
  .then(function(data) {
      console.log(data);
      oneCall(data)
  })
  }
}


function oneCall(data) {
  var latitude = data[0].lat
  var longitude = data[0].lon
  console.log(latitude)
  console.log(longitude);
    fetch(`https://api.openweathermap.org/data/2.5/onecall?appid=a538c2c806727f5ba0a2671b19e32a90&lat=${latitude}&lon=${longitude}&units=imperial`)
    .then(function(res) {
      return res.json()
    })
    .then(function(data) {
        console.log(data);
    })
  }
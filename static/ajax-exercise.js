'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  // TODO: get the fortune and show it in the #fortune-text div
  
  fetch('/fortune')
  .then((response) => response.text())
  .then((replaceFortune) => {
    document.querySelector('#fortune-text').innerHTML = replaceFortune;
  });
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  
  const zipcode = document.querySelector('#zipcode-field').value;
  const url = `/weather.json?zipcode=${zipcode}`;

  // TODO: request weather with that URL and show the forecast in #weather-info
  fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
    document.querySelector('#weather-info').innerHTML = responseJson.forecast;
    });  
}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  const formInputs ={
  qty : document.querySelector('#qty-field').value,
  type : document.querySelector('melon-type-field').value,};

  fetch('/order-melons.json' , {
    method: 'POST',
    body: JSON.stringify(formInputs),
    hearders:{
      'Content-Type': 'application/json',
    },
  })
  .then((response) => response.json())
  .then((responseJson) => {
    
  })

  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
// }
document.querySelector('#order-form').addEventListener('submit', orderMelons);

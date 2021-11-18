import CryptoInterface from './cryptoInterface.js';
import CryptoService from './cryptoService.js';
import $ from 'jquery';


function getElements(response) {
  if (response) {
    response.forEach(function(element) {
      $('#currency').append(`<option value="${element.id}"> ${element.name} </option>`);
    });
  } else {
    $('.showError').text(`There was an error: ${response}`);
  }
}

async function populateCurMenu() {
  const response = await CryptoInterface.getCryptos();
  getElements(response);
}

function conversionInfo(result) {
  if (result) {
    const name = result[0].name;
    const n = parseFloat(result[0].price).toFixed(2);
    $("#result").text(`1 ${name} is $${n}`);
  } else {
    $('.showError').text(`There was an error: ${result}`);
  }
}

async function getConversionResult(name) {
  let result = await CryptoService.getConversion(name);
  conversionInfo(result);
}


populateCurMenu();

$(document).ready(function() {
  
  $('#btn').click(function() {
    let cur = $('#currency').val();
    getConversionResult(cur);
  
  });
});


/* jshint esversion: 6 */
console.log('js');
//checking that js is linked
$(document).ready(readyNow);

function readyNow(){
  console.log('jQuery linked');
  //checking for jQuery
  addEventHandlers();
  //adding input and button events
}

function addEventHandlers(){
  $('#submit').on('click', addInputs);
}

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

//function to addInputs
function addInputs(){
  // addingInfoToTable();
  // newInputsEditors();
  //input variables
  let userNameInput = $('#firstNameInput').val();
  let userLastName = $('#lastNameInput').val();
  let userIdNumber = $('#idNumInput').val();
  let userTitle = $('#titleInput').val();
  let userSalary = $('#salaryInput').val();

  $('#tableBody').append('<tr class="newFormat"><td>' + userNameInput + '</td>' + '<td>'
  + userLastName + '</td>' + '<td>' + userIdNumber + '</td>' + '<td>'
  + userTitle + '</td>' + '<td>' + userSalary + '</td></tr>');
  newInputsEditors();

//calculating monthly and posting to dom
  $('#monthlyCost').empty();

  let inputMonthlyCost = userSalary / 12;

}


function newInputsEditors(){
  $('#tableBody').addClass('addedTableInputs');
}

// function calculatingMonthlyCost(){
//
//   $('#monthlyCost').append('Total Monthly: ' + inputMonthlyCost);
// }
// //input variables
// let userNameInput = $('#firstNameInput').val();
// let userLastName = $('#lastNameInput').val();
// let userIdNumber = $('#idNumInput').val();
// let userTitle = $('#titleInput').val();
// let userSalary = $('#salaryInput').val();

//function to add inputs to table
// function addingInfoToTable(){
//   $('#tableBody').append('<tr><td>' + userNameInput + '</td>' + '<td>'
//   + userLastName + '</td>' + '<td>' + userIdNumber + '</td>' + '<td>'
//   + userTitle + '</td>' + '<td>' + userSalary + '</td></tr>');
//   newInputsEditors();
// }

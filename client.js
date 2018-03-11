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
  let nameInput = $('#firstNameInput').val();
  let lastName = $('#lastNameInput').val();
  let idNumber = $('#idNumInput').val();
  let userTitle = $('#titleInput').val();
  let userSalary = Number($('#salaryInput').val());
  console.log(userSalary);

  $('#tableBody').append('<tr class="newFormat"><td>' + nameInput + '</td>' + '<td>'
  + lastName + '</td>' + '<td>' + idNumber + '</td>' + '<td>'
  + userTitle + '</td>' + '<td>' + userSalary + '</td></tr>');
  newInputsEditors();

//for calculating total monthly cost
  let newEmployee = new Employee(nameInput, lastName, idNumber, userTitle, userSalary);
  employeeArray.push(newEmployee);

  initialMonthlySalary (userSalary);
  clearInputFields();


}


function newInputsEditors(){
  $('#tableBody').addClass('addedTableInputs');
}

class Employee {
  constructor(firstNameIn, lastNameIn, idIn, titleIn, salaryIn){
    this.firstName = firstNameIn;
    this.LastName = lastNameIn;
    this.id = idIn;
    this.title = titleIn;
    this.salary = salaryIn;
  }
}

let employeeArray = [];

function initialMonthlySalary( salary ){
  let monthlySalary = 0;
  for(let employee of employeeArray){
    monthlySalary += salary;
  }
  finalMonthlyCost( monthlySalary );
}

function finalMonthlyCost( monthlySalary ){
  let monthlyCost = monthlySalary / 12;
  $('#monthlyFace').empty();
  $('#monthlyFace').append("Total Monthly: " + Number(monthlyCost).toFixed(2));
  if ( monthlyCost > 20000){
    $('#monthlyFace').empty();
    $('#monthlyFace').append("Total Monthly: " + Number(monthlyCost).toFixed(2));
    $('#monthlyFace').css('background-color', 'red');
  }
}

function clearInputFields(){
  return $('#firstNameInput').val(''),
         $('#lastNameInput').val(''),
         $('#idNumInput').val(''),
         $('#idNumInput').val(''),
         $('#titleInput').val(''),
         $('#salaryInput').val('');
}
// function calculatingMonthlyCost(){
//
//   $('#monthlyCost').append('Total Monthly: ' + inputMonthlyCost);
// }

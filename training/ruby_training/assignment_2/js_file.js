
  var namePattern = new RegExp(/^[a-zA-Z][a-zA-Z\' ']{0,20}$/);
  var emailPattern = new RegExp(/^([a-z]+[\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
  var phoneNoPattern = new RegExp(/^([6-9]+[\d]{9})?$/);

  function dateValidation(date) {
    given = new Date(date);
    min_date = new Date(01 / 01 / 1990);
    date.length < 1 ? $('#date-blank').show() : (given < min_date ? $('#date-blank').show() : $('#date-blank').hide());
  }

  function fetch_pattern(value) {
    switch(value) {
    case "name":
      pattern = namePattern
      break;
    case "email":
      pattern = emailPattern
      break;
    case "phone":
      pattern = phoneNoPattern
      break;
    default:
      pattern = namePattern; 
      break;
    }
    return pattern;
  }


function inputPatternValidation() { 
  $("input").blur(function () {
    var value2 = $(this).val();
    var pat_value = $(this).attr('data-pattern');
    if(value2.length > 1) {
      if(!(regex_test(fetch_pattern(pat_value), value2))) {
       $(this).parents('.detailsEnter').find($(".validation-error")).show();
      } else {
         $(this).parents('.detailsEnter').find($(".validation-error")).hide();
      }
    } else {
       $(this).parents('.detailsEnter').find($(".validation-error")).text("This field cannot be blank").show();
    }
  });
}

function submitMsg(object) {
  object.parents('.detailsEnter').find($(".validation-error")).text("This field is required").show();
}

function validateData(fName,lName,emailId,dob,phoneNo) {
  if (!fName){
    var object = $("#fname");
    submitMsg(object);
  }
  if (!lName){
    var object = $("#lname");
    submitMsg(object);
  }
  if (!emailId){
    var object = $("#email");
    submitMsg(object);
  }
  if (!dob){
    var object = $("#dateofbirth");
    submitMsg(object);
  }
  if (!phoneNo){
    var object = $("#phone");
    submitMsg(object);
  } 
}

function submitValidation() {
    var fName = $("#fname").val();
    var lName = $("#lname").val();;
    var emailId = $("#email").val();
    var dob = $("#dateofbirth").val();
    var phoneNo = $("#phone").val();
    if (!fName || !lName || !emailId || !dob || !phoneNo || !regex_test(namePattern,fName) || !regex_test(namePattern,lName) || !regex_test(emailPattern,emailId) || !regex_test(phoneNoPattern)){
      validateData(fName,lName,emailId,dob,phoneNo);
    }
    else{
      buildData(fName,lName,emailId,dob,phoneNo);
    }
}

function buildData(fName,lName,emailId,dob,phoneNo) {
  var row = "<tr><td>" + capitalizeLetter(fName) + "</td><td>" + capitalizeLetter(lName) + "</td><td>" + emailId + "</td><td>" + dob + "</td><td>" + phoneNo + "</td></tr>";
  $("#contact").append(row);
  document.getElementById("fillForm").reset();
 
}

function regex_test(regex, value) {
    return regex.test(value);
}

$(document).ready(function () {
  $(".dateofbirth").datepicker({
    format: "mm/dd/yyyy",
    minDate: new Date(1990, 1, 1),
    maxDate: '-1d',
    autoclose: true,
    onClose: function () {
      dateValidation($(this).val());
    }
  });
 inputPatternValidation()
});

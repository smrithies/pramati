$(document).ready(function () {
  var namePattern = new RegExp(/^[a-zA-Z][a-zA-Z\' ']{0,20}$/);
  var emailPattern = new RegExp(/^([a-z]+[\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
  var phonePattern = new RegExp(/^([6-9]+[\d]{9})?$/);
 
  $("#dateofbirth").datepicker({
    format: "mm/dd/yyyy",
    minDate: new Date(1990, 1, 1),
    maxDate: '-1d',
    autoclose: true,
    onClose: function () {
      dateValidation($(this).val());
    }
  });

  function dateValidation(date) {
    given = new Date(date);
    min_date = new Date(01 / 01 / 1990);
    date.length < 1 ? $('#date-blank').show() : (given < min_date ? $('#date-blank').show() : $('#date-blank').hide());
  }

  function blankMsg(blank1, error1) {
    //alert(blank1);
    blank1.show();
    error1.hide();
  }

  function errorMsg(blank2, error2) {
    blank2.hide();
    error2.show();
  }

  function hideMsg(blank3, error3) {
    error3.hide();
    blank3.hide();
  }
  /*
    function blankMessage() {
    $("input").blur(function () {
      var value = $(this).val();
      if (value.length < 1) {
        $(this).parents('.form-group').find($(".error")).text("This field is required").show();
      } else {
        $(this).parents('.form-group').find($(".error")).hide();
      }
    });
    }
    */

  $("#fname").blur(function () {
    var fname1_blank = $("#fname-blank");
    var fname1_error = $("#fname-error");
    if ($(this).val().length < 1) {
      blankMsg(fname1_blank, fname1_error);
    } else if (!(regex_test(namePattern, $("#lname").val()))) {
      errorMsg(fname1_blank, fname1_error);
    } else {
      hideMsg(fname1_blank, fname1_error);
    }
  });

  $("#lname").blur(function () {
    var lname1_blank = $("#lname-blank");
    var lname1_error = $("#lname-error");
    if ($(this).val().length < 1) {
      blankMsg(lname1_blank, lname1_error);
    } else if (!(/^[a-zA-Z][a-zA-Z\' ']{0,20}$/).test($("#lname").val())) {
      errorMsg(lname1_blank, lname1_error);
    } else {
      hideMsg(lname1_blank, lname1_error);
    }
  });

  $("#email").blur(function () {
    var email1_blank = $("#email-blank");
    var email1_error = $("#email-error");
    if ($(this).val().length < 1) {
      blankMsg(email1_blank, email1_error);
    } else if (!isValidEmailAddress(this.value)) {
      errorMsg(email1_blank, email1_error);
    } else {
      hideMsg(email1_blank, email1_error);
    }
  });


  $("#phone").blur(function () {
    var phone1_blank = $("#phoneno-blank");
    var phone1_error = $("#phoneno-error");
    if ($(this).val().length < 1) {
      blankMsg(phone1_blank, phone1_error);
    } else if (!isPhoneNumber(this.value)) {
      errorMsg(phone1_blank, phone1_error);
    } else {
      hideMsg(phone1_blank, phone1_error);
    }
  });

  /*

  function isValidEmailAddress(emailId) {
    var pattern = new RegExp(/^([a-z]+[\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
    return pattern.test(emailId);
  }

  function isPhoneNumber(phone) {
    var pattern = new RegExp(/^([6-9]+[\d]{9})?$/);
    return pattern.test(phone);
  }
  */

  function capitalizeLetter(name) {
    str = name.split(" ");
    for (var i = 0, x = str.length; i < x; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    str = str.join(" ");
    return str
  }

  function show1() {}

  $("#submit-button").click(function () {
    var fName = $("#fname").val();
    var lName = $("#lname").val();;
    var emailId = $("#email").val();
    var dob = $("#dateofbirth").val();
    var phoneNo = $("#phone").val();

    if (fName == "" || lName == "" || emailId == "" || dob == "" || phoneNo == "" || !isValidEmailAddress(emailId) || !isPhoneNumber(phoneNo)) {
      if (fName == "") {
        var fname1_blank = $("#fname-blank");
        var fname1_error = $("#fname-error");
        blankMsg(fname1_blank, fname1_error);
      }
      if (lName == "") {
        var lname1_blank = $("#lname-blank");
        var lname1_error = $("#lname-error");
        blankMsg(lname1_blank, lname1_error);
      }
      if (emailId == "") {
        var email1_blank = $("#email-blank");
        var email1_error = $("#email-error");
        blankMsg(email1_blank, email1_error);
      }
      if (dob == "") {
        $("#date-blank").show();
      }
      if (phoneNo == "") {
        var phone1_blank = $("#phoneno-blank");
        var phone1_error = $("#phoneno-error");
        blankMsg(phone1_blank, phone1_error);
      }
    } else {

    }
  });


});


function display_error(value, object) {
  if (value == '') {
    object.show()
  }
}

function build_data() {
  var row = "<tr><td>" + capitalizeLetter(fName) + "</td><td>" + capitalizeLetter(lName) + "</td><td>" + emailId + "</td><td>" + dob + "</td><td>" + phoneNo + "</td></tr>";
  $("#contact").append(row);
  document.getElementById("fillForm").reset();
}

function regex_test(regex, value) {
  //(/^[a-zA-Z][a-zA-Z\' ']{0,20}$/).test($("#fname").val()))
  return regex.test(value);
}
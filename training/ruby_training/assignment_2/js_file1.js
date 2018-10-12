$(document).ready(function () {

   $( "#dateofbirth").datepicker({
    format: 'mm-dd-yyyy',
    endDate: '0d',
    autoclose: true,
  });
  var fname-flag = 0;
  var lname-flag = 0;
  var email-flag = 0;
  var dob-flag = 0;
  var phone-flag = 0;
  $("#fname").keyup(function () {
    $("#fname").css('textTransform', 'capitalize');
  });
  $("#fname").blur(function () {
    if ($(this).val().length > 0){
      $("#fname-error").hide();
      fname-flag = 1;
      if (!(/^[a-zA-Z][a-zA-Z\' ']{0,20}?$/).test($("#fname").val())) {
      $("#fname-error").text("Enter firstname correctly").show();
      } 
    }else {
      $("#fname-error").show();
    }
  });

  $("#lname").keyup(function () {
    $('#lname').css('textTransform', 'capitalize');
  });

  $("#lname").blur(function () {
    if ($(this).val().length > 0){
      $("#lname-error").hide();
      lname-flag = 1;
      if (!(/^[a-zA-Z][a-zA-Z\' ']{0,20}?$/).test($("#lname").val())) {
        $("#lname-error").text("Enter lastname correctly").show();
      } 
    }else {
      $("#lname-error").show();
    }
  });
  $("#email").blur(function () {
    if ($(this).val().length > 0){
      $("#email-error").hide();
      email-flag = 1;
      if (!isValidEmailAddress(this.value)) {
      $("#email-error").text("Enter email correctly")show();
      }
    } else {
      $("#email-error").show();
    }
  });
  $("#dateofbirth").blur(function () {
    if ($(this).val().length > 0){
      $("#date-error").hide();
      date-flag = 1;
    } else {
      $("#date-error").show();
    }
  });
  $("#phone").blur(function () {
    if ($(this).val().length > 0) {
      $("#phoneno-error").hide();
      phone-flag = 1;
      if (!isPhoneNumber(this.value)) {
      $("#phoneno-error").text("Enter phone number correctly").show();
      } 
    } else {
      $("#phoneno-error").show();
    }
  });
  function isValidEmailAddress(emailId) {
    var pattern = new RegExp(/^([a-z]+[\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
    return pattern.test(emailId);
  }
  function isPhoneNumber(phone) {
    var pattern = new RegExp(/^([6-9]+[\d]{9})?$/);
    return pattern.test(phone);
  }
  function capitalizeLetter(name) {
    str = name.split(" ");
    for (var i = 0, x = str.length; i < x; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    str = str.join(" ");
    return str
  }

  /*
  $("#submit-button").click(function () {
    var fName = $("#fname").val();
    var lName = $("#lname").val();;
    var emailId = $("#email").val();
    var dob = $("#dateofbirth").val();
    var phoneNo = $("#phone").val();

    if (fname-flag == 1 && lname-flag == 1 && email-flag == 1 && dob-flag == 1 && phone-flag == 1 && isValidEmailAddress(emailId) && isPhoneNumber(phoneNo)){
      var row = "<tr><td>" + capitalizeLetter(fName) + "</td><td>" + capitalizeLetter(lName) + "</td><td>" + emailId + "</td><td>" + dob + "</td><td>" + phoneNo + "</td></tr>";
      $("#contact").append(row);
      document.getElementById("fillForm").reset();
    } else {
      if (fname-flag == 0){
				$("#fname-error").show();
    		}
			if (lname-flag == 0){
				$("#lname-error").show();
    		}
			if (email-flag == 0){
				$("#email-error").show();
    		}
			if (dob-flag == 0){
				$("#date-error").show();
    		}
			if (phone-flag == 0){
				$("#phoneno-error").show();
    		} 
    }
  });
  */


});
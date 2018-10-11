$(document).ready(function () {
  $( "#dateofbirth").datepicker({
    format: 'mm-dd-yyyy',
    endDate: '0d',
    autoclose: true,
  });

  $("#fname").keyup(function () {
    $("#fname").css('textTransform', 'capitalize');
  });

  $("#fname").blur(function () {
    if ($(this).val() == "") {
      $("#fname-blank").show();
      $("#fname-error").hide();
    } else if(!(/^[a-zA-Z][a-zA-Z\' ']{0,20}?$/).test($("#fname").val())){
      $("#fname-error").show();
      $("#fname-blank").hide();
    }
    else{
      $("#fname-error").hide();
      $("#fname-blank").hide();
    }
  });

  $("#lname").blur(function () {
    if ($(this).val() == "") {
      $("#lname-blank").show();
    } else if(!(/^[a-zA-Z][a-zA-Z\' ']{0,20}$/).test($("#fname").val())){
      $("#lname-error").show();
      $("#lname-blank").hide();
    }
    else{
      $("#lname-error").hide();
      $("#lname-blank").hide();
    }
  });

  $("#lname").keyup(function () {
    $('#lname').css('textTransform', 'capitalize');
  });
  $("#email").blur(function () {
    if ($(this).val() == "") {
      $("#email-blank").show();
      $("#email-error").hide();
    } else if (!isValidEmailAddress(this.value)) {
      $("#email-error").show();
      $("#email-blank").hide();
    } else {
      $("#email-error").hide();
      $("#email-blank").hide();
    }
  });
  $("#dateofbirth").blur(function () {
		var date1 = $("#dateofbirth").val();
    if (date1 == "") {
				$("#date-blank").show();
    		} else {
      	$("#date-blank").hide();
    	}
    var date1 = $("#dateofbirth").val();
    if (date1 == "") {
      $("#date-blank").show();
    } else {
      $("#date-blank").hide();
    }
  });

  $("#phone").blur(function () {
    if ($(this).val() == "") {
      $("#phoneno-blank").show();
      $("#phoneno-error").hide();
    } else if (!isPhoneNumber(this.value)) {
      $("#phoneno-error").show();
      $("#phoneno-blank").hide();
    } else {
      $("#phoneno-error").hide();
      $("#phoneno-blank").hide();
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

  $("#submit-button").click(function () {
    var fName = $("#fname").val();
    var lName = $("#lname").val();;
    var emailId = $("#email").val();
    var dob = $("#dateofbirth").val();
    var phoneNo = $("#phone").val();

    if (fName == "" || lName == "" || emailId == "" || dob == "" || phoneNo == "" || !isValidEmailAddress(emailId) || !isPhoneNumber(phoneNo)) {
			if (fName == ""){
				$("#fname-blank").show();
    		}
			if (lName == ""){
				$("#lname-blank").show();
    		}
			if (emailId == ""){
				$("#email-blank").show();
    		}
			if (dob == ""){
				$("#date-blank").show();
    		}
			if (phoneNo == ""){
				$("#phoneno-blank").show();
    		} 
    } else {
      var row = "<tr><td>" + capitalizeLetter(fName) + "</td><td>" + capitalizeLetter(lName) + "</td><td>" + emailId + "</td><td>" + dob + "</td><td>" + phoneNo + "</td></tr>";
      $("#contact").append(row);
      document.getElementById("fillForm").reset();
    }
  });


});

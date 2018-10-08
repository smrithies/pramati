$(document).ready(function () {
	$("#dateofbirth").datepicker({
    format: 'mm-dd-yyyy',
    endDate: '+0d',
    autoclose: true,
  });

  $("#fname").keyup(function () {
    $("#fname").css('textTransform', 'capitalize');
  });

  $("#fname").blur(function () {
    if ($(this).val() == "") {
      $("#fname-blank").show();
    } else {
      $("#fname-blank").hide();
    }
  });

  $("#lname").blur(function () {
    if ($(this).val() == "") {
      $("#lname-blank").show();
    } else {
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
    		} else {
      	$("#fname-blank").hide();
    	}
			if (lName == ""){
				$("#lname-blank").show();
    		} else {
      	$("#lname-blank").hide();
    	}
			if (emailId == ""){
				$("#email-blank").show();
    		} else {
      	$("#email-blank").hide();
    	}
			if (dob == ""){
				$("#date-blank").show();
    		} else {
      	$("#date-blank").hide();
    	}
			if (phoneNo == ""){
				$("#phoneno-blank").show();
    		} else {
      	$("#phoneno-blank").hide();
    	}

    } else {
      var row = "<tr><td>" + capitalizeLetter(fName) + "</td><td>" + capitalizeLetter(lName) + "</td><td>" + emailId + "</td><td>" + dob + "</td><td>" + phoneNo + "</td></tr>";
      $("#contact").append(row);
      document.getElementById("fillForm").reset();
    }
  });


});

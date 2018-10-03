function isPhoneNumber(phone){
	var pattern = new RegExp(/^([6-9]+[\d]{9})?$/);
	return pattern.test(phone);
}
function isValidEmailAddress(emailId) {
	var pattern = new RegExp(/^([a-z]+[\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
	return pattern.test(emailId);
}

function capitalize(textboxid, str) {
	if (str && str.length >= 1){       
		var firstChar = str.charAt(0);
		var remainingStr = str.slice(1);
		str = firstChar.toUpperCase() + remainingStr;
		}
		document.getElementById(textboxid).value = str;
}

var flag=0;
function fName(){
	fNam = fillForm.fname.value;
	if(fNam==""){
		document.getElementById("error0").innerHTML="First name cannot be blank";
		document.getElementById("error0").style.color = "red";
		flag=1;
    }
}   
function lName(){
	lNam = fillForm.lname.value;
	if (lNam == "")
	{
		  document.getElementById("error1").innerHTML = "Last name cannot be blank"; 
			document.getElementById("error1").style.color = "red";  
		  flag=1;
	}
	}
function emailId()
{
	emai = fillForm.email.value;
	if (emai == "")
	{
		document.getElementById("error2").innerHTML = "Email cannot be blank";   
		document.getElementById("error2").style.color = "red";  
		flag = 1;
	}
}

function dateOfBirth()
{
	d0 = fillForm.dob.value;
	if(d0 == "")
	{
		document.getElementById("error3").innerHTML = "Dob field cannot be blank";  
		document.getElementById("error3").style.color = "red";   
		flag = 1;
	}
}

function phoneNo()
{
	phon = fillForm.phoneno.value;
	if(phon == "")
	{
		document.getElementById("error4").innerHTML = "Phone number cannot be blank";
		document.getElementById("error4").style.color = "red";     
		flag = 1;
	}

}

function check(form)
{
	flag = 0;
	fName();
	lName();
	emailId();
	dateOfBirth();
	phoneNo();
	insert();
	if(flag == 1){
		  return false;
	}
	else{
		  return true;
	}

}

function checkDate(given_date){
	var GivenDate = given_date;
	var CurrentDate = new Date();
	GivenDate = new Date(GivenDate);

	if(GivenDate > CurrentDate){
	   return 0
	}
	else
	{
	   return 1	    
	}	
}

$(document).ready(function(){
        var date_input=$('input[name="dob"]');
        var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
        date_input.datepicker({
            format: 'mm/dd/yyyy',
            container: container,
            todayHighlight: true,
            autoclose: true,
        })
    })
function fNameAlert(){
	document.getElementById("error0").innerHTML = " "; 
	}
function lNameAlert(){
	document.getElementById("error1").innerHTML = " "; 
	}
function emailAlert(){
	document.getElementById("error2").innerHTML = " "; 
	document.getElementById("error5").innerHTML = " "; 
	}
function dobAlert(){
	document.getElementById("error3").innerHTML = " "; 
	document.getElementById("error6").innerHTML = " "; 
	}
function phoneAlert(){
	document.getElementById("error4").innerHTML = " "; 
	document.getElementById("error7").innerHTML = " "; 
	}

function insert(){
	var fName = document.getElementById("fn").value;
	var lName = document.getElementById("ln").value;
	var emailId = document.getElementById("em").value;
	var dob = document.getElementById("dob").value;
	var phoneNo = document.getElementById("ph").value; 

	if (!fName || !lName || !emailId || !dob || !checkDate(dob) || !phoneNo || !isValidEmailAddress(emailId) || !isPhoneNumber(phoneNo))
	{
	
		if (!isValidEmailAddress(emailId)){
			document.getElementById("error5").innerHTML="Enter email correctly";   
			document.getElementById("error5").style.color = "red";  
			flag = 1;
		}
	
		if (!checkDate(dob)){
			document.getElementById("error6").innerHTML="You have entered future date"; 
			document.getElementById("error6").style.color = "red";   
			flag = 1;
		}
		if (!isPhoneNumber(phoneNo)){
			document.getElementById("error7").innerHTML="Enter phone number correctly";  
			document.getElementById("error7").style.color = "red";  
			flag = 1;
		}

}
else {
	var row = "<tr><td>" + fName + "</td><td>" + lName + "</td><td>" + emailId + "</td><td>" + dob + "</td><td>" + phoneNo + "</td></tr>";
	$("table tbody").append(row);
	document.getElementById("fillForm").reset();
}

}

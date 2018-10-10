$(document).ready(function () {
	$(".number").click(function (e) {
		$("#display1").val($("#display1").val() + $(this).val());
	});
	$(".end1").click(function () {
		$("#display1").val('');
  });
  $(".cancel-each").click(function(e) {
    var the_value = $("#display1").val();
    the_value = the_value.substring(0, the_value.length - 1);
    $("#display1").val(the_value);
  });
	$(".equal").click(function () {
		$("#display1").val(eval($("#display1").val()));
	});
	$("#sine-func").click(function () {
		$("#display1").val(Math.sin($("#display1").val()));
	});
  $("#cos-func").click(function () {
    $("#display1").val(Math.cos($("#display1").val()));
  });
  $("#tan-func").click(function () {
    $("#display1").val(Math.tan($("#display1").val()));
  });
  $("#log-func").click(function () {
    $("#display1").val(Math.log($("#display1").val()));
  });
  $("#log-func").click(function () {
    $("#display1").val(Math.log($("#display1").val()));
  });
  $("#percent").click(function () {
    $("#display1").val(eval(($("#display1").val())/100));
  });
  $("#factorial-func").click(function () {
    $("#display1").val(numFactorial($("#display1").val()));
  });
  $("#absolute-func").click(function () {
    $("#display1").val(Math.abs($("#display1").val()));
  });
  $("#sqrt-func").click(function () {
    $("#display1").val(Math.sqrt($("#display1").val()));
  });
  $("#pi").click(function () {
    $("#display1").val(Math.PI);
  });


  function numFactorial(number){
    let output = 1;
    if(number <= 0){
             output = 1;
    }else{
      for(var i=1; i<=number; i++){
        output = output*i;
      }
    }
    return output;
  }
});

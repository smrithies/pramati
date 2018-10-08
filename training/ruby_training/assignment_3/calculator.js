$(document).ready(function () {

  // $("#one").click(function () {
  //       var x=$(this).val();
  //   document.getElementById("value").value = x;
  //       });


  /*
  $("button").click(function () { 
    var x=$(this).val();
    document.getElementById("value").value = x;
        });

  */

  /*
  var array = [];
  $(".number").click(function () { 
  var x=$(this).val();
  array.push(x);


  document.getElementById("value").value = array.join("");
  });


  var array1 = [];
  $(".cancel-end").click(function () { 
  var y=$("#value").val();
  var string=y.toString();
  for (var i = 0, len = string.length; i < len; i += 1) {
    array1.push(+string.charAt(i));
  }
  array1.pop();
  //array=array1;
  document.getElementById("value").value = array1.join("");
  });*/
  let num1 = '';
  let num2 = '';
  let operator = '';
  let total = '';
  var array = [];
  var array1 = [];
  var array2 = [];
  var num = '';
  var flag = '';


  $(".end").click(function () {
    array1.pop(0);
    alert(array1);
    /*
    var string=y.toString();
    //alert(string);
    for (var i = 0, len = string.length; i < len; i += 1) {
      array1.push(+string.charAt(i));
    }
    array1.pop(0);
    alert(array1);
    //array=array1;
    */
    document.getElementById("value").value = array1.join("");
  });

  (".end").click(function () {
    array1 = [];
    alert(array1);
    document.getElementById("value").value = array1.join("");
  });


  $('.number').on('click', function (e) {
    let btn = e.target.innerHTML;
    //alert(btn);
    if (btn >= '0' && btn <= '9') {
      array1.push(btn);
      array2.push(btn);
      flag = array1.join("");
      flag1 = array2.join("");
      display1(flag);
      //flag1 = "";
      //handleNumber(flag);
      //alert(flag);
      // handleNumber(flag);
    } else if (btn == '+' || btn == '-' || btn == '*' || btn == '/') {
      //alert(flag);
      handleNumber(flag1);
      flag1 = "";
      array2 = [];
      array1.push(btn);
      flag = array1.join("");
      handleOperator(btn);
      display1(flag);
      //flag = "";
      //handleNumber(flag);
      // handleOperator(btn);
      //array1 = [];
    } else {

      //var flag = array1.join("");
      display1(flag);
      //  alert(flag);
      handleNumber(flag1);
      array1 = [];
      flag = "";
    }
  });

  $(".equal").click(function () {
    handleTotal();
    //alert(total);
    displayTotal(total);
  });

  function display1(temp) {
    document.getElementById("value").value = temp;
  }

  function handleNumber(num) {
    //alert(num);
    if (num1 == '') {
      num1 = num;
    } else {
      num2 = num;
    }
    //alert(num1);
    //alert(num2);
    //array.push(num);
    //displayButton(array);

    //  displayButton(num);
  }

  function handleOperator(oper) {
    if (operator === '') {
      operator = oper;
    } else {
      handleTotal();

      operator = oper;
    }

    //array.push(oper);
    //displayButton(array);
    //displayButton(oper); 

  }

  function displayTotal(total) {
    document.getElementById("value").value = total;
  }

  function displayButton(btn) {
    //alert(btn);
    document.getElementById("value").value = btn.join("");
  }

  function handleTotal() {
    //alert(operator);
    switch (operator) {
      case '+':

        total = +num1 + +num2;
        //alert(num1,num2);
        // displayButton(total);
        break;
      case '-':
        total = +num1 - +num2;
        // displayButton(total);
        break;
      case '/':
        total = +num1 / +num2;
        // displayButton(total);
        break;
      case 'X':
        total = +num1 * +num2;
        //s displayButton(total);
        break;
    }
    updateVariables();
  }

  function updateVariables() {
    num1 = total;
    num2 = '';
  }
});
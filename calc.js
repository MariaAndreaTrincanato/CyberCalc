calcScreen = document.getElementById("displayScreen");

//numbers
btn0 = document.getElementById("button0");
btn1 = document.getElementById("button1");
btn2 = document.getElementById("button2");
btn3 = document.getElementById("button3");
btn4 = document.getElementById("button4");
btn5 = document.getElementById("button5");
btn6 = document.getElementById("button6");
btn7 = document.getElementById("button7");
btn8 = document.getElementById("button8");
btn9 = document.getElementById("button9");

//operands
btnPlus = document.getElementById('btn_plus');
btnMinus = document.getElementById('btn_minus');
btnProduct = document.getElementById('btn_product');
btnDivision = document.getElementById('btn_division');

//functions
btnPercent = document.getElementById('btn_perc');
btnSign = document.getElementById('btn_sign');
btnErase = document.getElementById('btn_erase');
btnComa = document.getElementById('btn_coma');
btnRes = document.getElementById('btn_result');

result = document.getElementById('numberRes');


//VARIABLES
var currentNumber=[];
var resultNumber = 0;



//LISTENERS

//------------------------------------------------------------------------------
//buttons
btn0.addEventListener('click', function(){
  currentNumber.push(0);
  console.log('Entered 0')
  result.innerHTML = currentNumber;
});

btn1.addEventListener('click', function(){
  currentNumber.push(1);
  console.log('Entered 1')
  result.innerHTML = currentNumber;
});

btn2.addEventListener('click', function(){
  currentNumber.push(2);
  console.log('Entered 2')
  result.innerHTML = currentNumber;
});

btn3.addEventListener('click', function(){
  currentNumber.push(3);
  console.log('Entered 3')
  result.innerHTML = currentNumber;
});

btn4.addEventListener('click', function(){
  currentNumber.push(4);
  console.log('Entered 4')
  result.innerHTML = currentNumber;
});

btn5.addEventListener('click', function(){
  currentNumber.push(5);
  console.log('Entered 5')
  result.innerHTML = currentNumber;
});

btn6.addEventListener('click', function(){
  currentNumber.push(6);
  console.log('Entered 6')
  result.innerHTML = currentNumber;
});

btn7.addEventListener('click', function(){
  currentNumber.push(7);
  console.log('Entered 7')
  result.innerHTML = currentNumber;
});

btn8.addEventListener('click', function(){
  currentNumber.push(8);
  console.log('Entered 8')
  result.innerHTML = currentNumber;
});

btn9.addEventListener('click', function(){
  currentNumber.push(9);
  console.log('Entered 9')
  result.innerHTML = currentNumber;
});

//------------------------------------------------------------------------------
//operations
btnPlus.addEventListener('click', function(){
  console.log('Pressed the \"plus\" operator')
});

btnMinus.addEventListener('click', function(){
  console.log('Pressed the \"minus\" operator')
});

btnProduct.addEventListener('click', function(){
  console.log('Pressed the \"product\" operator')
});

btnDivision.addEventListener('click', function(){
  console.log('Pressed the \"division\" operator')
});

//------------------------------------------------------------------------------
//calc functions buttons
btnErase.addEventListener('click', function(){
  result.innerHTML = 0;
  console.log('Erased the content');
});

btnPercent.addEventListener('click', function(){
  console.log('Transformed into percents');
});

btnComa.addEventListener('click', function(){
  console.log('Added coma to number');
});

btnSign.addEventListener('click', function(){
  resultNumber = resultNumber * (-1);
  console.log('Changed sign to number');
});

btnRes.addEventListener('click', function(){

  console.log('Execute operations and display the final number');
});

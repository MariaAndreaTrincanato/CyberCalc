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
var isPlus = false;
var isMinus = false;
var isProduct = false;
var isDivision = false;


//LISTENERS

//------------------------------------------------------------------------------
//buttons
btn0.addEventListener('click', function(){
  currentNumber.push(0);
  console.log('Entered 0')
  result.innerHTML = currentNumber.join('');
});

btn1.addEventListener('click', function(){
  if(currentNumber[0]==0 && currentNumber.length==1){
    currentNumber = []
  }
  currentNumber.push(1);
  console.log('Entered 1')
  result.innerHTML = currentNumber.join('');
});

btn2.addEventListener('click', function(){
  if(currentNumber[0]==0 && currentNumber.length==1){
    currentNumber = []
  }
  currentNumber.push(2);
  console.log('Entered 2')
  result.innerHTML = currentNumber.join('');
});

btn3.addEventListener('click', function(){
  if(currentNumber[0]==0 && currentNumber.length==1){
    currentNumber = []
  }
  currentNumber.push(3);
  console.log('Entered 3')
  result.innerHTML = currentNumber.join('');
});

btn4.addEventListener('click', function(){
  if(currentNumber[0]==0 && currentNumber.length==1){
    currentNumber = []
  }
  currentNumber.push(4);
  console.log('Entered 4')
  result.innerHTML = currentNumber.join('');
});

btn5.addEventListener('click', function(){
  if(currentNumber[0]==0 && currentNumber.length==1){
    currentNumber = []
  }
  currentNumber.push(5);
  console.log('Entered 5')
  result.innerHTML = currentNumber.join('');
});

btn6.addEventListener('click', function(){
  if(currentNumber[0]==0 && currentNumber.length==1){
    currentNumber = []
  }
  currentNumber.push(6);
  console.log('Entered 6')
  result.innerHTML = currentNumber.join('');
});

btn7.addEventListener('click', function(){
  if(currentNumber[0]==0 && currentNumber.length==1){
    currentNumber = []
  }
  currentNumber.push(7);
  console.log('Entered 7')
  result.innerHTML = currentNumber.join('');
});

btn8.addEventListener('click', function(){
  if(currentNumber[0]==0 && currentNumber.length==1){
    currentNumber = []
  }
  currentNumber.push(8);
  console.log('Entered 8')
  result.innerHTML = currentNumber.join('');
});

btn9.addEventListener('click', function(){
  if(currentNumber[0]==0 && currentNumber.length==1){
    currentNumber = []
  }
  currentNumber.push(9);
  console.log('Entered 9')
  result.innerHTML = currentNumber.join('');
});

//------------------------------------------------------------------------------
//operations
btnPlus.addEventListener('click', function(){
  if(isPlus){
    result.innerHTML = (Number(memNumber) + Number(result.innerHTML));
  }else if(isMinus){
    result.innerHTML = (Number(memNumber) - Number(result.innerHTML));
  }else if(isProduct){
    result.innerHTML = (Number(memNumber) * Number(result.innerHTML));
  }else if(isDivision){
    result.innerHTML = (Number(memNumber) / Number(result.innerHTML));
  }

  isPlus = true;
  isMinus = false;
  isProduct = false;
  isDivision = false;

  memNumber = result.innerHTML;
  currentNumber = [];
  console.log('Pressed the \"plus\" operator'+','+isPlus)
});

btnMinus.addEventListener('click', function(){
  if(isPlus){
    result.innerHTML = (Number(memNumber) + Number(result.innerHTML));
  }else if(isMinus){
    result.innerHTML = (Number(memNumber) - Number(result.innerHTML));
  }else if(isProduct){
    result.innerHTML = (Number(memNumber) * Number(result.innerHTML));
  }else if(isDivision){
    result.innerHTML = (Number(memNumber) / Number(result.innerHTML));
  }

  isPlus = false;
  isMinus = true;
  isProduct = false;
  isDivision = false;

  memNumber = result.innerHTML;
  currentNumber = [];
  console.log('Pressed the \"minus\" operator'+','+isMinus)
});

btnProduct.addEventListener('click', function(){
  if(isPlus){
    result.innerHTML = (Number(memNumber) + Number(result.innerHTML));
  }else if(isMinus){
    result.innerHTML = (Number(memNumber) - Number(result.innerHTML));
  }else if(isProduct){
    result.innerHTML = (Number(memNumber) * Number(result.innerHTML));
  }else if(isDivision){
    result.innerHTML = (Number(memNumber) / Number(result.innerHTML));
  }

  isPlus = false;
  isMinus = false;
  isProduct = true;
  isDivision = false;

  memNumber = result.innerHTML;
  currentNumber = [];
  console.log('Pressed the \"product\" operator'+','+isProduct)
});

btnDivision.addEventListener('click', function(){
  if(isPlus){
    result.innerHTML = (Number(memNumber) + Number(result.innerHTML));
  }else if(isMinus){
    result.innerHTML = (Number(memNumber) - Number(result.innerHTML));
  }else if(isProduct){
    result.innerHTML = (Number(memNumber) * Number(result.innerHTML));
  }else if(isDivision){
    result.innerHTML = (Number(memNumber) / Number(result.innerHTML));
  }

  isPlus = false;
  isMinus = false;
  isProduct = false;
  isDivision = true;

  memNumber = result.innerHTML;
  currentNumber = [];
  console.log('Pressed the \"division\" operator'+','+isDivision)
});

//------------------------------------------------------------------------------
//calc functions buttons
btnErase.addEventListener('click', function(){
  currentNumber = [];
  result.innerHTML = 0;
  console.log('Erased the content');
});

btnPercent.addEventListener('click', function(){
  result.innerHTML = result.innerHTML/100;
  console.log('Transformed into percents');
});

btnComa.addEventListener('click', function(){
  currentNumber.push('.');
  result.innerHTML = currentNumber.join('');
  console.log('Added coma to number');
});

btnSign.addEventListener('click', function(){
  result.innerHTML = result.innerHTML*(-1);
  console.log('Changed sign to number');
});

btnRes.addEventListener('click', function(){
  if(isPlus){
    result.innerHTML = (Number(memNumber) + Number(result.innerHTML));
  }else if(isMinus){
    result.innerHTML = (Number(memNumber) - Number(result.innerHTML));
  }else if(isProduct){
    result.innerHTML = (Number(memNumber) * Number(result.innerHTML));
  }else if(isDivision){
    result.innerHTML = (Number(memNumber) / Number(result.innerHTML));
  }

  isPlus = false;
  isMinus = false;
  isProduct = false;
  isDivision = false;

  memNumber = result.innerHTML;
  currentNumber = [];

  console.log('Execute operations and display the final number');
});

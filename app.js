var btnTranslate = document.querySelector('#btn-translate')
var txtInput = document.querySelector('#txt-input')
var btnPrimary = document.querySelector('.btn-primary') 
var inputTranslator = document.querySelector('input[name="translator"]')
var textArea = document.querySelector("textarea");
// var textArea = document.querySelectorAll("textarea"); //all


console.log(btnTranslate);
console.log(txtInput);
console.log(btnPrimary);
console.log(inputTranslator);
console.log(textArea);



function clickHandler() {
  console.log('clicked');
  console.log('input is ' + txtInput.value);
}

// tolisten to event 
btnTranslate.addEventListener('click', clickHandler)




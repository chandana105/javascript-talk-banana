var btnTranslate = document.querySelector('#btn-translate')
var txtInput = document.querySelector('#txt-input')

console.log(btnTranslate);
console.log(txtInput);



function clickHandler() {
  console.log('clicked');
  console.log('input is ' + txtInput.value);
}

// tolisten to event 
btnTranslate.addEventListener('click', clickHandler)




// input taken from here
var txtInput = document.querySelector('#txt-input')

// on click processing ll be done
var btnTranslate = document.querySelector('#btn-translate')

// ll give output
var outputDiv = document.querySelector('#output');



function clickHandler() {
  outputDiv.innerText= 'translated:' + txtInput.value
}

btnTranslate.addEventListener('click', clickHandler)




// to get btn reference in javascript
var btnTranslate = document.querySelector('#btn-translate')

console.log(btnTranslate);

// storing btnrefrece as globalvariable
// temp1.style.backgroundColor = 'red'
// doing things using javascript on ur html: domScripting


function clickHandler() {
  console.log('clicked');
}

// tolisten to event 
btnTranslate.addEventListener('click', clickHandler)


// google
// document.body.style.backgroundColor = 'blue'


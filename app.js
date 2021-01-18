// input taken from here
var txtInput = document.querySelector('#txt-input')

// on click processing ll be done
var btnTranslate = document.querySelector('#btn-translate')

// ll give output
var outputDiv = document.querySelector('#output');

const serverURL = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json'

// ?text=testing

function getTranslationURL(text) {
  return serverURL + '?' + 'text=' + text
}

function clickHandler() {
  // outputDiv.innerText= 'translated:' + txtInput.value

  let inputText = txtInput.value
  fetch(getTranslationURL(inputText))
    .then(res => res.json())
    .then(json => console.log(json.contents.translated))
}

btnTranslate.addEventListener('click', clickHandler)



// var text1 = 'I am Iron Man'
// undefined
// var text2 = 'I am Shaktimaan'
// undefined
// var text3 = 'I am Batman'
// undefined
// function constructURL(text) {
//     return 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json' + '?text=' + text }
// undefined
// constructURL(text1)
// "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I am Iron Man"
// function doFetch(text) {
//     fetch(constructURL(text)) .then(response => response.json()) .then(json => console.log(json)) }
// undefined
// doFetch(text1)




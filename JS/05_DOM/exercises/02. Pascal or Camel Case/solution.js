function solve() {
  let textElement = document.getElementById('text');
  let textTypeElement = document.getElementById('naming-convention');
  let resultElement = document.getElementById('result');

  let textAsArray = textElement.value.split(' ')
  let finalWord = ''

  for (let word of textAsArray) {
    word = word.toLowerCase()
    finalWord += word[0].toUpperCase() + word.slice(1)
  }

  if (textTypeElement.value === 'Pascal Case') {
    resultElement.innerHTML = finalWord
  } else if (textTypeElement.value === 'Camel Case') {
    finalWord = finalWord[0].toLowerCase() + finalWord.slice(1)
    resultElement.innerHTML = finalWord
  } else {
    resultElement.innerHTML = 'Error!'
  }
}
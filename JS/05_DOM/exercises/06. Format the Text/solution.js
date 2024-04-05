function solve() {
  let textAreaElement = document.getElementById('input');
  let outputDivElement = document.getElementById('output');

  let sentances = textAreaElement.value.split('.').filter(sentance => !!sentance)
  let groupedSentances = []

  for (let index = 0; index < sentances.length; index++) {
    if (index % 3 == 0) {
      let arr = sentances.slice(index, index + 3)
      groupedSentances.push(arr)
    }
  }

  for (const pair of groupedSentances) {
    outputDivElement.insertAdjacentHTML('beforeend', `<p>${pair.join('. ')}.</p>`)
  }

}
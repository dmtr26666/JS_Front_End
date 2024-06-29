function create(words) {
   let outputElement = document.getElementById('content');

   let divs = words.map(element => {
      let newDiv = document.createElement('div');
      let newPara = document.createElement('p');

      newPara.textContent = element;

      newDiv.appendChild(newPara);

      return newDiv
   });

   for (const div of divs) {
      div.firstChild.style.display = 'none';

      div.addEventListener('click', (e) => {
         e.target.firstChild.style.display = 'block';
      });
   }

   for (const dov of divs) {
      outputElement.appendChild(dov)
   }
  
    
}
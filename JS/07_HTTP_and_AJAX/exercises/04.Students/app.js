function attachEvents() {
  let dbUrl = 'http://localhost:3030/jsonstore/collections/students';
  const firstNameEL = document.querySelector('.inputs input[name=firstName]');
  const lastNameEL = document.querySelector('.inputs input[name=lastName]');
  const facultyNumberEL = document.querySelector('.inputs input[name=facultyNumber]');
  const gradeEL = document.querySelector('.inputs input[name=grade]');
  const submitBtnEl = document.getElementById('submit');
  const outputEl = document.querySelector('#results tbody');

  function refresh() {
    outputEl.innerHTML = '';
    fetch(dbUrl)
    .then(response => response.json())
    .then(data => {
        for (const key in data) {
            const name = data[key].firstName;
            const last = data[key].lastName;
            const faculty = data[key].facultyNumber;
            const score = data[key].grade;

            let trEl = document.createElement('tr');

            let nameThEl = document.createElement('th');
            nameThEl.innerHTML = name;
            trEl.appendChild(nameThEl);

            let lastThEl = document.createElement('th');
            lastThEl.innerHTML = last;
            trEl.appendChild(lastThEl);

            let facultyThEl = document.createElement('th');
            facultyThEl.innerHTML = faculty;
            trEl.appendChild(facultyThEl);

            let scoreThEl = document.createElement('th');
            scoreThEl.innerHTML = score;
            trEl.appendChild(scoreThEl);

            outputEl.appendChild(trEl);
        }
    })
    .catch(err => console.log(err))
}
  
    window.addEventListener("load", refresh());

    submitBtnEl.addEventListener('click', () => {
        fetch(dbUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstNameEL.value,
                lastName: lastNameEL.value,
                facultyNumber: facultyNumberEL.value,
                grade: gradeEL.value
            })
        })
        .then(response => response.json())
        .then(data => refresh())
        .catch(err => console.log(err))
        })
    
    }

    

attachEvents();

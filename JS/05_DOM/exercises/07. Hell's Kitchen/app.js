function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let textAreaElement = document.querySelector('#inputs textarea');
      let submitElement = document.getElementById('btnSend');
      let bestRestOutputElement = document.querySelector('#outputs #bestRestaurant p');
      let bestWorkersOutputElement = document.querySelector('#outputs #workers p');

      let restaurants = [];

      let inputAsArray = JSON.parse(textAreaElement.value);

      //Sort input into an object
      for (const restaur of inputAsArray) {
         let [rest_name, workers] = restaur.split(' - ')
         let workersArray = workers.split(', ')

         let exists = false;
         let rest_ref;

         if (restaurants) {
            for (const rest of restaurants) {
               if (rest.name === rest_name) {
                  exists = true;
                  rest_ref = rest;
                  break;
               }
            }
         }

         if (exists) {
            for (const worker of workersArray) {
               let [name, salary] = worker.split(' ')
   
               rest_ref.workers.push({name, salary})
            }
         } else {
            let restaurantObject = {name: rest_name, workers: []};

            for (const worker of workersArray) {
               let [name, salary] = worker.split(' ')
   
               restaurantObject.workers.push({name, salary})
            }
   
            restaurants.push(restaurantObject)
         } 
      }

      //Calculate average and highest salary per restaurant
      function calculateAverageAndHighestSalary() {
         for (const restaurant of restaurants) {
            let initialValue = 0;
            let averageSalary = (restaurant.workers.reduce((sum, worker) => sum + Number(worker.salary), initialValue) / restaurant.workers.length).toFixed(2)
            let highestSalary = Math.max(...restaurant.workers.map((p) => p.salary), 0);

            restaurant.avgSalary = averageSalary
            restaurant.highestSalary = highestSalary
         }
      }
      calculateAverageAndHighestSalary()

      let bestRestaurant = restaurants.reduce((prev, current) => {
         return prev.highestSalary > current.highestSalary ? prev : current
      });

      let bestWorkers = bestRestaurant.workers
      .sort((a, b) => b.salary - a.salary)
      .map(worker => `Name: ${worker.name} With Salary: ${worker.salary}`);

      bestRestOutputElement.innerHTML = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary} Best Salary: ${bestRestaurant.highestSalary.toFixed(2)}`
      bestWorkersOutputElement.innerHTML = `${bestWorkers.join(' ')}`
   }
}



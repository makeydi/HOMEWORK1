const weekDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let task2 = document.createElement('div');
task2.className = 'task';
task2.innerHTML = `Задание 2:<br><br>Входные данные<br> ${weekDays} <br><br>Результат<br>`;
let result = document.createElement('div');
result.className = 'result flex'
  for (let i = 0; i < weekDays.length; i++) {
      if (i > 4) {
        let weekElements = document.createElement('div');
        weekElements.className = ('result bold');
        weekElements.innerHTML = (`${weekDays[i]},  `);
        result.appendChild(weekElements);
      }
      else {
        let weekElements = document.createElement('div');
        weekElements.innerHTML = (`${weekDays[i]}, `);
        weekElements.className = 'result';
        result.appendChild(weekElements);
      } 
  }
document.body.append(task2);
task2.appendChild(result);
  
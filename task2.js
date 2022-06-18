const weekDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

let task2 = document.createElement('div');
  task2.className = 'task';
  task2.innerHTML = 'Задание 2:' + '<br>' + '<br>' + 'Входные данные '+ '<br>' + weekDays + '<br>'+'<br>' + 'Результат' + '<br>';
document.body.append(task2);
  let weekElements = document.createElement('div');
weekElements.className = 'result';
  for (let i = 0; i<weekDays.length; i++) {
      if (i>4) {weekElements.insertAdjacentHTML('beforeend', '<b>' + weekDays[i] + '</b>' + ' ');}
      else {weekElements.insertAdjacentHTML("beforeend", weekDays[i] + " ");} 
    
  }
  document.body.append(weekElements);
  
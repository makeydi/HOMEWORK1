const weekArray = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

let task6 = document.createElement('div');
  task6.className = 'task';
  task6.innerHTML = 'Задание 6:' + '<br>' + '<br>' + 'Входные данные '+ '<br>' + weekArray + '<br>'+'<br>' + 'Результат' + '<br>';
document.body.append(task6);
  let weekBox = document.createElement('div');
weekBox.className = 'result';
  weekArray.forEach((element,index) => {
    let day = new Date();
    let dayNow = day.getDay();
    if (index == (dayNow-1)) { weekBox.insertAdjacentHTML("beforeend", '<i>' + element + "</i>, ");} 
    else {weekBox.insertAdjacentHTML("beforeend", element + ", ");}
    })
  task6.appendChild(weekBox);
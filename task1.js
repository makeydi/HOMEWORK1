const obj = {
    'Минск': 'Беларусь',
    'Москва': 'Россия',
    'Киев': 'Украина'
};

  let task1 = document.createElement('div');
  task1.className = 'task';
  task1.innerHTML = `Задание 1:<br><br>Входные данные<br>ключи: ${Object.keys(obj)}<br>элементы: ${Object.values(obj)}<br><br>Результат`;
  document.body.append(task1);

  for (let key in obj) {
    let string = document.createElement('div');
    string.innerHTML = key + " - это " + obj[key] + ".";
    task1.append(string);
  }
  

const vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];
let task3 = document.createElement('div');
  task3.className = 'task';
  task3.innerHTML = 'Задание 3:' + '<br>' + '<br>' + 'Входные данные '+ '<br>' + `vegetables = ["Капуста", "Репа", "Редиска", "Морковка"]` + '<br>'+'<br>' + 'Результат' + '<br>';
document.body.append(task3);
function copyArr(arr) {
    return arr.slice();
}

let arroyClone = copyArr(vegetables);
let result = document.createElement("div");
result.className = 'result';
result.innerHTML = arroyClone;
document.body.append(result);


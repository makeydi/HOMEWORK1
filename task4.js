const array = ['Car', 56, 'city', 'money', 1];
let task4 = document.createElement('div');
  task4.className = 'task';
  task4.innerHTML = 'Задание 4:' + '<br>' + '<br>' + 'Входные данные '+ '<br>' + `array = ['Car', 56, 'city', 'money', 1]` + '<br>'+'<br>' + 'Результат' + '<br>';
document.body.append(task4);
toString();
function toString() {
    let array1 = array.join(', ');
    let result = document.createElement('div');
    result.className = 'result';
    result.innerHTML = array1;
    document.body.append(result);
}
toString2();
function toString2(){
 let result = document.createElement("div");
 result.className = "result";
for (let i=0; i<array.length; i++) {
   result.insertAdjacentText('beforeend', array[i] + ', ');
}
document.body.append(result);
}

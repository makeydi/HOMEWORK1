import removeDuplicates from "./task7.js";
const array1 = [5, 2, 1, -10, 8];
const array2 = [5, 2, 1, -9, 3, 7];
const task8 = document.createElement('div');
task8.className = ('task');

const union = function(array1,array2) {
    const array3 = array1.concat(array2);
    return removeDuplicates(array3);
}
task8.innerHTML = `Задание 8<br><br>Входные данные<br> ${array1} <br> ${array2} <br><br>Результат<br> ${union(array1,array2)}`;
document.body.append(task8);
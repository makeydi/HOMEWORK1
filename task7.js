const arr = ["php", "php", "css", "css", "script", "script", "html", "html", "java"];
const task7 = document.createElement('div');
task7.className = ('task');
task7.innerHTML = `Задание 7:<br><br>Входные данные<br> ${arr} <br><br>Результат<br> ${removeDuplicates(arr)}`;  
document.body.append(task7);
function removeDuplicates(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let str =' ' + arr[i];
        if (newArr.indexOf(str) === -1) newArr.push(str);
    }
    return newArr;
}
export default removeDuplicates;


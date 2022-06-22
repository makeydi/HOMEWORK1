const task5 = document.createElement('div');
task5.className = ('task');
const btn = document.createElement('button');
btn.className = ('btn');
btn.innerHTML = 'Задание 5';
document.body.append(task5);
task5.appendChild(btn);
btn.addEventListener('click', () => openTask());

function openTask(){
    const num = prompt('Введите число', 55);
    function colonOdd(num) {
        let number = num.toString();
        let newNumber = [number[0]];
        for( let i = 1; i < number.length; i++) {
            if((number[i - 1] % 2 !== 0)&&(number[i] % 2 !== 0)) {
              newNumber.push(':', number[i]);
            }
            else {
              newNumber.push(number[i]);
            }
        }
    return newNumber.join('');  
    }
    let result = document.createElement('div');
    result.className = 'result';
    result.innerHTML = `Входные данные<br>${num}<br>Результат<br>${colonOdd(num)}`;
    task5.appendChild(result);
}


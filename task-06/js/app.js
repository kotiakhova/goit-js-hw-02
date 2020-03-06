'use strict'


const numbers = [];
let total = 0;
let input;
let number;
do {
    input = prompt('Введите число.');
    if (!Number.isNaN(Number(input))) {
        if (input !== null ){
            numbers.push(input);
        }
    } else {
        alert ('Было введено не число, попробуйте еще раз');
    }
} while (input !== null);
  
if (numbers[0]) {
    for ( number of numbers) {
        total = total + Number(number);
    }
     alert( `Общая сумма чисел равна ${total}` );    
} else {
    alert('Вы ничего не ввели :(');

}

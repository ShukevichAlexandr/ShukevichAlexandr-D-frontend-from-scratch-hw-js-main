/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/

let dice1 = Math.floor(Math.random() * 7)
let dice2 = Math.floor(Math.random() * 7)
let isWinningDouble // your code



while(dice1 === 0){
  dice1 = Math.floor(Math.random() * 7)
}

while(dice2 === 0){
  dice1 = Math.floor(Math.random() * 7)
}


if(dice1 === dice2 && dice1 > 3) {
        isWinningDouble = true
} else {
        isWinningDouble = false
}


// document.write('dice1:' + dice1  + '   ' + 'dice2:' + dice2 + '   ' + 'isWinningDouble:' + isWinningDouble)

/*
console.log('Первый бросок: ' + dice1)
console.log('Второй бросок: ' + dice2)
if (isWinningDouble) {
console.log('Выигрышный дубль!')
} else {
console.log('Не выигрышный дубль.')
}
*/
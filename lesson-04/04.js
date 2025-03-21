/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

const myWord = "pice"
function doubleEachCharacter(word) {
let doubledWord = "";
for (let i = 0; i < word.length; i++) {
    doubledWord += word[i] + word[i];
}
return doubledWord;
}

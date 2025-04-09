/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
  return /^-?\d+(?:\.\d+)?(?:e[-+]?\d+)?$/i.test(str);
}

// Пометка
// ^ — Начало строки.
// -? — Опциональный знак минус в начале числа.
// \d+ — Последовательность из одной или более цифр.
// (?: — Начинает незаименованную группу (которая не захватывается).
// \. — Точка, отделяющая целую часть от дробной.
// \d+ — Дробная часть (одна или более цифр после точки).
// ) — Завершение группы.
// (?: — Начинает вторую незаименованную группу.
// e — Буква e, указывающая на научную запись числа.
// [-+]? — Опциональный знак плюса или минуса после буквы e.
// \d+ — Экспонента (одна или более цифр после e).
// ) — Завершение второй группы.
// $ — Конец строки.
// i — Игнорирование регистра (этот флаг не влияет на цифры, но может быть полезен, если позже будут добавлены другие символы).



// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("abc")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false

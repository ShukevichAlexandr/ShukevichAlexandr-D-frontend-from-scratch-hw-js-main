/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(Words) {
  ArrayWords = Words.split('');
  ArrayWords[0] = ArrayWords[0].toUpperCase()
  for (let i = 0; i < Words.length; i++) {
      if (ArrayWords[i] === " ") {
          ArrayWords[i+1] = ArrayWords[i+1].toUpperCase()
  }}
  return ArrayWords.join('')
  }

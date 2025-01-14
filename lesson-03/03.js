// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(...numbers) {
let largest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > largest) {
        largest = numbers[i];
    }
    }
    return largest;
}

// const result = findLargest(1, 3, 5, 7, 9, 11);
// alert(result)
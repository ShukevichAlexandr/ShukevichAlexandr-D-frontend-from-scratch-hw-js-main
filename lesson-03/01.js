// Напишите функцию calculateAverage, которая принимает 2 числа и возвращает их среднее арифметическое



function calculateAverage(a, b) {
    if(typeof a !== 'number' || typeof a !== 'number'){
        throw new Error('Введено не число');
    }
    return (a + b) / 2;
}

// const result = calculateAverage(2,4);
// alert(result);
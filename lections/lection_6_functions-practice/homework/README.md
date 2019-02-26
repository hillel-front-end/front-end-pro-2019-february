# Изучить материал
+ https://drive.google.com/open?id=0B121aJ52ADuLRW5vblBwYnlROG8 (страницы 185-214)
+ http://learn.javascript.ru/function-declaration-expression
+ https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions
+ https://myrusakov.ru/javascript-closures.html


# Практика

1) Функция должна вернуть массив из центральных элементов переданных массивов.

    Центральный элемент, это один центральный, если массив по длине непарный [1, 2, 3, 4, 5] -> 3

    Центральный элемент, это пара центральных, если массив по длине парный: [1, 2, 3, 4, 5, 6] -> 3, 4

2) Написать функцию, которая получает 3 аргумента: два числа и функцию. Произвести вызов переданной функции с двумя аргументами числами.
`doFunction(2, 3, power);` в ответе должны получить 8, как 2 в степени 3.

3) Из п.2 реализовать функции sum, div, mul, power

`doFunction(16, -23, mul); // 16*(-23)`
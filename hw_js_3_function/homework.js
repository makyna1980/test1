// 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
// function getRes(a, b) {
//     if (a < b) {
//         return -1;
//     } else if (a > b) {
//         return 1;
//     } else {
//         return 0;
//     }
// }
// getRes(5, 10)


// 2. Написать функцию, которая вычисляет факториал переданного ей числа.
// function getFactorial(a) {
//     let res = 1;
//     for (let i = 1; i <= a; i++) {
//         res = res * i;
//         return res;
//     }
// }
// getFactorial(10)

//3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
// function getNum(a, b, c) {
//     let res = 0;
//     res = ((a * 100) + (b * 10) + c);
//     return res;
// }
// getNum(1, 2, 3)


//4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
// function getSquare(a, b) {
//     let res = 0;
//     if (a = 0) {
//         res *= b;
//     } else if (b = 0) {
//         res *= a;
//     } else {
//         res = a * b;
//     }
//     return res;
// }
// getSquare(6, 7)

//5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
// function checkNum()
// let a = +prompt("Ведите число");
// let res = 0;
// if (a < 0 || a > 0) {
//     for (let i = 1; i <= a; i++) {
//         if (a % i == 0) {
//             res = res + i
//         }
//     }
//     if (a == res) {
//         return console.log(`Число ${a} совершенно`);
//     } else {
//         console.log(`Число ${a} несовершенно`);
//     }
// } else {
//     console.log(`Вы ввели 0`)
// }
// checkNum()


// Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 
// function getNumList() {
//     let num1 = +prompt("введите число 1");
//     let num2 = +prompt("введите число 1");
//     let min = 0, max = 0;
//     if (num1 > num2) {
//         num1 = max;
//         num2 = min;
//     } else {
//         num1 = min;
//         num2 = max;
//     }
//     И ФИГ ЕГО ЗНАЕТ, ЧТО ДАЛЬШЕ
//     function checkNum() {
//         for (let i = min; i <= max; i++) {
//             if (a % i == 0) {
//                 res = res + i
//         }


// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
// Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
// Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

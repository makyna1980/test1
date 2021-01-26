/*-----------ДОМАШНЯЯ ДОМАШКА------------------*/


// 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета,
//  для которого она предназначена. Написать несколько функций для работы с ним^
// let arr = [{
//     area: 'AB Auditory',
//     seats: 20,
//     facultet: "Information technology",
// },
// {
//     area: 'BC Auditory',
//     seats: 18,
//     facultet: "Design",
// },
// {
//     area: 'AC Auditory',
//     seats: 20,
//     facultet: "Irtificail intellegence",
// },
// {
//     area: 'BB Auditory',
//     seats: 15,
//     facultet: "Cheating and mealing",
// }
// ];
// Вывод на экран всех аудиторий;

// function printInfo(arr) {
//     console.log('    area    ', ' seats', '       facultet       ')
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i].area, ' ', arr[i].seats, 'pcs', ' ', arr[i].facultet);
//     }
// }
// printInfo(arr);

// Вывод на экран аудиторий для указанного факультета;

// function printAuditory(facultet, arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (facultet === arr[i].facultet) {
//             console.log(arr[i].area, ' ', arr[i].seats, 'pcs', ' ', arr[i].facultet);
//         }
//     }
// }
// printAuditory('Cheating and mealing', arr)

// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;

// function checkAuditory(facultet, seats, group, arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (facultet === arr[i].facultet && seats <= arr[i].seats) {
//             console.log(`Группе ${group}, факультет ${arr[i].facultet} подходит ${arr[i].area}, рассчитанная на ${arr[i].seats} мест`);
//         } else if (facultet === arr[i].facultet && seats > arr[i].seats) {
//             console.log(`К сожалению ${arr[i].area} не рассчитана на ${seats} мест.`);
//         } else if (facultet != arr[i].facultet && seats <= arr[i].seats) {
//             console.log(`Группа ${group} с другого факультета, но мест в ${arr[i].area} для нее достаточно`);
//         }
//     }
// }
// checkAuditory('Cheating and mealing', '20', '318', arr)

// Функция сортировки аудиторий по количеству мест;

// let newArr = arr.concat();

// function sortSeats(arr) {
//     arr.sort(function (a, b) {
//         return a.seats - b.seats
//     })
//     // arr.reverse();  //по убыванию
//     console.log('    area    ', ' seats', '       facultet       ')
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i].area, ' ', arr[i].seats, 'pcs', ' ', arr[i].facultet);
//     }
// }
// sortSeats(newArr)

// Функция сортировки аудиторий по названию (по алфавиту).

// let newArr = arr.concat();

// function sortAuditory(arr) {
//     arr.sort(function (a, b) {
//         var areaA = a.area.toLowerCase(), areaB = b.area.toLowerCase()
//         if (areaA < areaB) //сортируем строки по возрастанию
//             return -1
//         if (areaA > areaB)
//             return 1
//         return 0 // Никакой сортировки
//     })
//     // arr.reverse();  //по убыванию
//     console.log('    area    ', ' seats', '       facultet       ')
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i].area, ' ', arr[i].seats, 'pcs', ' ', arr[i].facultet);
//     }
// }
// sortAuditory(newArr)

/*-----------------------------КОНЕЦ---------------------------*/



// 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
// let shoplist = [
//     {
//         name: 'apple',
//         qty: 10,
//         isBought: false,
//     },
//     {
//         name: 'chicken',
//         qty: 2,
//         isBought: true,
//     },
//     {
//         name: 'bread',
//         qty: 1,
//         isBought: false,
//     }
// ];

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// let newArr = shoplist.concat();

// console.log(shoplist)

// function sortList(arr) {
//     arr.sort(function (a, b) {
//         return a.isBought - b.isBought
//     })
//     console.log(arr)
// }
// sortList(newArr)

// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.

// function addProduct(arr, item) {
//     let index = arr.findIndex(x => x.name === item.name);
//     if (index == -1) {
//         arr.push({
//             name: item.name,
//             quantity: item.qty,
//             isBought: false
//         });
//     } else {
//         arr[index].qty = arr[index].qty + item.qty;
//     }
// }
// addProduct(shoplist, { name: "bread", qty: 2})

// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
// function buyItem(arr, item) {
//     let index = arr.findIndex(x => x.name === item);
//     if (index > 0 && arr[index].isBought != true) {
//         arr[index].isBought = true
//     };
//     console.log(arr[index])
// }
// buyItem(shoplist, "bread")

/*---------------------------------------------*/

// function changeStatus(product, arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (product === arr[i].item) {
//             arr[i].ifb = true;
//         }
//     }
//     console.log(arr);
// }
// changeStatus('apple', arr)

// 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:

// let arr = [{
//     title: 'bread',
//     qty: 2,
//     price: 10,
// },
// {
//     title: 'milk',
//     qty: 3,
//     price: 20,
// },
// {
//     title: 'apple',
//     qty: 5,
//     price: 20
// },
// {
//     title: 'banana',
//     qty: 10,
//     price: 29
// },
// {
//     title: 'whisky',
//     qty: 10,
//     price: 500
// }
// ];
// Распечатка чека на экран;

// function printBill(arr) {
//     console.log('No', 'Name', 'Qty', 'Price')
//     for (let i = 0; i < arr.length; i++) {
//         console.log(i + 1, arr[i].title, '|', arr[i].qty, '|', arr[i].price, 'uah');
//     }
// }
// printBill(arr);

// Подсчет общей суммы покупки;
// function printSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i].qty * arr[i].price;
//     }
//     console.log(`Итого: ${sum}`);
// }
// printSum(arr);

// Получение самой дорогой покупки в чеке;
// function printMax(arr) {
//     let max = 0;
//     let name = ''
//     for (let i = 0; i < arr.length; i++) {
//         max = arr[i].price * arr[i].qty;
//         name = arr[i].title;
//     }
//     console.log('самая дорога покупка:' + name + "=" + max);
// }
// printMax(arr);

// Подсчет средней стоимости одного товара в чеке.
// function printAver(arr) {
//     let sum = 0;
//     let aver = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = (arr[i].price * arr[i].qty);
//     }
//     let all = arr.length;
//     aver = sum / all;
//     console.log('Средний чек:' + aver);
// }
// printAver(arr);



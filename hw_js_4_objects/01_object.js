// // 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
// let auto = {
//     maker: volkswagen,
//     model: golf,
//     mnfyear: 2002,
//     speed: 60,
//     // Функция для вывода на экран информации об автомобиле;
//     getInfo: function () {
//         return console.log(this.maker, this.model, this.mnfyear, this.speed)
//     },
//     // Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
//     getTime: function (dist, time) {
//         this.dist = +prompt('Введите расстояние')
//         this.rest = (this.dist % this.speed) / 4;
//         if (this.rest <= 4) {
//             this.time = this.dist % this.speed
//         } else {
//             this.time = (this.dist % this.speed) + this.rest;
//         }
//         return this.time;
//     }
// }

// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 
// let fraction = {
//     numerator: 2,
//     divider: 7,
//     // Функция сложения 2-х объектов-дробей;
//     getSum: function () {
//         return this.numerator + this.divider
//     },
//     // Функция вычитания 2-х объектов-дробей;
//     Subtr: function () {
//         return this.divider + this.numerator
//     },

//     // Функция умножения 2-х объектов-дробей;
//     getMul: function () {
//         return this.numerator * this.divider
//     },
//     // Функция деления 2-х объектов-дробей;
//     getDivi: function () {
//         return this.divider + this.numerator
//     },
//     // Функция сокращения объекта-дроби.
//     getReduction: function (max, min) {
//         let min = 1;
//         let max = 1;
//         for (let i = this.numerator; i <= this.divider; i++) {
//         if (min % i == 0 && max % i == 0) {
//             this.res = i;
//         };
//         return this.numerator/i, this.divider/i
//         }
//     } 
// }

// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
let clock = {
    hour: 12,
    min: 20,
    sec: 59,
    //     // Функция вывода времени на экран;
    // getTime: function () {
    //     return + this.hour + ":" + this.min + ":" + this.sec
    // }
    //     // Функция изменения времени на переданное количество секунд;
    getNTime: function (nsec) {
        if (this.nsec > 59 && this.nsec != 60) {
            this.sec = Math.abs(this.nsec - ((Math.trunc(this.nsec / 60)) * 60) + this.sec - 60);
            this.min = this.min + Math.trunc(this.nsec / 60);
            this.hour = this.hour + Math.trunc(this.min / 60);
            if (this.min > 59 && this.min != 60) {
                this.min = Math.abs(this.min + (Math.trunc(this.min / 60)) - 60);
            }
            else if (this.min % 60 == 0) {
                this.min = '00';
            }
            if (this.hour = 24) {
                this.hour = '00';
            }
        }
        else if (this.nsec % 60 == 0) {
            this.sec = '00';
            this.min = 60 - (this.min - (this.sec / 60));
        }
        else if (this.nsec < 59) {
            this.sec = this.sec + this.nsec;
            if (this.sec > 59 && this.sec != 60) {
                this.sec = this.sec - (Math.trunc(this.sec / 60) * 60);
                this.min = this.min + Math.trunc(this.sec / 60)
            }
        }
        return + this.hour + ":" + this.min + ":" + this.sec
    }
}
// Функция изменения времени на переданное количество минут;

// Функция изменения времени на переданное количество часов. 

// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

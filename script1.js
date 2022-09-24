// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }

// Проверить, чтобы все работало без ошибок в консоли */


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', '');
    b = prompt(- 'На сколько оцените его?', '');
    c = prompt('Один из последних просмотренных фильмов?', '');
    d = prompt('На сколько оцените его?', '');

    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

    console.log(personalMovieDB);

// //  19.  Условия

//  const burger = 5;
//  const fri = 0;

//  if (burger && fri) {
//     console.log('Я ситий');
//  }

// console.log((burger && fri))

// const burger = 3;
// const fri = 3;
// const cola = 0;
// const naggets = 5;

// console.log(burger === 3 && cola && fri );

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'fdsghfdsghfds');


// if (burger === 3 && cola === 2 || fri === 3 && naggets) {    // там де fri === 1 можна писати просто fri якщо потрібна одиниця
//     console.log('все ок');
// }else {
//     console.log('йдем звідси)');
// }

// console.log(burger === 3 && cola === 2 || fri === 3 && naggets);
// console.log(burger || cola || fri);


// console.log(NaN || 2 || undefined);
// console.log(NaN && 2 && undefined);
// console.log(1 && 2 && 3);
// console.log(!1 && 2 || !3);
// console.log(25 || null && !3);
// console.log(NaN || null || !3 || undefined || 5);
// console.log(NaN || null && !3 && undefined || 5);
// console.log(5 === 5 && 3 > 1 || 5);



// let a, b, c, d = 'done';

// console.log(a || b || c || d);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }



// const burger = 3;
// const fri = 3;
// const cola = 20;

// if (burger === 3 && cola === 2 && fri === 3) {    // там де fri === 1 можна писати просто fri якщо потрібна одиниця
//   console.log('все ок');
// }else {
//   console.log('йдем звідси)');
// }

// // 21. Цикл в цикле и метки




'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

console.log (personalMovieDB);

for (let i=0; i<2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
        console.log ('error');
    }
}

if (personalMovieDB.count < 10) {
    console.log('просмотрено довольно мало фильмов');
} else if (10 <= personalMovieDB.count <= 30) {
    console.log('вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('вы киноман!');
} else {
    console.log('произошла ошибка');
}
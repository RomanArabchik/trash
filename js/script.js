'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
       this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        // isNaN - если пользователь ввел не число выдает правду
        while (this.count == '' || this.count == null || isNaN(this.count)) {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('просмотрено довольно мало фильмов');
        } else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('вы киноман!');
        } else {
            console.log('произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toogleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i<=3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (genre == null || genre === '') {
                i--;
            } else{
                personalMovieDB.genres[i-1]=genre;    
            }
        }
        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        });
    }
};

personalMovieDB.start();



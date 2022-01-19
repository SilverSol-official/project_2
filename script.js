"use strict";
let numberOfFilms = +prompt("Сколько фильмов вы просмотрели ?");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
let name,mark;
for (let i = 0; i < numberOfFilms; i++) {
     name = prompt("Один из просмотренных фильмов?","");
    if ((name.length >= 50)||(name == "")){
       alert("error");
        do{
        name = prompt("Введите корректное название");
        }while((name.length >= 50)||(name == "")) 
    }
     mark = +prompt("На сколько оценете его?");
    personalMovieDB.movies[name]=mark;
}


if (personalMovieDB.count < 10) {
    alert("Вы просмотрели слишком мало фильмов");
} else if ((personalMovieDB.count > 10) || (personalMovieDB.count < 30)) {
    alert("Вы - классический зритель");
} else if (personalMovieDB.count > 50) {
    alert("Вы - киноман");
} else {
    alert("ERROR 404")
}

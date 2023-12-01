/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Неудержимые",
        "Скотт Пилигрим против..."
    ]
};

// lesson 1
let advertising = document.querySelectorAll('.promo__adv img');
advertising.forEach(function (item) {
    item.remove()
})

// lesson 2 and 3
let poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre')
genre.innerHTML = 'Драма'
poster.style.backgroundImage = 'url("img/bg.jpg")';

// lesson 4 and 5
movieDB.movies.sort()

let list = document.querySelectorAll('.promo__interactive-list li');

list.forEach((el, idx) => {
    el.innerHTML = (idx + 1) + ". " + movieDB.movies[idx];

    let trashIcon = document.createElement('div');
    trashIcon.classList.add('delete');
    el.appendChild(trashIcon);

    trashIcon.onclick = () => {
        el.remove()
    }
});
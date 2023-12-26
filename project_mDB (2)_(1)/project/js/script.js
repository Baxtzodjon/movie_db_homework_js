import { movies } from "./db.js";

let cont = document.querySelector('.promo__interactive-list')
let promo__bg = document.querySelector('.promo__bg')
let promo__genre = document.querySelector('.promo__genre')
let promo__title = document.querySelector('.promo__title')
let promo__descr = document.querySelector('.promo__descr')
let p_text = document.querySelector('.p_text')
let menuItems = document.querySelectorAll('.promo__menu-item');
let form = document.querySelector('form');
let inp_search = form.querySelector('.search')
let ul_list = document.querySelector('ul')
let ul_cont = document.querySelector('.ul_container')

let genres = ['All', ...new Set(movies.map(item => item.Genre))]

console.log(
    genres
);

reload(movies, cont)

function reload(arr, place) {
    cont.innerHTML = ''
    setMovie(arr[0])

    for (let item of arr) {
        let li = document.createElement('li')
        let div = document.createElement('div')

        li.innerHTML = item.Title
        li.classList.add('promo__interactive-item')
        div.classList.add('delete')

        place.append(li)
        li.append(div)

        li.onclick = () => {
            setMovie(item)
            promo__genre.innerHTML = item.Genre
            promo__title.innerHTML = item.Title
            promo__descr.innerHTML = item.Plot
            p_text.innerHTML = `IMDb: ${item.imdbRating}`
        }


        show_aside()
        function show_aside() {

            ul_cont.innerHTML = ''

            for (let item of arr) {
                // create
                let first_list = document.createElement('li')
                let links = document.createElement('a')


                // styling
                links.classList.add('promo__menu-item')
                links.setAttribute('href', "#")

                links.innerHTML = item.Genre.toUpperCase()

                // append 
                ul_cont.append(first_list, links)


                // functions
                links.addEventListener('click', function () {
                    let menuItems = document.getElementsByClassName('promo__menu-item');

                    for (let menuItem of menuItems) {
                        menuItem.classList.remove('active');
                    }

                    links.classList.add('active');
                });
                

                links.onclick = () => {
                    setMovie(item)
                    promo__genre.innerHTML = item.Genre
                    promo__title.innerHTML = item.Title
                    promo__descr.innerHTML = item.Plot
                    p_text.innerHTML = `IMDb: ${item.imdbRating}`
                }
            }
        }


        /* menuItems.forEach(function (item) {
            item.addEventListener('click', function () {
                menuItems.forEach(function (item) {
                    item.classList.remove('promo__menu-item_active');
                });

                this.classList.add('promo__menu-item_active');
            });
        }); */


        inp_search.onkeyup = (event) => {
            const keyword = event.target.value.toLowerCase().trim()

            const filtered = movies.filter(movie => {
                let name = movie.Title.toLowerCase().trim()
                if (name.includes(keyword)) {
                    return movie
                }
            })

            show_results(filtered);
        }

        function show_results(arr) {
            ul_list.innerHTML = ""

            for (let item of arr) {
                let li = document.createElement('li')

                li.classList.add('finded_title')

                li.innerHTML = item.Title


                ul_list.append(li)

                li.onclick = () => {
                    setMovie(item)
                    promo__genre.innerHTML = item.Genre
                    promo__title.innerHTML = item.Title
                    promo__descr.innerHTML = item.Plot
                    p_text.innerHTML = `IMDb: ${item.imdbRating}`
                }

            }
        }

    }

    let list = document.querySelectorAll('.promo__interactive-list li');

    list.forEach((el) => {
        let trashIcon = document.createElement('div');
        trashIcon.classList.add('delete');
        el.append(trashIcon);

        trashIcon.onclick = () => {
            el.remove()
        }
    });


};

function setMovie(item) {
    promo__bg.style.backgroundImage = `url(${item.Poster}`
    promo__bg.style.transition = '.5s ease-in-out'
}

/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту

5) Добавить нумерацию выведенных фильмов */


// 'use strict';

// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Неудержимые",
//         "Скотт Пилигрим против..."
//     ]
// };

// // lesson 1
// let advertising = document.querySelectorAll('.promo__adv img');
// advertising.forEach(function (item) {
//     item.remove()
// })

// // lesson 2 and 3
// let poster = document.querySelector('.promo__bg'),
//     genre = poster.querySelector('.promo__genre')
// genre.innerHTML = 'Драма'
// poster.style.backgroundImage = 'url("img/bg.jpg")'; // фоновое изображение 

// lesson 4 and 5
// movieDB.movies.sort()

// let list = document.querySelectorAll('.promo__interactive-list li');

// list.forEach((el, idx) => {
//     el.innerHTML = (idx + 1) + ". " + movieDB.movies[idx];

//     let trashIcon = document.createElement('div'); // Метод createElement позволяет создать новый элемент, передав в параметре имя тега. После создания с элементом можно работать как с обычным элементом, а также его можно добавить на страницу методами prepend , append , appendChild , insertBefore или insertAdjacentElement.
//     trashIcon.classList.add('delete');
//     el.appendChild(trashIcon); // appendChild() добавляет узел в конец списка дочерних элементов указанного родительского узла.

//     trashIcon.onclick = () => {
//         el.remove()
//     }
// });

// textContent это как похоже innerHTML
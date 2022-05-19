// Бургер-меню:


// Переменная, задающая окно:
var okno1 = document.getElementById('okno1');

// Переменная, задающая кнопку меню (три светящихся палочки):
var clickmenu = document.getElementById('.nav__menu');

// Переменная, задающая розовое пространство (первую секцию):
var closeokno1 = document.querySelector('.container__section1');

// Функция, которая открывает бургер-меню (при клике на три палочки всплывающее меню становится с display: flex):
    function onClickMenu() {
        okno1.style.cssText = "display: flex;";
    }

// Функция, которая при клике на розовое пространство обратно скрывает меню (задаёт ему display: none):
        function onClickOut() {
        okno1.style.cssText = "display: none;";
    }








// Функция для включения слайдера (первая строка прописывается всегда, во вторую нужно вписать название класса контейнера, в котором лежат прокручиваемые блоки)
$(document).ready(() => {
    $('.projects__items').slick({
        dots: true,
        fadeSpeed: 1000,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: document.getElementById("arrow__left"),
        nextArrow: document.getElementById("arrow__right"),
        responsive:[
            {
                breakpoint:1200,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
            }
        },
        ]
    })
})
const contact = document.getElementById("contact")
const confirm = document.getElementById("confirm")

// Событие клика для появления модального окна после нажатия на кнопку
contact.addEventListener('click', (e) => {
    e.preventDefault()
    confirm.classList.remove('hide')
    setTimeout(() => {
        confirm.classList.add('hide')
    }, 2000)
})


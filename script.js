let button = document.querySelector('.btn');
let item = document.querySelector('.item');

button.onclick = function () {
    item.classList.toggle('light');
    item.classList.toggle('dark');
    button.style.color = 'red';
}

//Задача: Модальное окно с контактами компании
let buttonOpen = document.querySelector('.button-open');
let buttonClose = document.querySelector('.button-close');
let modal = document.querySelector('.modal');

// buttonOpen.onclick = function () {
//     modal.classList.add('modal--show');
// }

let modelOpenHandler = function (evt) {
    evt.preventDefault();
    modal.classList.add('modal--show');
}

let modelCloseHandler = function () {
    modal.classList.remove('modal--show');
}

buttonOpen.addEventListener('click', modelOpenHandler); // - событие всплытия

buttonClose.addEventListener('click', modelCloseHandler);

// событие на ссылке

let linkOpen = document.querySelector('.link-open');

linkOpen.addEventListener('click', modelOpenHandler);
//--------------

//Задача: дописать код попапа так, чтобы он закрывался по нажатию на клавишу ESC

document.addEventListener('keydown', function (evt) {
    if (evt.code === 'Escape') { // если нажат ESC
        modal.classList.remove('modal--show');
    }
});

//Обработчик событий onscroll, прокрутка страницы
let topButton = document.querySelector('.top-btn');

window.onscroll = function () {
    //console.log('Страница прокручена на ' + window.pageYOffset);

    if (window.pageYOffset >= 0 && window.pageYOffset <= 200) {
        topButton.style.opacity = '0';
    } else {
        topButton.style.opacity = '1';
    }
}




//Задача Интерактивная галерея

let photos = [
    'https://picsum.photos/id/1011/550/300',
    'https://picsum.photos/id/1015/550/300',
    'https://picsum.photos/id/102/550/300',
    'https://picsum.photos/id/1025/550/300',
    'https://picsum.photos/id/1043/550/300'
];

let fullPhoto = document.querySelector('.full-photo');
let galleryButtons = document.querySelectorAll('.gallery-preview');

console.log(fullPhoto);
console.log(galleryButtons);

for (let i = 0; i < galleryButtons.length; i++) {

    galleryButtons[i].addEventListener('click', function () {

        // console.log('Клик' + i);
        // console.log(photos[i]);
        fullPhoto.src = photos[i];
    });
}

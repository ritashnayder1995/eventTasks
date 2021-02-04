//Опять окно

let buttonOpen = document.querySelector('.button-open');
let buttonClose = document.querySelector('.button-close');
let modal = document.querySelector('.modal');

let modelOpenHandler = function (evt) {
  evt.preventDefault();
  modal.classList.add('modal--show');
}

let modelCloseHandler = function () {
  modal.classList.remove('modal--show');
}

buttonOpen.addEventListener('click', modelOpenHandler); 

buttonClose.addEventListener('click', modelCloseHandler);

document.addEventListener('keydown', function (evt) {
  if (evt.code === 'Escape') { // если нажат ESC
      modal.classList.remove('modal--show');
  }
});


// Бургеры

let container = document.querySelector('.bar');


  if (window.width >= 1024) {
    container.style.opacity = '0';
  } else {
    container.style.opacity = '1';
  }


  document.getElementById("trigger").onclick = function() {
    open()
  };
  
  function open() {
    document.getElementById("menu").classList.toggle("show");
  }




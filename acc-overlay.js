var openButton = document.querySelector('.acc');
var closeButton = document.querySelector('.overlay .acc');
var overlay = document.querySelector('.overlay');
function openOverlay() {
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
    overlay.classList.add('overlay-show'); // Добавляем класс анимации появления

}

// Функция для закрытия оверлея
function closeOverlay() {
    overlay.classList.remove('overlay-show'); // Удаляем класс анимации появления
    overlay.classList.add('overlay-hide'); // Добавляем класс анимации закрытия

    document.body.style.overflow = 'visible';

    setTimeout(function() {
        overlay.style.display = 'none';
        overlay.classList.remove('overlay-hide'); // Удаляем класс анимации закрытия
    }, 300); // Задержка перед скрытием оверлея, чтобы дать время для завершения анимации
}


window.addEventListener('click', function(event) {
    if (event.target === overlay) {
        closeOverlay();
    }
});

openButton.addEventListener('click', openOverlay);
closeButton.addEventListener('click', closeOverlay);
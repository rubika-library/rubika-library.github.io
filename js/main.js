document.querySelector('header .button').addEventListener('click', e => {
    __toggleMenu();
    document.querySelector('header .button').classList.toggle('button2');
});
if (_isMobile_()) {
    document.querySelector('nav ul').style.fontSize = 'small';
}
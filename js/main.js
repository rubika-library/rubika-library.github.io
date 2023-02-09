document.querySelector('header .button').addEventListener('click', e => {
    __toggleMenu();
});
if (isMobile()) {
    alert(200);
    document.querySelector('nav ul').style.fontSize = 'small';
}
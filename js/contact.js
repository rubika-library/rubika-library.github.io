document.querySelector('header .button').addEventListener('click', e => {
    let nav = document.getElementsByTagName('nav')[0];
    let margin = nav.style.marginRight;
    if (margin == '0px') {
        nav.style.marginRight = 'calc(-100% - 10px)';
    } else {
        nav.style.marginRight = '0px';
    }
    document.querySelector('header .button').classList.toggle('button2');
});
if (_isMobile_()) {
    document.querySelector('nav ul').style.fontSize = 'small';
}
document.querySelector('header .button').addEventListener('click', e => {
    let nav = document.getElementsByTagName('nav')[0];
    let right = nav.style.right;
    if (right == 'calc(-100% - 10px)') {
        nav.style.right = '-65%';
    } else {
        nav.style.right = 'calc(-100% - 10px)';
    }
    document.querySelector('header .button').classList.toggle('button2');
});
if (_isMobile_()) {
    document.querySelector('nav ul').style.fontSize = 'small';
}
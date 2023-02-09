const __toggleMenu = () => {
    let nav = document.getElementsByTagName('nav')[0];
    nav.style.right = nav.style.right != '-65%' ? '-65%' : 'calc(-100% - 10px)';
};
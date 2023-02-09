const __toggleMenu = () => {
    let nav = document.getElementsByTagName('nav')[0];
    nav.style.right = nav.style.right != '-70%' ? '-70%' : '-100%';
};
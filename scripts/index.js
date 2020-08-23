const topMenu = document.getElementById('top-menu');

const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > vh || document.documentElement.scrollTop > vh) {
        topMenu.style.position = 'fixed';
        topMenu.style.backgroundColor = '#1f1f1f';
        topMenu.style.animation = 'menu 0.4s forwards';

    } else {
        topMenu.style.position = 'absolute';
        topMenu.style.backgroundColor = 'transparent';
        topMenu.style.animation = 'none';
    }
}

function scrollUp() {
    window.scrollTo(0, 0)
}
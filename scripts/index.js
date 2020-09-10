const topMenu = document.getElementById('top-menu');
const mobileNav = document.getElementById('mobileNav');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

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

function openMenu() {
    mobileNav.classList.add("opened");
    mobileNav.classList.remove("closed");
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
    topMenu.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    mobileNav.classList.add("closed");
    mobileNav.classList.remove("opened");
    closeBtn.style.display = 'none';
    openBtn.style.display = 'block';
    topMenu.style.display = 'none';
    document.body.style.overflow = 'initial';
}
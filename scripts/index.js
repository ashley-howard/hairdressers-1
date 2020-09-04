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

function openMenu() {
    // document body = overflow hidden, so you cant scroll
    // remove burger when open
    // remove x when closed
    // when a link is clicked, hide menu

    console.log('open')
    document.getElementById('mobileNav').classList.add("opened");
    document.getElementById('mobileNav').classList.remove("closed");

    document.getElementById('openBtn').style.display = 'none';
    document.getElementById('closeBtn').style.display = 'block';
    topMenu.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}


function closeMenu() {
    console.log('closed')
    document.getElementById('mobileNav').classList.add("closed");
    document.getElementById('mobileNav').classList.remove("opened");
    document.getElementById('closeBtn').style.display = 'none';
    document.getElementById('openBtn').style.display = 'block';

    topMenu.style.display = 'none';
    document.body.style.overflow = 'initial';

}

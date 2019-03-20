const header = document.getElementById('header-nav');
const floatUp = document.getElementById('animate-float-up');

window.onscroll = function () {
    // Change header state and color
    if (window.scrollY >= 300) {
        header.classList.add('colored-nav');
        header.classList.remove('transparent-nav');
    } else {
        header.classList.remove('colored-nav');
        header.classList.add('transparent-nav');
    }

    // Float up
    if (window.innerWidth <= 540) {
        if (window.scrollY >= 5100 && window.scrollY <= 7800) {
            floatUp.classList.add('float-up');
        }
    } else if (window.innerWidth >= 541 && window.innerWidth <= 768) {
        if (window.scrollY >= 4800 && window.scrollY <= 7600) {
            floatUp.classList.add('float-up');
        }
    } else if (window.innerWidth >= 769 && window.innerWidth <= 1024) {
        if (window.scrollY >= 3600 && window.scrollY <= 5200) {
            floatUp.classList.add('float-up');
        }
    } else if (window.innerWidth >= 1025) {
        if (window.scrollY >= 2800) {
            floatUp.classList.add('float-up');
        }
    }
}
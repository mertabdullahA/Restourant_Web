// Menu toggle
let navToggle = document.querySelector('#nav-toggle');
let navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', ()=> {
    navMenu.classList.toggle('show-menu');
})

// Remove menu mobile
let navLinks = document.querySelectorAll('.nav-link');

function linkActive() {
    let navMenu = document.querySelector('.nav-menu');
    navMenu.classList.remove('show-menu');
}

navLinks.forEach(n => n.addEventListener('click',linkActive))

// Scroll reveal Animation
let sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
})

sr.reveal(`.home-date, .home-img, 
            .about-data, .about-img,
            .services-content, .menu-content,
            .app-date, .app-img,
            .contact-data, .contact-button,
            .footer-content`,{
                interval: 200,
});

// Scroll Section active link
let sections = document.querySelectorAll('section[id]');

function scrollActive() {
    let scrollY = window.pageYOffset;
    
    sections.forEach(current  => {
        let sectionHeight = current.offseHeight;
        let sectionTop = current.offsetTop - 50;
        suctionId = current.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + suctionId + ']').
            classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + suctionId + ']').
            classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);

// Change bg header 
function scrollHeader() {
    let header = document.querySelector('#header')
    if (this.scrollY >= 200) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

// Dark light theme
let themeBtn = document.querySelector('.bx-moon');
let themeBtnSun = document.querySelector('.bx-sun');


themeBtn.addEventListener('click', ()=> {
    document.body.classList.add('dark-side');
    themeBtn.classList.add('bx-moon-active');
    themeBtnSun.classList.add('bx-sun-active');
})

themeBtnSun.addEventListener('click', ()=> {
    document.body.classList.remove('dark-side');
    themeBtn.classList.remove('bx-moon-active');
    themeBtnSun.classList.remove('bx-sun-active');
})

// Scroll top 
let scrollTop = document.querySelector('.scrolltop');

window.addEventListener('scroll', () => {
    if (scrollY > 100) {
        scrollTop.classList.add('show-scrool');
    } else {
        scrollTop.classList.remove('show-scrool');
    }
})


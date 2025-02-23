// Spinner
document.addEventListener('DOMContentLoaded', () => {
    let spinner = document.querySelector('#spinner')
    setTimeout(() =>  {
        spinner.classList.toggle('show');
    }, 1)
});

// Navbar Menu
document.addEventListener('DOMContentLoaded', () => {
    const NavbarContainer = document.querySelector('.navbar-container');
    const NavbarMenu = document.querySelector('.nav-menu');
    const NavbarBars = document.querySelector('.nav-menu-res')
    const Navbar = document.querySelector('#navbar')

    NavbarMenu.addEventListener('click', () => {
    NavbarContainer.classList.toggle('nav-container-res');
    NavbarMenu.classList.toggle('nav-border')
    NavbarBars.classList.toggle('nav-i-res')
})
window.addEventListener('scroll', () => {
    var top = window.scrollY;
    if(top > 8) {
        NavbarContainer.style.position = 'fixed'
        NavbarContainer.style.padding = '5px 10px'
        NavbarMenu.style.margin = '0px !important'
        Navbar.style.padding = '0px'
    } else if (top < 8) {
        NavbarContainer.style.position = 'relative'
        NavbarContainer.style.padding = '0px 0px'
        NavbarMenu.style.margin = '6px'
        Navbar.style.padding = '5px'
    }

})
})
// Carusels
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 3,
      loop: true,
      margin: 20,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      stagePadding: 9,
      responsive: {
        0: { items: 1},
        776: { items: 2 },
        1000: { items: 3, margin: 10, stagePadding: 7},
        1200: {margin: 20, stagePadding: 9},
        1400: {margin: 20, stagePadding: 10}
      }
    });
    // Slick
    $('.about-cards.slide').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
    });
});
document.addEventListener('DOMContentLoaded', function () {
    new Glide('.glide', {
        type: 'carousel',
        perView: 1,
        focusAt: 'center',
    }).mount();
});
// About Us

// Counter Numbers

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".aboutUs-counters");

    function startCounter(counter) {
        const target = +counter.getAttribute("data-count");
        const suffix = counter.getAttribute("data-suffix") || "";
        let count = 0;
        const step = Math.ceil(target / 100);

        function updateCounter() {
            if (count < target) {
                count += step;
                counter.innerText = count + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target + suffix;
            }
        }

        updateCounter();
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 1.0 });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});

// Scroll text
const container = document.querySelector('.scrolling-container');
const containerTwo = document.querySelector('.scrolling-container.two');
const text = document.querySelector('.scrolling-text');

const cloneText = text.cloneNode(true);
container.appendChild(cloneText);

function footer() {
    const footerItem = document.querySelectorAll('.footer-link.two').forEach(footerItem => {
        footerItem.classList.toggle('footer-link-res');
        footerItem.style.maxHeight = '45px'
        footerItem.addEventListener('click', () => {
            if(footerItem.style.maxHeight == '45px') {
                footerItem.style.maxHeight = '190px'
            } else {
                footerItem.style.maxHeight = '45px'
            }
        })
    })
}
footer()
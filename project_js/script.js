//Burgermenu
let header = document.querySelector(".header");
let burger = document.querySelector(".burger");

burger.addEventListener("click", function() {
    header.classList.toggle("active");
    burger.classList.toggle("active");
});
//skroll
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        let href = this.getAttribute("href").substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = 300;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
        });
    });
});
//header_sticky
let element = document.querySelector(".header");
window.addEventListener("scroll", function() {
    if (window.scrollY > 53) {
        element.classList.add("header__sticky");
    } else {
        element.classList.remove("header__sticky");
    }
});

//header bullets
let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav ul a');
window.addEventListener('scroll', function() {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top > offset && top < offset + height) {
            navLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
})

//swiper
const sectionFirstSwiper = new Swiper(".sectionFirstSwiper", {
    // Optional parameters
    direction: "vertical",
    loop: true,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
        el: ".sectionFirst-swiper-pagination",
        clickable: true,
    },

    // Navigation arrows
    keyboard: {
        enabled: true,
    },
});

const options = {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        // when window width is >= 320px
        1: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
};
const swiper = new Swiper(".latest-News-Slider", options);

//fancyBox
Fancybox.bind("[data-fancybox='gallery']", {
    Carousel: {
        infinite: true,
    },
});

/*$('.gallery-wrapper-readmore').readmore({
    speed: 5000,
    moreLink: '<button class ="more">SEE MORE</button>',
    lessLink: '<button class ="less"> PLEASE CLOSE </button>',
    collapsedHeight: 0,
});*/
//read More
document.querySelectorAll(".readmore-btn").forEach((el) => {
    el.addEventListener("click", () => {
        let readmoreContent = el.previousElementSibling;
        if (readmoreContent.style.maxHeight) {
            document
                .querySelectorAll(".readmoreContent")
                .forEach((el) => (el.style.maxHeight = null));
        } else {
            document
                .querySelectorAll(".readmoreContent")
                .forEach((el) => (el.style.maxHeight = null));
            readmoreContent.style.maxHeight = readmoreContent.scrollHeight + "px";
        }
    });
});

/*let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("googleMap"), {
        center: { lat: 50.26242, lng: 30.31069 },
        zoom: 12,
        mapId: '2f084b4895741534',
    });
    const marker = new google.maps.Marker({
        position: { lat: 47.52225, lng: 35.02204 },
        map: map,
        title: "Monticello",
        icon: {
            url: "https://i.postimg.cc/30jd33nS/Pin.png",
            scaledSize: new google.maps.Size(100, 100),
        },
    });
}*/

//Validation Form
$(document).ready(function() {
    $("#main-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 3,
            },
            email: {
                required: true,
                email: true,
            },
        },
    });
});
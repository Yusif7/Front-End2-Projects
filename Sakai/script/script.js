// Brands infinite slider

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true
});

// Add animation to website

const animationItems = document.querySelectorAll('._anim');
const animationOnScroll = () => {
    if (animationItems.length > 0) {
        for (let i = 0; i < animationItems.length; i++) {
            const animationItem = animationItems[i];
            const animationItemHeight = animationItem.offsetHeight;
            const animationItemOffsetTop = animationItem.offsetTop;
            const animationStart = 4;
            let animationItemPoint = window.innerHeight - animationItemHeight / animationStart;

            if (animationItemHeight > window.innerHeight) {
                animationItemPoint = window.innerHeight - window.innerHeight / animationStart;
            }

            if ((pageYOffset > (animationItemOffsetTop - animationItemPoint)) && (pageYOffset < (animationItemOffsetTop + animationItemHeight))) {
                animationItem.classList.add('_active');
            } else {
                if (!animationItem.classList.contains('_noRepeat')) {
                    animationItem.classList.remove('_active');
                }
            }
        }
    }
}
window.addEventListener('scroll', animationOnScroll)
animationOnScroll();

/* Navbar fixed */
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        document.querySelector('.header__container').classList.add('fixed')
    } else {
        document.querySelector('.header__container').classList.remove('fixed')
    }
})


/* Counter js */
$(document).ready(function() {

    var counters = $(".counter__item__count");
    var countersQuantity = counters.length;
    var counter = [];

    for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
    }

    var count = function(start, value, id) {
        var localStart = start;
        setInterval(function() {
            if (localStart < value) {
                localStart++;
                counters[id].innerHTML = localStart;
            }
        }, 0);
    }

    for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
    }
});

/* Testimonial slider */
let images = document.querySelectorAll('.testimonial__info__text');
let start = 0;
images[start].style.display = 'block';
document.querySelectorAll('.dot').forEach((elem, index) => {
    elem.addEventListener('click', () => {
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = 'none';
        }
        images[index].style.display = 'block';
    })
})
document.querySelector('.next').addEventListener('click', (e) => {
    e.preventDefault();
    if (start == images.length - 1) {
        start = -1;
    };
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    images[++start].style.display = 'block';
})
document.querySelector('.prev').addEventListener('click', (e) => {
    e.preventDefault();
    start -= 1;
    if (start < 0) {
        start = images.length - 1;
    }
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    images[start].style.display = 'block';
})


/* Main slider */


let mainSlider = document.querySelectorAll('.mainSlider__content');
let start1 = 0;
mainSlider[start1].style.display = 'grid';

document.querySelectorAll('.mainSlider__content__button')[1].addEventListener('click', () => {
    if (start1 == mainSlider.length - 1) {
        start1 = -1;
    };
    for (let i = 0; i < mainSlider.length; i++) {
        mainSlider[i].style.opacity = 0;
        setTimeout(() => {
            mainSlider[i].style.display = 'none';
        }, 400);
    }
    let num = ++start1;
    setTimeout(() => {
        mainSlider[num].style.display = 'grid';
    }, 500);
    setTimeout(() => {
        mainSlider[num].style.opacity = 1;
    }, 700);

})
document.querySelectorAll('.mainSlider__content__button')[0].addEventListener('click', () => {

    start1 -= 1;
    if (start1 < 0) {
        start1 = mainSlider.length - 1;
    }
    for (let i = 0; i < mainSlider.length; i++) {
        mainSlider[i].style.opacity = 0;
        setTimeout(() => {
            mainSlider[i].style.display = 'none';
        }, 400);
    }
    setTimeout(() => {
        mainSlider[start1].style.display = 'grid';
    }, 500);
    setTimeout(() => {
        mainSlider[start1].style.opacity = 1;
    }, 700);

})

/* Burger menu */

document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.header__nav').classList.toggle('resp');
})

/* hover efeck dropdown */
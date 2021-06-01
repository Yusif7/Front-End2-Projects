const animationItems = document.querySelectorAll('._anim');
const animationOnScroll = () => {
    if (animationItems.length > 0) {
        for (let i = 0; i < animationItems.length; i++) {
            const animationItem = animationItems[i];
            const animationItemHeight = animationItem.offsetHeight;
            const animationItemOffsetTop = animationItem.offsetParent.offsetTop;
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


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
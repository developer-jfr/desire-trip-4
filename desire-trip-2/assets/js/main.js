//====================== Navbar Close Start ========================

const navItems = document.querySelectorAll(".nav-item");
const navbarContent = document.querySelector(".navbar-collapse");
const navbarImg = document.querySelector(".navbar-img");

navItems.forEach((el) => {
  el.addEventListener("click", function () {
    navbarContent.classList.remove("show");
    navbarImg.classList.remove("active");
  });
});

const navbarToggler = document.querySelector(".navbar-toggler");

navbarImg.addEventListener("click", function () {
  navbarImg.classList.toggle("active");
});

//===================== Navbar Close End ==========================

/*==================== Second Slider Start  ====================*/

let exploreSwiper = new Swiper(".explore-slider", {
  slidesPerView: 2.6,
  loop: true,
  spaceBetween: 15,
  grabCursor: true,
  navigation: {
    nextEl: ".explore-arrow-left",
    prevEl: ".explore-arrow-right",
  },
  breakpoints: {
    300: {
      slidesPerView: 1.3,
      spaceBetween: 30,
    },

    500: {
      slidesPerView: 2.6
    },
    1500: {
      slidesPerView: 2.6
    },
  },
});

/*==================== Second Slider End  ====================*/


/*==================== Second Slider Start  ====================*/

let scSwiper = new Swiper(".slider-2", {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 15,
  grabCursor: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1.3
    },
    400: {
      slidesPerView: 2
    },

    900: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    },
  },
});

/*==================== Second Slider End  ====================*/

/*==================== Second Slider Start  ====================*/

let videoSwiper = new Swiper(".video-slider", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 15,
  grabCursor: true,
  navigation: {
    nextEl: ".video-arrow-left",
    prevEl: ".video-arrow-right",
  }
});

/*==================== Second Slider End  ====================*/


/*==================== Fourth Slider End  ====================*/

let frSwiper = new Swiper(".slider-4", {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 20,
  grabCursor: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1.3,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1500: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

/*==================== Fourth Slider End  ====================*/

/*==================== More Slider End  ====================*/

let moreSwiper = new Swiper(".more-slider", {
  slidesPerView: 2,
  loop: true,
  spaceBetween: 15,
  grabCursor: true,
  navigation: {
    nextEl: ".more-arrow-left",
    prevEl: ".more-arrow-right",
  }
});

/*==================== More Slider End  ====================*/


/* ======================= Video Play Start =========================== */

let videos = document.querySelectorAll('.video-1');
let ppButtons = document.querySelectorAll(".play-btn");
let mutedS = document.querySelectorAll(".muted");

for(let i = 0; i < videos.length; i++) {
  ppButtons[i].addEventListener("click", function () {
    if (videos[i].paused) {
      videos[i].play();
      ppButtons[i].src = './assets/images/pause-btn.svg'
    } else {
      videos[i].pause();
      ppButtons[i].src = './assets/images/play.svg'
    }
  });
  
  
  
  mutedS[i].addEventListener("click", function () {
    if (videos[i].muted === true) {
      videos[i].muted = false;
      mutedS[i].src = './assets/images/unmute.svg'
    } else {
      videos[i].muted = true;
      mutedS[i].src = './assets/images/muted.svg'
    }
  });


}








/* ======================= Video Play End  =========================== */



let activeVideoSLide = document.querySelector('.swiper-slide.video-slide.swiper-slide-active > video');
let ppbutton = document.querySelector('.swiper-slide.video-slide.swiper-slide-active > .play-btn');


fraction = 0.99;
function checkScroll() {

    
        var video = activeVideoSLide;
        var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
            b = y + h, //bottom
            visibleX, visibleY, visible;

            visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
            visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

            visible = visibleX * visibleY / (w * h);

            if (visible > fraction) {
                ppbutton.src = './assets/images/play.svg'
                video.pause()
            } 

}

window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);


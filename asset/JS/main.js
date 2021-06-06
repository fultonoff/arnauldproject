'use strict'

/////////////////////////////
//variables

//toggle dropdown
const dropdownBtn1 = document.querySelector('.dropdown-btn1');
const dropdownBtn2 = document.querySelector('.dropdown-btn2');

const dropContent1 = document.querySelector('.dropdown-content');
const dropContent2 = document.querySelector('.dropdown-content2');

///togglebtn
const togBtn = document.querySelector('.toggle');
const navList = document.querySelector('.nav-bar__list');

//functions
const dropToggler1 = () => {
  dropContent1.classList.toggle('active');
};

const dropToggler2 = () => {
  dropContent2.classList.toggle('active');
};

//init()
dropdownBtn1.addEventListener('click', () => {
  dropToggler1();
});

dropdownBtn2.addEventListener('click', () => {
  dropToggler2();
});

//////////toggle nav

togBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
  togBtn.classList.toggle('active');
});


// gsap.from('.header', { duration: 0.6, ease: 'power2. out', opacity:0, y: -60, delay: .2});


///////////////////////////////////
//tabbed

const _tabs = document.querySelectorAll('[data-tab]');
const _content = document.getElementsByClassName('active');

// -------- STEP 3 -------- //
const toggleContent = function() {
  
  
  if (!this.classList.contains("active")) {
    
    Array.from(_content).forEach( item => {
      item.classList.remove('active');
    });
    
    this.classList.add('active');
    
  
    let currentTab = this.getAttribute('data-tab'),
       _tabContent = document.getElementById(currentTab);
       _tabContent.classList.add('active');
  }
};


Array.from(_tabs).forEach( item => {
  item.addEventListener('click', toggleContent);
});

////////////////////////////////
///swiper

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  }
});
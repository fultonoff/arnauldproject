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

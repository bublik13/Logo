import {testFunction} from './scripts/test';
testFunction();

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  // spaceBetween: 40,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
const swiperTwo = new Swiper('.swiper-mobile', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 40,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
const body = document.querySelector('.js-body');
const nav = document.querySelector('.js-nav');
const burger = document.querySelector('.js-burger');

burger.addEventListener('click', ()=>{  
  burger.classList.toggle('burger--active');
  nav.classList.toggle('header__nav--active');
  body.classList.toggle('body--lock');
});
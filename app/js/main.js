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
  
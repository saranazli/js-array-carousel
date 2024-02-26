
const carouselImgs = [
  './img/01.webp',
  './img/02.webp',
  './img/03.webp',
  './img/04.webp',
  './img/05.webp'
];

console.log(carouselImgs);

const carousel = document.querySelector('.carousel');

console.log(carousel);

for(i = 0; i < carouselImgs.length; i++){

  const insImg = carouselImgs[i];

  console.log (insImg);

  carousel.innerHTML += `<img class="conteiner-img single none" src="${insImg}"> `

};

const imgCollection = document.getElementsByClassName('single');

const btnUp = document.querySelector('.top');

const btnDown = document.querySelector('.bottom');

console.log(btnDown, btnUp);

let counter = 0 ;



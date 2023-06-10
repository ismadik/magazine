//кнопка для обратной связи

let callBtn = document.querySelectorAll('.btn_call');
let overlay = document.querySelector('.overlay');
let close = document.querySelector('.popup__close');
let call = document.querySelector('.popup__call');
let test = document.querySelector('.popup__test');
let rent = document.querySelector('.popup__rent');

let btnTest = document.querySelector('.btn_test');

let btnRent = document.querySelector('.btn_rent');

callBtn.forEach((btn) =>
  btn.addEventListener('click', function () {
    overlay.style.display = 'block';
    test.style.display = 'none';
    rent.style.display = 'none';
    call.style.display = 'flex';
  })
);

!!btnTest &&
  btnTest.addEventListener('click', function () {
    overlay.style.display = 'block';
    call.style.display = 'none';
    rent.style.display = 'none';
    test.style.display = 'flex';
  });

!!btnRent &&
  btnRent.addEventListener('click', function () {
    overlay.style.display = 'block';
    call.style.display = 'none';
    test.style.display = 'none';
    rent.style.display = 'flex';
  });

close.addEventListener('click', function () {
  overlay.style.display = 'none';
});

overlay.addEventListener('click', function (e) {
  if (e.target.className.includes('overlay')) {
    overlay.style.display = 'none';
  }
});

const headerBurger = document.querySelector('.header__burger');
const headerLinks = document.querySelector('.header__bot');

headerBurger.addEventListener('click', () => {
  headerLinks.classList.toggle('header__bot--active');
  headerBurger.classList.toggle('header__burger--active');
});

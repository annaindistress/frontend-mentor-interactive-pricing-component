const formElement = document.querySelector('.slider');
const rangeElement = document.querySelector('.slider__input');
const pageviewsElement = document.querySelector('.slider__output-pageviews');
const priceElement = document.querySelector('.slider__output-price');
const switchElement = document.querySelector('.slider__switch-input');

const DISCOUNT = 25;
const MAX_RANGE = 200;
const MAX_PRICE = 32;

const START_PRICE = 16;
const START_RANGE = 100;

let isYearly = false;

const getPrice = percent => {
  let price = (percent * MAX_PRICE) / 100;
  if (isYearly) price = ((100 - DISCOUNT) * price) / 100;
  return price.toFixed(2);
};

const setValue = () => {
  const value = rangeElement.value;
  const percent = Math.trunc((value / MAX_RANGE) * 100);
  const price = getPrice(percent);
  pageviewsElement.textContent = value;
  priceElement.textContent = price;
  rangeElement.style.backgroundSize = `${percent}% 100%`;
};

rangeElement.addEventListener('input', setValue);

switchElement.addEventListener('input', () => {
  isYearly = switchElement.checked;
  setValue();
});

formElement.addEventListener('submit', evt => {
  evt.preventDefault();
  isYearly = false;
  rangeElement.value = START_RANGE;
  pageviewsElement.textContent = START_RANGE;
  priceElement.textContent = START_PRICE.toFixed(2);
  rangeElement.style.backgroundSize = '50% 100%';
  switchElement.checked = false;
});

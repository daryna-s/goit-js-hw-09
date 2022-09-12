import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');
const form = document.querySelector('.form');

form.addEventListener('submit', e => { 
  e.preventDefault();


  let { delay, step, amount } = createSubmit();

  for (let position = 1; position <= amount; position += 1){
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
});

function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;

  setTimeout(() => {
    if (shouldResolve) {
      resolve({ position, delay });       
    } else {
      reject({ position, delay });     
    }
  }, delay);
});
};


function createSubmit() {
  return {
    delay: Number(delay.value),
    step: Number(step.value),
    amount: Number(amount.value),
  };
}


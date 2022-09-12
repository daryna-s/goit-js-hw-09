
import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputDate = document.querySelector('#datetime-picker');
const button = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
const Clockface = document.querySelector('.timer');
const field = document.querySelectorAll('.field');
const value = document.querySelectorAll('.value');
const label = document.querySelectorAll('.label');

Clockface.style.display = `flex`;

field.forEach(el => {
  el.style.marginRight = '10px';
});

value.forEach(el => {
  el.style.display = `flex`;
  el.style.justifyContent = `center`;
  el.style.fontSize = '32px';
  el.style.fontFamily = 'Montserrat, sans-serif';
  el.style.fontStyle = 'normal';
});

label.forEach(el => {
  el.style.display = `block`;
  el.style.fontSize = '12px';
  el.style.fontWeight = `700`;
  el.style.fontFamily = 'Montserrat, sans-serif';
  el.style.fontStyle = 'normal';
  el.style.textTransform = `uppercase`;
});


button.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < Date.now()) {
      Notify.failure('Please choose a date in the future');
    } else {
      button.disabled = false;
      button.addEventListener('click', () => {
        timer.start();
      });
        const timer = {
            intervalId: null,
        start() {
          button.disabled = true;

         this.intervalId = setInterval(() => {
            const startTime = Date.now();
            const deltaTime = selectedDates[0].getTime() - startTime;
            const time = convertMs(deltaTime);
            days.textContent = time.days;
            hours.textContent = time.hours;
            minutes.textContent = time.minutes;
            seconds.textContent = time.seconds;

            if (deltaTime <= 1000) {
              clearInterval(this.intervalId);
            }
          }, 1000);
        },
      };
    }
  },
};

flatpickr(inputDate, options);


function convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const days = addLeadingZero(Math.floor(ms / day));
        const hours = addLeadingZero(Math.floor((ms % day) / hour));
        const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
        const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

        return { days, hours, minutes, seconds };
    }

function addLeadingZero(value) {
        return String(value).padStart(2, '0');
    }






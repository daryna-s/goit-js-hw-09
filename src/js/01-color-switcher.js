const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;


  startBtn.addEventListener('click', () => {
    timerId = setInterval(() => {
      document.body.setAttribute(
        'style',
        'background-color: ' + getRandomHexColor()
      );
        console.log(`Цвет меняется`);
            startBtn.disabled = true;
            stopBtn.disabled = false;
    }, 1000);
  });

stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    console.log(`Цвет НЕ меняется`);
    startBtn.disabled = false;
    stopBtn.disabled = true;
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

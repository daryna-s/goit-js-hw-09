const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;
stopBtn.disabled = true;

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    timerId = setInterval(() => {
      document.body.setAttribute(
        'style',
        'background-color: ' + getRandomHexColor()
      )            
    }, 1000);
  });

stopBtn.addEventListener('click', () => {    
        clearInterval(timerId);
        startBtn.disabled = false;
        stopBtn.disabled = true;
    
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

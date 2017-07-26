let countDownTimer;
const timerDisplay = document.querySelector(".display__time-left");
const endTimeDisplay = document.querySelector(".display__end-time");
const controls = document.querySelectorAll('[data-time]');

function timer(seconds) {
  clearInterval(countDownTimer);
  const now = Date.now();
  const later = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(later);

  countDownTimer = setInterval(() => {
    const secsLeft = Math.round(( later - Date.now() ) / 1000);
    if(secsLeft < 0) {
      clearInterval(countDownTimer);
      return;
    }
    displayTimeLeft(secsLeft)
  }, 1000);
}


function displayTimeLeft(seconds) {
  const  mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  const timer = `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;

  document.title = timer;
  timerDisplay.textContent = timer;
}


function displayEndTime(time) {
  const end = new Date(time);
  const hour = end.getHours();
  const mins = end.getMinutes();
  const endTime = `${hour > 12 ? hour - 12 : hour}:${mins < 10 ? "0" : ""}${mins}${hour < 12 ? 'am' : 'pm'}`

  endTimeDisplay.textContent = `Return by ${endTime}`;
}

controls.forEach(control => control.addEventListener("click", function(e){
  timer(parseInt(this.dataset.time));
}))

document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const secs = this.minutes.value * 60;
  timer(parseInt(secs));
  this.reset();
});

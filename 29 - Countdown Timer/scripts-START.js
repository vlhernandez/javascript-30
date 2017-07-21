let countDownTimer;
const timerDisplay = document.querySelector(".display__time-left");
const  endTimeDisplay = document.querySelector(".display__end-time");

function timer(seconds) {
  const now = Date.now();
  const later = now + seconds * 1000;
  console.log({later})
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

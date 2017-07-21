function timer(seconds) {
  let countDownTimer;
  const now = Date.now();
  const later = now + seconds * 1000;

  displayTimeLeft(seconds);

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
  const timeLeft = document.querySelector(".display__time-left");
  const mins = Math.round(seconds / 60) < 10 ? "0" + Math.round(seconds / 60) :Math.round(seconds / 60) ;
  const secs = Math.round(seconds % 60) < 10 ? "0" + Math.round(seconds % 60) : Math.round(seconds % 60);
  timeLeft.innerText = `${mins}:${secs}`;
}

const playBtn = document.querySelector('.player__button.toggle');
const seekBtns = document.querySelectorAll('.player__button[data-skip]');
const inputRanges = document.querySelectorAll('input');
const v = document.querySelector('video');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggleFull = document.querySelector('.fullScreen');
let mouseDown = false;
let fullScreen = false;

function toggleMouse() {
  mouseDown = !mouseDown;
}

function togglePlayBack() {
  const playBackAction = v.paused ? 'play' : 'pause';
  v[playBackAction]();
}

function videoSeek( ) {
  const time = Number(this.dataset.skip)
  v.currentTime += time;
 }


function handleRangeChange() {
  v[this.name] = this.value;
}


function updateProgress() {
  const progressBarWidth = Math.round((v.currentTime / v.duration) * 100);
  progressBar.style.width = `${progressBarWidth}%`;
}

function handleScrubber(e) {
  const scrubTo = e.offsetX
  const barWidth = progress.offsetWidth;
  v.currentTime = (scrubTo / barWidth) * v.duration;
}

function toggleFullScreen() {
    const prevWidth = v.videoWidth;
    if (fullScreen) {
      v.width = prevWidth;
    } else {
      v.width = document.body.offsetWidth;
    }
    fullScreen = !fullScreen
}


v.addEventListener( 'click', togglePlayBack );
v.addEventListener( 'canplay', updateProgress );
v.addEventListener( 'timeupdate', updateProgress );

playBtn.addEventListener( 'click', togglePlayBack );

inputRanges.forEach( input => input.addEventListener( 'change', handleRangeChange ));

seekBtns.forEach( btn => { btn.addEventListener( 'click', videoSeek ) });

progress.addEventListener( 'click', handleScrubber );
progress.addEventListener( 'mousemove', function(e) {
  if (mouseDown) { handleScrubber(e) }
});
progress.addEventListener( 'mouseup', toggleMouse );
progress.addEventListener( 'mousedown', toggleMouse );

toggleFull.addEventListener( 'click', toggleFullScreen );

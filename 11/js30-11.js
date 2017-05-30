  const playBtn = document.querySelector('.player__button');
  const seekBtns = document.querySelectorAll('.player__button[data-skip]');
  const inputs = document.querySelectorAll('input');
  const v = document.querySelector('video');

  function togglePlayBack() {
    const playBackAction = v.paused ? 'play' : 'pause';
    v[playBackAction]();
  }

  function videoSeek( time ) {
    v.currentTime += time;
    updateProgress();
   }


  function handleChange() {
    if ( this.name == 'volume' ) {
      v.volume = this.value;
    } else if (this.name == 'playbackRate') {
      v.playbackRate = this.value;
    }
    updateProgress();
  }


  function updateProgress() {
    console.log('video duration...', v.duration, 'currentTime...', v.currentTime );
    const progress = document.querySelector('.progress__filled');
    if( v.currentTime === 0 ) {
      progress.style.width = "0%";
    } else {
      const newWidth =`${Math.round((v.currentTime / v.duration)*100)}%`;
      progress.style.width = newWidth;
      console.log( 'progress.style.width',  `"${Math.round((v.currentTime / v.duration)*100)}%"`);
    }
  }

  v.addEventListener( 'click', togglePlayBack );
  playBtn.addEventListener( 'click', togglePlayBack );
  inputs.forEach( input => input.addEventListener( 'change', handleChange ))
  seekBtns.forEach( btn => {
    btn.addEventListener( 'click', function() {
      videoSeek( Number(this.dataset.skip) )
    });
  })

  v.addEventListener( 'canplay', updateProgress );
  v.addEventListener( 'playing', updateProgress );

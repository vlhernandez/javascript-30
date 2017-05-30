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
   }


  function handleChange() {
    if ( this.name == 'volume' ) {
      v.volume = this.value;
    } else if (this.name == 'playbackRate') {
      v.playbackRate = this.value;
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

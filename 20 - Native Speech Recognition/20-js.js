window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

const transcript = document.querySelector('.transcript');
transcript.appendChild(p);

recognition.addEventListener('result', e => {
  const words = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join(' ');

    p.textContent = words;
    if(e.results[0].isFinal) {
      p = document.createElement('p');
      transcript.appendChild(p)
    }
})

recognition.addEventListener('end', recognition.start);

recognition.start();

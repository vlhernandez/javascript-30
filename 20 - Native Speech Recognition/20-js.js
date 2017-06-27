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
    .join(" ");

  console.log(words);
})

recognition.addEventListener('end', recognition.start);

recognition.start();

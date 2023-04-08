let text = document.getElementById('text');
let phrases = ['Front-end' ,'Html', 'css', 'javascript'];
let index = 0;

setInterval(function() {
  index = (index + 1) % phrases.length;
  text.classList.add('fade-out');
  setTimeout(function() {
    text.innerHTML = phrases[index];
    text.classList.remove('fade-out');
  }, 500);
}, 3000);
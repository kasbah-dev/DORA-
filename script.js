const nameForm = document.getElementById('nameForm');
const nameInput = document.getElementById('visitorName');
const errorMessage = document.getElementById('errorMessage');
const welcome = document.getElementById('welcome');
const celebration = document.getElementById('celebration');
const backButton = document.getElementById('backButton');

nameForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const enteredName = nameInput.value.trim().toLowerCase();

  if (enteredName === 'dora') {
    errorMessage.textContent = '';
    welcome.classList.add('hidden');
    celebration.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    launchConfetti();
  } else {
    errorMessage.textContent = 'Oops! This special surprise is for someone else. Try again 💗';
    nameInput.focus();
  }
});

backButton.addEventListener('click', () => {
  celebration.classList.add('hidden');
  welcome.classList.remove('hidden');
  nameInput.value = '';
  errorMessage.textContent = '';
  nameInput.focus();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function launchConfetti() {
  const symbols = ['🎉', '✨', '💖', '🌸', '🎊'];
  for (let i = 0; i < 24; i++) {
    const piece = document.createElement('span');
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.position = 'fixed';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.top = '-35px';
    piece.style.fontSize = (18 + Math.random() * 16) + 'px';
    piece.style.zIndex = '10';
    piece.style.pointerEvents = 'none';
    piece.style.transition = 'transform 2.8s ease-in, opacity 2.8s ease-in';
    document.body.appendChild(piece);
    requestAnimationFrame(() => {
      piece.style.transform = `translateY(${window.innerHeight + 80}px) rotate(${Math.random() * 600 - 300}deg)`;
      piece.style.opacity = '0';
    });
    window.setTimeout(() => piece.remove(), 3000);
  }
}

// ==========================
// KONTA
// ==========================
const accounts = {
  "nikodem": "1234",
  "test": "abcd",
  "admin": "brain"
};

// ==========================
// LOGOWANIE
// ==========================
function login() {
  const user = document.getElementById('user').value;
  const pass = document.getElementById('pass').value;

  if (accounts[user] && accounts[user] === pass) {
    localStorage.setItem('loggedInUser', user);
    showFiles();
  } else {
    alert("Nieprawidłowy login lub hasło");
  }
}

// ==========================
// WYLOGOWANIE
// ==========================
function logout() {
  localStorage.removeItem('loggedInUser');
  showLogin();
}

// ==========================
// POKAZYWANIE SEKCJI
// ==========================
function showFiles() {
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('files').classList.remove('hidden');

  const currentUser = localStorage.getItem('loggedInUser');
  document.getElementById('accountName').innerText =
    "Zalogowano jako konto: " + currentUser;

  loadScore();
}

function showLogin() {
  document.getElementById('files').classList.add('hidden');
  document.getElementById('loginForm').classList.remove('hidden');
}

// ==========================
// SPRAWDZANIE PRZY WEJŚCIU
// ==========================
if (localStorage.getItem('loggedInUser')) {
  showFiles();
} else {
  showLogin();
}


// ==========================
// 🎮 MINIGRA – Kliknij mózg
// ==========================

let score = 0;

function toggleGame() {
  document.getElementById('miniGame').classList.toggle('hidden');
}

function clickBrain() {
  score++;
  document.getElementById('score').innerText = score;

  const user = localStorage.getItem('loggedInUser');
  localStorage.setItem("score_" + user, score);
}

function loadScore() {
  const user = localStorage.getItem('loggedInUser');
  const saved = localStorage.getItem("score_" + user);

  score = saved ? parseInt(saved) : 0;
  document.getElementById('score').innerText = score;
}
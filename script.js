// konta użytkowników
const accounts = { "nikodem":"1234", "test":"abcd" };

// logowanie
function login() {
  const user = document.getElementById('user').value;
  const pass = document.getElementById('pass').value;
  
  if(accounts[user] && accounts[user] === pass) {
    localStorage.setItem('loggedIn', 'true');
    showFiles();
  } else {
    alert("Nieprawidłowy login lub hasło");
  }
}

// wylogowanie
function logout() {
  localStorage.removeItem('loggedIn');
  showLogin();
}

// pokazuje sekcję plików
function showFiles() {
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('files').classList.remove('hidden');
}

// pokazuje formularz logowania
function showLogin() {
  document.getElementById('files').classList.add('hidden');
  document.getElementById('loginForm').classList.remove('hidden');
}

// sprawdzanie przy wejściu
if(localStorage.getItem('loggedIn') === 'true') {
  showFiles();
} else {
  showLogin();
}

document.querySelectorAll('.faqQuestion').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});
// Konta użytkowników (tylko Ty je ustawiasz)
const accounts = { "nikodem":"1234", "test":"abcd" };

// Funkcja logowania
function login() {
  const user = document.getElementById('user').value;
  const pass = document.getElementById('pass').value;
  if(accounts[user] && accounts[user] === pass) {
    localStorage.setItem('loggedIn', 'true'); // zapamiętuje zalogowanie
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('files').classList.remove('hidden');
  } else {
    alert("Nieprawidłowy login lub hasło");
  }
}

// Funkcja wylogowania
function logout() {
  localStorage.removeItem('loggedIn');
  document.getElementById('files').classList.add('hidden');
  document.getElementById('loginForm').classList.remove('hidden');
}

// Sprawdzenie zalogowania przy wejściu na stronę
if(localStorage.getItem('loggedIn') === 'true') {
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('files').classList.remove('hidden');
}
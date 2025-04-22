const token = localStorage.getItem('authToken');
if (!token) {
  window.location.href = 'index.html';
} else {
  document.getElementById('token').textContent = token;
}

document.getElementById('logoutBtn').addEventListener('click', () => {
  localStorage.removeItem('authToken');
  window.location.href = 'index.html';
});

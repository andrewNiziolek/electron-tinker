document.getElementById('loginBtn').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const result = await window.electronAPI.login({ email, password });
  
    if (result.success) {
      localStorage.setItem('authToken', result.token);
      window.location.href = 'dashboard.html';
    } else {
      document.getElementById('result').textContent = 'Login failed.';
    }
  });
  
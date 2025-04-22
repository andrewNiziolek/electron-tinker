import React, { useState } from 'react';

export default function App() {
  const [token, setToken] = useState<string | null>(null);
  const [form, setForm] = useState({ email: '', password: '' });

  const handleLogin = async () => {
    const result = await window.electronAPI.login(form);
    if (result.success) {
      setToken(result.token);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      {token ? (
        <h2>Welcome! Token: {token}</h2>
      ) : (
        <>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <br />
          <button onClick={handleLogin}>Log In</button>
        </>
      )}
    </div>
  );
}

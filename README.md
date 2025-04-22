### 1. Download the Repo

Download and unzip the folder. Open the folder in VS Code.

---

### 2. Install Dependencies
In a Terminal window:

```bash
npm install
```

---

### 3. Run the App

```bash
npm start
```

This will launch the Electron window with the login interface.

---

## Authentication

Currently, the login process is stubbed with a fake token. The IPC handler in `main.js` logs the credentials and returns a success flag. You can replace this logic with real API authentication and secure token storage (e.g. using Keytar).

---

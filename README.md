# JavaScript DevTools Deterrent Script

A lightweight JavaScript deterrent script designed to discourage casual users from inspecting, copying, or tampering with your website through browser Developer Tools.

> ⚠️ Important:
> This script is NOT a security solution.
> It only acts as a front-end deterrent and cannot prevent determined users from accessing your website's source code.

---

## 📌 What Is This Script?

This script attempts to make it more difficult for users to:

- Open Developer Tools (DevTools)
- Inspect page elements
- View page source
- Access the browser console
- Right-click on the page
- Analyze client-side code

It uses several common anti-inspection techniques to discourage unauthorized inspection.

---

## 🚀 Features

### Right-Click Protection

Disables the browser context menu.

```javascript
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
```

Prevents users from:

- Inspecting elements quickly
- Viewing page source via context menu
- Saving images through right-click

---

### Keyboard Shortcut Blocking

Disables common browser shortcuts used for inspection.

Blocked shortcuts include:

| Shortcut | Purpose |
|-----------|----------|
| F12 | Open DevTools |
| Ctrl + Shift + I | Inspect Element |
| Ctrl + Shift + J | Open Console |
| Ctrl + Shift + C | Element Inspector |
| Ctrl + U | View Source |

Mac users:

| Shortcut | Purpose |
|-----------|----------|
| Cmd + Option + I | DevTools |
| Cmd + Option + J | Console |
| Cmd + Option + C | Inspector |
| Cmd + Option + U | Source Code |

---

### Debugger Loop Protection

Uses JavaScript's `debugger` statement repeatedly.

When Developer Tools are opened, the browser continuously hits breakpoints which can cause:

- Lag
- Freezing
- Slow performance
- Difficult inspection experience

Example:

```javascript
(function () {}).constructor('debugger')();
```

---

## 📂 File Structure

```text
project/
├── disable-devtools.js
│
└── README.md
```

---

## ⚙️ Installation

### Step 1

Create a JavaScript file.

Example:

```text
anti-devtools.js
```

---

### Step 2

Paste the script inside the file.

---

### Step 3

Include it before the closing body tag.

```html
<script src="assets/anti-devtools.js"></script>
</body>
```

Or place it in the head:

```html
<head>
    <script src="assets/anti-devtools.js"></script>
</head>
```

---

## 📖 How It Works

The script executes immediately after loading.

### It performs three actions:

### 1. Disable Right Click

```javascript
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
```

---

### 2. Disable DevTools Shortcuts

```javascript
document.addEventListener('keydown', function (e) {
    // Prevent inspection shortcuts
});
```

---

### 3. Start Anti-Debugging Loop

```javascript
cheatCheck();
```

This continuously triggers JavaScript debugger statements.

---

## 🔒 Security Notes

This script only protects against casual users.

A knowledgeable developer can still:

- Disable JavaScript
- Remove event listeners
- Use alternative browsers
- Access source files from network requests
- Bypass debugger loops
- Download assets directly

Because of this:

### Never rely on this script for real security.

Real security should always be handled on the server.

Examples:

✅ Authentication

✅ Authorization

✅ Session validation

✅ CSRF protection

✅ Input validation

✅ Rate limiting

✅ Database security

---

## ⚠️ Limitations

This script cannot:

- Hide HTML source code
- Hide CSS files
- Hide JavaScript files
- Prevent network requests
- Protect API endpoints
- Stop advanced users

Remember:

Anything sent to a user's browser can eventually be viewed.

---

## 💡 Best Use Cases

Suitable for:

- Portfolio websites
- Landing pages
- Educational websites
- Business websites
- Basic content protection

Not suitable for:

- Payment security
- API protection
- Authentication systems
- Sensitive business logic

---

## 🛠 Customization

Disable only right-click:

```javascript
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
```

---

Disable only keyboard shortcuts:

```javascript
document.addEventListener('keydown', function (e) {
    // shortcut logic
});
```

---

Remove debugger loop:

```javascript
// cheatCheck();
```

---

## 📋 Browser Compatibility

Supported on:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Brave Browser
- Opera
- Safari

Results may vary depending on browser settings.

---

## 👨‍💻 Author

### Frank Nwafor

Full Stack Developer

🌐 Portfolio:
https://frankstack.com.ng

---

## 📜 License

Free for personal and commercial use.

You may modify, distribute, and integrate this script into your own projects.

---

## ⭐ Disclaimer

This project is intended as a deterrent only.

It does NOT provide actual security and should never replace proper backend security practices.

If your application contains sensitive information, always secure it on the server side.

Happy Coding 🚀

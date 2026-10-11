document.addEventListener('DOMContentLoaded', () => {
    const loginView = document.getElementById('login-view');
    const registerView = document.getElementById('register-view');
    const showRegisterBtn = document.getElementById('show-register');
    const showLoginBtn = document.getElementById('show-login');
    const alertBox = document.getElementById('auth-alert');

    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    showRegisterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        hideAlert();
        loginView.classList.add('hidden');
        registerView.classList.remove('hidden');
    });

    showLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        hideAlert();
        registerView.classList.add('hidden');
        loginView.classList.remove('hidden');
    });

    // Inscription
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        hideAlert();

        const data = {
            username: document.getElementById('register-firstname').value,
            email: document.getElementById('register-email').value,
            password: document.getElementById('register-password').value,
        };

        try {
            const res = await fetch('../backend/register.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const result = await res.json();

            if (res.ok && result.success) {
                showAlert('Compte créé ! Redirection...', 'success');
                setTimeout(() => { window.location.href = 'dashboard.php'; }, 1000);
            } else {
                showAlert(result.message || 'Erreur lors de l\'inscription.');
            }
        } catch (err) {
            showAlert('Erreur réseau ou serveur.');
        }
    });

    // Connexion
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        hideAlert();

        const data = {
            email: document.getElementById('login-email').value,
            password: document.getElementById('login-password').value,
        };

        try {
            const res = await fetch('../backend/login.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const result = await res.json();

            if (res.ok && result.success) {
                showAlert('Connexion réussie ! Redirection...', 'success');
                setTimeout(() => { window.location.href = 'dashboard.php'; }, 1000);
            } else {
                showAlert(result.message || 'Identifiants incorrects.');
            }
        } catch (err) {
            showAlert('Erreur réseau ou serveur.');
        }
    });

    function showAlert(message, type = 'error') {
        alertBox.textContent = message;
        alertBox.className = `alert alert-${type}`;
    }

    function hideAlert() {
        alertBox.className = 'alert hidden';
        alertBox.textContent = '';
    }
});
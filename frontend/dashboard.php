
Justine Leborgne <leborgne.justine8129@gmail.com>
16:56 (il y a 0 minute)
À moi

<?php
session_start();

// Si l'utilisateur n'est pas connecté, retour à la page de connexion
if (!isset($_SESSION['user_id'])) {
    header('Location: index.html');
    exit;
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FitTrack — Tableau de bord</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body style="justify-content: center; align-items: center;">

    <main class="auth-container" style="text-align: center;">
        <header class="brand-header" style="justify-content: center;">
            <span class="brand-accent"></span>
            <h1 class="brand-name">FITTRACK</h1>
        </header>

        <h2 class="auth-title">BIENVENUE, <?php echo htmlspecialchars($_SESSION['username']); ?> !</h2>
        <p class="auth-subtitle">Ton espace personnel est prêt.</p>

        <button id="logout-btn" class="btn-primary" style="margin-top: 20px;">SE DÉCONNECTER</button>
    </main>

    <script>
        document.getElementById('logout-btn').addEventListener('click', async () => {
            await fetch('../backend/logout.php');
            window.location.href = 'index.html';
        });
    </script>
</body>
</html>
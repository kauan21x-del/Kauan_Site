// Aguarda o carregamento completo do HTML
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');

    // 1. Verifica o tema salvo no navegador
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        if (themeToggleBtn) themeToggleBtn.textContent = '☀️';
    } else {
        if (themeToggleBtn) themeToggleBtn.textContent = '🌙';
    }

    // 2. Adiciona a ação do clique
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');

            if (document.body.classList.contains('light-mode')) {
                themeToggleBtn.textContent = '☀️';
                localStorage.setItem('theme', 'light');
            } else {
                themeToggleBtn.textContent = '🌙';
                localStorage.setItem('theme', 'dark');
            }
        });
    }
});
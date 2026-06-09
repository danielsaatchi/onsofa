// theme.js — persists and applies dark/light preference
(function () {
  const STORAGE_KEY = 'onsofa-theme';

  function getTheme() {
    return localStorage.getItem(STORAGE_KEY) ||
      (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    // update all toggles on page
    document.querySelectorAll('.toggle-icon').forEach(el => {
      el.textContent = theme === 'dark' ? '☀️' : '🌙';
    });
    document.querySelectorAll('.theme-toggle-label').forEach(el => {
      el.textContent = theme === 'dark' ? 'Light' : 'Dark';
    });
  }

  // Apply immediately (before paint) to avoid flash
  applyTheme(getTheme());

  document.addEventListener('DOMContentLoaded', function () {
    // re-apply to update icons now that DOM is ready
    applyTheme(getTheme());

    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });
    });
  });
})();

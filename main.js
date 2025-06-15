document.getElementById('themeBtn').onclick = () => {
  document.body.classList.toggle('dark');
  document.getElementById('themeBtn').textContent =
    document.body.classList.contains('dark') ? '☀️' : '🌙';
};

const icon = document.getElementById('toggle-icon');

document.getElementById('toggle-dark-mode').addEventListener('change', function () {
  document.body.classList.toggle('dark-mode');

  const nav = document.getElementById('mainSection');
  if (nav) {
    // nav.classList.toggle('bg-light');
    // nav.classList.toggle('bg-dark');
  }
});

document.querySelector('.trigger-btn').addEventListener('click', showPopup);

function showPopup() {
  document.getElementById('popupOverlay').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popupOverlay').style.display = 'none';
}
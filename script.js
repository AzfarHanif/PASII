const icon = document.getElementById('toggle-icon');
const darkModeToggle = document.getElementById('toggle-dark-mode');
const nav = document.getElementById('mainSection');

document.addEventListener("DOMContentLoaded", () => {
  let darkMode = localStorage.getItem('darkMode');

  // ✅ Default to dark mode if no preference is saved
  if (!darkMode) {
    darkMode = 'enabled';
    localStorage.setItem('darkMode', 'enabled');
  }

  // ✅ Apply dark or light mode
  if (darkMode === 'enabled') {
    document.body.classList.add('dark-mode');
    if (darkModeToggle) darkModeToggle.checked = true;

    // Optional: navbar styles
    // if (nav) {
    //   nav.classList.add('bg-dark');
    //   nav.classList.remove('bg-light');
    // }
  } else {
    document.body.classList.remove('dark-mode');
    if (darkModeToggle) darkModeToggle.checked = false;
  }

  // ✅ Card animation
  const cards = document.querySelectorAll(".card");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));
});

// ✅ Toggle listener
if (darkModeToggle) {
  darkModeToggle.addEventListener('change', function () {
    const enableDark = this.checked;
    document.body.classList.toggle('dark-mode', enableDark);

    // Save preference
    localStorage.setItem('darkMode', enableDark ? 'enabled' : 'disabled');

    // Optional: navbar styles
    // if (nav) {
    //   nav.classList.toggle('bg-dark', enableDark);
    //   nav.classList.toggle('bg-light', !enableDark);
    // }
  });
}

// ✅ Popup handlers
document.querySelector('.trigger-btn').addEventListener('click', showPopup);

function showPopup() {
  document.getElementById('popupOverlay').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popupOverlay').style.display = 'none';
}

function showBooking() {
  document.getElementById("bookingOverlay").style.display = 'flex';
}

function closeBooking() {
  document.getElementById("bookingOverlay").style.display = 'none';
}

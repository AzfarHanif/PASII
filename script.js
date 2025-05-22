const icon = document.getElementById('toggle-icon');
const darkModeToggle = document.getElementById('toggle-dark-mode');
const nav = document.getElementById('mainSection');

// Apply dark mode from saved preference
document.addEventListener("DOMContentLoaded", () => {
  // Check saved mode
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    if (darkModeToggle) darkModeToggle.checked = true;

    // Optional: update navbar
    if (nav) {
      // nav.classList.add('bg-dark');
      // nav.classList.remove('bg-light');
    }
  }

  // Card animation logic
  const cards = document.querySelectorAll(".card");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, {
    threshold: 0.1
  });

  cards.forEach(card => observer.observe(card));
});

// Dark mode toggle logic (checkbox-based)
if (darkModeToggle) {
  darkModeToggle.addEventListener('change', function () {
    const enableDark = this.checked;
    document.body.classList.toggle('dark-mode', enableDark);

    // Optional: navbar toggle
    if (nav) {
      // nav.classList.toggle('bg-dark', enableDark);
      // nav.classList.toggle('bg-light', !enableDark);
    }

    // Save preference
    localStorage.setItem('darkMode', enableDark ? 'enabled' : 'disabled');
  });
}

// Popup handlers
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

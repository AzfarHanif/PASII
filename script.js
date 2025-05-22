const icon = document.getElementById('toggle-icon');

document.getElementById('toggle-dark-mode').addEventListener('change', function () {
  document.body.classList.toggle('dark-mode');

  const nav = document.getElementById('mainSection');
  if (nav) {
    // nav.classList.toggle('bg-light');
    // nav.classList.toggle('bg-dark');
  }
});

document.addEventListener("DOMContentLoaded", () => {
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

    cards.forEach(card => {
        observer.observe(card);
    });
});

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
function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }
  
  window.onclick = function(event) {
    const menu = document.getElementById('dropdownMenu');
    if (!event.target.closest('.profile-container')) {
      menu.style.display = 'none';
    }
  }
  
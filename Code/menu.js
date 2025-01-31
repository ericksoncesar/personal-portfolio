document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const menu = document.getElementById("menu");

  menuButton.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    if (!menuButton.contains(event.target) && !menu.contains(event.target)) {
      menu.classList.remove("active");
    }
  });
});

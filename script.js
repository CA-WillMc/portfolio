function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  var body = document.body;

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var scrollPercentage =
      (scrollPosition / (document.body.scrollHeight - window.innerHeight)) *
      100;

    // Calculate the opacity based on scroll position
    var opacity = 1 - scrollPercentage / 100;

    // Apply fading effect
    if (scrollPercentage < 50) {
      opacity = 1 - scrollPercentage / 100;
    } else {
      opacity = scrollPercentage / 100;
    }
    body.style.backgroundColor = "rgba(173, 216, 230," + opacity + ")";
  });
});

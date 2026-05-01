window.addEventListener("scroll", function () {
  let nav = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    nav.style.background = "blue";
  } else {
    nav.style.background = "black";
  }
});
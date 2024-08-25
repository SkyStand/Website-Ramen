document.addEventListener("DOMContentLoaded", function () {
  const images = ["../Assets/menu1.jpg", "../Assets/menu2.jpg"];
  let currentIndex = 0;

  const menuImage = document.getElementById("menuImage");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    menuImage.src = images[currentIndex];
  });

  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    menuImage.src = images[currentIndex];
  });
});

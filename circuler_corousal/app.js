const carousel = document.querySelector("#carousel");

carousel.innerHTML += carousel.innerHTML;

let totalWidth = 0;
const images = carousel.querySelectorAll("img");
images.forEach((img) => {
  totalWidth += img.offsetWidth + 20;
});

gsap.to(carousel, {
  x: -totalWidth / 2,
  duration: 20,
  ease: "none",
  repeat: -1,
});

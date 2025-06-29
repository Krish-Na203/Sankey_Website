const box = document.getElementsByClassName("circuler")[0];

const tl = gsap.timeline({ paused: true, reversed: true });

tl.to(box, {
  duration: 1,
  width: "90vw",
  borderRadius: "100px",
  ease: "ease",
});

box.addEventListener("click", () => {
  tl.reversed() ? tl.play() : tl.reverse();
});

gsap.registerPlugin(ScrollTrigger);

const scrollText = document.getElementById("scrollText");
const letters = scrollText.textContent.split("");
scrollText.textContent = "";

letters.forEach((char) => {
  const span = document.createElement("span");
  span.textContent = char;
  scrollText.appendChild(span);
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: scrollText,
    start: "center center",
    end: "+=1000",
    scrub: true,
    pin: true,
  },
});

gsap.utils.toArray(".scroll-text span").forEach((el, i) => {
  tl.to(
    el,
    {
      color: "red",
      duration: 0.1,
    },
    i * 0.05
  );
});

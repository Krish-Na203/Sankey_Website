gsap.to(".elipse", {
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".elipse",
    start: "60% center",
    end: "100% center",
    pin: true,
    scrub: true,
  },
});

tl.to(".elipse", {
  x: -850,
  y: 1200,
  rotation: 90,
  rotationX: 180,
  scale: 2.5,
  duration: 2,
}).to(".elipse", {
  y: 750,
  scale: 2,
  duration: 1,
});

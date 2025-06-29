const carousel = document.querySelector("#carousel");
let cards = gsap.utils.toArray(".card");
const cardWidth = cards[0].offsetWidth + 40;
let x = 0;

function animateCenterCard() {
  const center = window.innerWidth / 2.2;
  let closest = null;
  let minDist = Infinity;

  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const dist = Math.abs(center - (rect.left + rect.width / 2));
    if (dist < minDist) {
      minDist = dist;
      closest = card;
    }
  });

  cards.forEach((card) => {
    const isActive = card === closest;

    gsap.to(card, {
      opacity: isActive ? 1 : 0.5,
      duration: 0.5,
      ease: "elastic.out(1, 0.4)",
    });

    const top = card.querySelector(".top-inner");
    const bottom = card.querySelector(".bottom-inner");

    if (isActive) {
      gsap.to(top, {
        y: 250,
        rotate: 8,
        duration: 2,
        ease: "elastic.out(1, 0.4)",
      });

      gsap.to(bottom, {
        y: -50,
        rotate: -8,
        duration: 2,
        ease: "back.out(1.7)",
      });
    } else {
      gsap.to(top, {
        y: 0,
        rotate: 0,
        duration: 2,
        ease: "power2.out",
      });

      gsap.to(bottom, {
        y: 0,
        rotate: 0,
        duration: 2,
        ease: "back.out(1.7)",
      });
    }
  });
}

function loopCarousel() {
  x -= 2.5;
  gsap.set(carousel, { x });

  const firstCard = cards[0];
  const firstCardRect = firstCard.getBoundingClientRect();

  if (firstCardRect.right < 0) {
    const removed = cards.shift();
    carousel.appendChild(removed);
    cards.push(removed);

    x += cardWidth;
    gsap.set(carousel, { x });
  }

  animateCenterCard();
  requestAnimationFrame(loopCarousel);
}

requestAnimationFrame(loopCarousel);

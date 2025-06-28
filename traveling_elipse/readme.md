# 🌌 Traveling Ellipse — Scroll-Triggered GSAP Animation

An interactive visual demo using **GSAP** and **ScrollTrigger**, featuring a dynamic, animated glowing ellipse that moves, scales, and rotates with scroll. This effect can be a stunning hero section, background animation, or an artistic intro to any web project.

---

## 🚀 Live Preview

> ✨ _Coming soon_ — Add a link if hosted!

---

## 📸 Demo Snapshot

### 🎥 Animation Preview (Video)
[![Watch the animation](preview.png)](./traveling_elipse.mp4)  
> Replace the above link with a real video link (e.g., YouTube, Loom, or self-hosted)

---

## 🛠️ Features

- 🎞️ **Scroll-driven animation** using `ScrollTrigger`
- 🔁 Smooth **yoyo looping animation**
- 🔵 Multi-layered `::before` and `::after` blur effects
- 🎯 Fully responsive and fluid motion
- 🔧 Built with **HTML, CSS, GSAP**

---

## 📁 Project Structure

```bash
.
├── index.html         # Main HTML file
├── elipse.css         # Styling and blur effects
├── elipse.js          # GSAP + ScrollTrigger animation logic
└── README.md          # You're reading this!
```

---

## 💻 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/traveling-elipse.git
   ```

2. **Open in Browser**
   - Just open `index.html` in any browser — no build tools needed.

3. **Edit Freely**
   - Customize the animation in `elipse.js` and the visuals in `elipse.css`.

---

## ✨ GSAP Highlights

```js
// Infinite yoyo animation
gsap.to(".elipse", {
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

// Scroll-triggered timeline
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
```

---

## 📦 Dependencies

- [GSAP 3](https://greensock.com/gsap/)
- [ScrollTrigger Plugin](https://greensock.com/scrolltrigger/)

These are loaded via CDN in `index.html` — no install required.

---

## 🧠 Customization Ideas

- 💡 Add background stars or parallax layers
- 🎨 Control color themes dynamically
- 🔊 Add audio/sound FX synced with scroll
- ⚡ Pin additional text or UI elements during scroll

---

## 📜 License

MIT — free to use, share, and modify.

---

## 🙌 Credits

Built with ❤️ using GSAP by [GreenSock](https://greensock.com/).
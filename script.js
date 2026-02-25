gsap.registerPlugin(ScrollTrigger);

// Title animation
gsap.to("#title", {
  opacity: 1,
  y: -20,
  duration: 1,
  ease: "power2.out"
});

// Stats animation
gsap.to(".stat", {
  opacity: 1,
  y: -10,
  duration: 0.5,
  stagger: 0.3,
  delay: 0.5,
  ease: "power2.out"
});

// Scroll animation
gsap.registerPlugin(ScrollTrigger);

gsap.to("#car", {
  x: 900,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});
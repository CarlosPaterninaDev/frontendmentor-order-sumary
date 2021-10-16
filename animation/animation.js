const timeLine = gsap.timeline({
  repeat: 0,
});

timeLine.from('.hero', {
  duration: 0.8,
  opacity: 0.2,
  y: 50,
  delay: 0.2,
  borderRadius: 100,
});

timeLine.from('.title', {
  duration: 0.5,
  x: 50,
  delay: 0.3,
  opacity: 0,
});

timeLine.from('.info', {
  duration: 0.3,
  x: 50,
  opacity: 0,
});

timeLine.from('.card', {
  duration: 0.4,
  x: 50,
  delay: 0.2,
  opacity: 0,
});

timeLine.from('.btn', {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: 'power4.out',
  stagger: 0.3,
});

// Scrollspy: highlight the active "file tab" in the sticky nav as sections pass by.
document.addEventListener('DOMContentLoaded', () => {
  const tabs = Array.from(document.querySelectorAll('.filetab'));
  const sections = tabs
    .map(tab => document.getElementById(tab.dataset.section))
    .filter(Boolean);

  if (!('IntersectionObserver' in window) || sections.length === 0) return;

  const setActive = (id) => {
    tabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.section === id);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    // Pick the entry closest to the top of the viewport that's currently intersecting.
    const visible = entries.filter(e => e.isIntersecting);
    if (visible.length === 0) return;
    visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    setActive(visible[0].target.id);
  }, {
    rootMargin: '-15% 0px -70% 0px',
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));
});

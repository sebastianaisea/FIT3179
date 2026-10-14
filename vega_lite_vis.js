
var vg_1 = "JS/lego_line_chart.vg.json";
var vg_2 = "JS/lego_box_plot.vg.json";

// First graph: Annual LEGO releases
vegaEmbed("#lego_line_chart", vg_1, {
  actions: true
}).catch(console.error);

// Keep the navigation highlight in sync with the section being read.
const sectionLinks = Array.from(document.querySelectorAll('.section-nav a'));
const sectionObserver = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting)
    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
  if (!visible) return;
  sectionLinks.forEach((link) => {
    if (link.hash === '#' + visible.target.id) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}, { rootMargin: '0px 0px -55% 0px' });
document.querySelectorAll('main > section').forEach((section) => sectionObserver.observe(section));

// Second graph: Piece counts by decade
vegaEmbed("#lego_box_plot", vg_2, {
  actions: true
}).catch(console.error);

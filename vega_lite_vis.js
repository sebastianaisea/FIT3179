// Show loading failures in the chart panel instead of leaving it blank.
function embedChart(selector, specification, options) {
  return vegaEmbed(selector, specification, options).catch((error) => {
    const panel = document.querySelector(selector);
    if (panel) {
      const message = document.createElement("p");
      message.className = "chart-load-error";
      message.setAttribute("role", "alert");
      message.textContent = "This chart could not load: " + error.message;
      panel.replaceChildren(message);
    }
    throw error;
  });
}

var vg_1 = "JS/lego_line_chart.vg.json?v=20261014-charts";
var vg_2 = "JS/lego_box_plot.vg.json?v=20261014-charts";

// First graph: Annual LEGO releases
embedChart("#lego_line_chart", vg_1, {
  actions: true
}).catch(console.error);


// Second graph: Piece counts by decade
embedChart("#lego_box_plot", vg_2, {
  actions: true
}).catch(console.error);

// Third graph: AG LEGO Certified Stores per million residents.
embedChart("#lego_australia_choropleth", "JS/lego_australia_choropleth.vg.json?v=20261014-charts", {
  actions: true,
  renderer: "svg"
}).catch(console.error);

// Fourth graph: state shading represents relative LEGO search interest.
embedChart("#lego_australia_search_interest", "JS/lego_australia_search_interest.vg.json?v=20261014-charts", {
  actions: true,
  renderer: "svg"
}).catch(console.error);

// True Vega treemap: resize to its panel.
embedChart("#lego_theme_ownership_treemap", "JS/lego_theme_ownership_treemap.vg.json?v=20261014-charts", {
  mode: "vega", actions: true, renderer: "svg"
}).then(({ view }) => {
  const panel = document.querySelector("#lego_theme_ownership_treemap");
  const resize = () => view.width(Math.max(1, panel.clientWidth)).resize().runAsync().catch(console.error);
  resize();
  const observer = new ResizeObserver(resize);
  observer.observe(panel);
}).catch(console.error);

// Australian theme popularity: annual Google Trends rankings.
embedChart("#lego_australia_theme_bump", "JS/lego_australia_theme_bump.vg.json?v=20261014-charts", {
  actions: true, renderer: "svg"
}).catch(console.error);

// Australian monthly LEGO search interest with the December 2023 peak annotated.
embedChart("#lego_australia_monthly_interest", "JS/lego_australia_monthly_interest.vg.json?v=20261014-charts", {
  actions: true, renderer: "svg"
}).catch(console.error);

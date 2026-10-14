
var vg_1 = "JS/lego_line_chart.vg.json";
var vg_2 = "JS/lego_box_plot.vg.json";

// First graph: Annual LEGO releases
vegaEmbed("#lego_line_chart", vg_1, {
  actions: true
}).catch(console.error);


// Second graph: Piece counts by decade
vegaEmbed("#lego_box_plot", vg_2, {
  actions: true
}).catch(console.error);

// Third graph: AG LEGO Certified Stores per million residents.
vegaEmbed("#lego_australia_choropleth", "JS/lego_australia_choropleth.vg.json", {
  actions: true,
  renderer: "svg"
}).catch(console.error);

// Fourth graph: state shading represents relative LEGO search interest.
vegaEmbed("#lego_australia_search_interest", "JS/lego_australia_search_interest.vg.json", {
  actions: true,
  renderer: "svg"
}).catch(console.error);

// True Vega treemap: resize to its panel.
vegaEmbed("#lego_theme_ownership_treemap", "JS/lego_theme_ownership_treemap.vg.json", {
  mode: "vega", actions: true, renderer: "svg"
}).then(({ view }) => {
  const panel = document.querySelector("#lego_theme_ownership_treemap");
  const resize = () => view.width(Math.max(1, panel.clientWidth)).resize().runAsync().catch(console.error);
  resize();
  const observer = new ResizeObserver(resize);
  observer.observe(panel);
}).catch(console.error);

// Australian theme popularity: annual Google Trends rankings.
vegaEmbed("#lego_australia_theme_bump", "JS/lego_australia_theme_bump.vg.json", {
  actions: true, renderer: "svg"
}).catch(console.error);

// Australian monthly LEGO search interest with the December 2023 peak annotated.
vegaEmbed("#lego_australia_monthly_interest", "JS/lego_australia_monthly_interest.vg.json", {
  actions: true, renderer: "svg"
}).catch(console.error);

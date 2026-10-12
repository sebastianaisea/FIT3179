
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

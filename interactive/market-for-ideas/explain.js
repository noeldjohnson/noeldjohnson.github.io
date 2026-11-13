// Shared helpers for the explainer pages of the Mapping the Market for Ideas companion.
const C = { navy:"#1B2A4A", rust:"#C75B12", teal:"#2A6F77", gold:"#C9A227", gray:"#5C5C5C" };
const f2 = d3.format(".2f"), f3 = d3.format(".3f");
const rad = d => d * Math.PI / 180;
// bind a range input to a readout span and a callback
function slider(id, fmt, cb) { const el = document.getElementById(id), out = document.getElementById(id + "v");
  const go = () => { if (out) out.textContent = fmt(+el.value); cb(); }; el.addEventListener("input", go); return () => +el.value; }
// seeded random numbers so a figure does not change on reload
function rng(seed) { let s = seed >>> 0; return () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
function normal(r) { return Math.sqrt(-2 * Math.log(1 - r())) * Math.cos(2 * Math.PI * r()); }
const tip = () => d3.select("#tip");
const showTip = (ev, html) => tip().html(html).style("opacity",1).style("left", Math.min(ev.clientX + 14, window.innerWidth - 310) + "px").style("top", (ev.clientY + 14) + "px");
const hideTip = () => tip().style("opacity",0);
document.addEventListener("DOMContentLoaded", () => { if (window.renderMathInElement) renderMathInElement(document.body, { delimiters: [{left:"$$",right:"$$",display:true},{left:"\\(",right:"\\)",display:false}] }); });

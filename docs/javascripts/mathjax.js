// MathJax 3 configuration.
// Supports both \(...\) / \[...\] (recommended) and $...$ / $$...$$.
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"], ["$", "$"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    processHtmlClass: null,
    ignoreHtmlClass: "tex2jax_ignore"
  }
};

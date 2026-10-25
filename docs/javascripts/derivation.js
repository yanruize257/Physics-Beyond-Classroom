// Re-typeset MathJax inside collapsible derivation blocks when they are opened,
// so that mathematics hidden inside a closed <details> element renders correctly.
document.addEventListener("DOMContentLoaded", function () {
  var blocks = document.querySelectorAll(
    "details.derivation, details.admonition.derivation, .admonition.derivation details"
  );
  blocks.forEach(function (details) {
    details.addEventListener("toggle", function () {
      if (details.open && window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise([details]).catch(function (err) {
          console.error("MathJax typeset failed in a derivation block:", err);
        });
      }
    });
  });
});

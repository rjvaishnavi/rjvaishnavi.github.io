// Small progressive-enhancement touches. The site works fine with
// JS disabled — this just adds a "Copy" button for BibTeX entries.
document.addEventListener('click', function (e) {
  if (!e.target.matches('.copy-bibtex')) return;
  var pre = e.target.nextElementSibling;
  if (!pre) return;
  navigator.clipboard.writeText(pre.textContent.trim()).then(function () {
    var original = e.target.textContent;
    e.target.textContent = 'Copied!';
    setTimeout(function () { e.target.textContent = original; }, 1500);
  });
});

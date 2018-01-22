
function unmark(elem) {
  sele(all, 'p span.mark', elem).forEach(span => span.classList.contains(main.id) || (span.outerHTML = span.innerHTML));
}
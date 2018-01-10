
function removeSpansMark(elem) {
  sele(all, 'span.mark', elem).forEach(span => {
    if (!span.classList.contains(main.id)) span.outerHTML = span.innerHTML;
  });
}
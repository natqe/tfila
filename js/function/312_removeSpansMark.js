
function removeSpansMark(elem) {
  sele(all, 'p span.mark', elem).forEach(span => {
    if (!span.classList.contains(main.id)) span.outerHTML = span.innerHTML;
  });
}
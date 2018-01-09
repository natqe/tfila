
function removeSpansMark(elem) {
  sele(all, 'span.mark', elem).forEach(span => span.classList.contains(main.id) || span.classList.remove('mark'));
}
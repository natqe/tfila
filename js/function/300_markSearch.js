
function markSearch(data) {
  if (main.id.startsWith('חיפוש-')) {
    let valGet = main.id.split('-');
    valGet.shift();
    valGet = valGet.join(' ');
    const search = new RegExp(valGet, 'g');
    const reOldSpan = new RegExp("<(/)?span class='mark חיפוש-[^>]*>", 'g');
    const newSpan = `<span class='mark ${main.id}' >${valGet}</span>`;
    return data.replace(reOldSpan, '<span>').replace(search, newSpan);
  }
  return data;
}
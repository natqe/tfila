
function mainInAction(content) {
    [main.id, main.innerHTML] = [content.id, content.HTML];
    mainTreat(main.id);

    if (main.id.startsWith('חיפוש-')) {
        sele(all, 'article:not([id="preface"])', main).forEach(article => {
            const p = sele(article, 'p');
            removeSpansMark(p);
            p.innerHTML = markSearch(p.innerHTML);
        });
    }

}

function mainInAction(content) {
    [main.id, main.innerHTML] = [content.id, content.HTML];
    document.title = main.id !== '<?=$home?>' ? `${title} | ${main.id}` : title;
    mainTreat(main.id);

    if (main.id.startsWith('חיפוש-')) {
        sele(all, 'article[id][data-type]:not([id="preface"]) > p[id]', main).forEach(p => {
            removeSpansMark(p);
            p.innerHTML = markSearch(p.innerHTML);
        });
    }
}
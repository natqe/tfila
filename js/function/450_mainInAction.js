
function mainInAction(content) {
    [main.id, main.innerHTML] = [content.id, content.HTML];
    mainTreat(main.id);

    if (main.id.startsWith('חיפוש-')) {
        let valGet = main.id.split('-');
        valGet.shift();
        valGet = valGet.join(' ');
        const search = new RegExp(valGet, 'g');

        sele(all, 'article:not([id="preface"])', main).forEach(article => {
            const p = sele(article, 'p');
            p.innerHTML = p.innerHTML.replace(/<(\/)?span class=\'mark חיפוש-[^>]*>/g, '<span>');
            p.innerHTML = p.innerHTML.replace(search, `<span class='mark ${main.id}' >${valGet}</span>`);
        });
        removeSpansMark(main);
    }
    
}
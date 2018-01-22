
function mainInAction(content) {
    [main.id, main.innerHTML] = [content.id, content.HTML];
    document.title = main.id !== '<?=$home?>' ? `${baseTitle} | ${main.id.replace(/-/g, ' ')}` : baseTitle;
    mainTreat(main.id);

    if (main.id.startsWith('חיפוש-')) {
        sele(all, 'article[id][data-type]:not([id="preface"]) > p[id]', main).forEach(p => {
            unmark(p);
            p.innerHTML = markSearch(p.innerHTML);
        });
    }

    const inputEmail = sele('input[type=email]');
    if(inputEmail) inputEmail.focus();
}

function changeMain (toMain) {
    const varGet = toMain.startsWith('חיפוש-') ? 'search' : 'content';
    if (varGet === 'content') {
        toMain = pages.find(page => page == (idFrom(toMain) || '<?=$home?>')) || '<?=$not_found?>';
    }
    if (varGet === 'search') {
        var valGet = toMain.split('-');
        valGet.shift();
        valGet = valGet.join('-');
    }
    let content = contents.find(content => content.id == toMain);
    if (content) {
        mainInAction(content);
    } else {
        get(varGet, varGet === 'content' ? toMain : valGet)
            .then(data => {
                contents.push(content = { id: toMain, HTML: data });
                mainInAction(content);
            })
            .catch(err =>
                console.log(err));
    }
};
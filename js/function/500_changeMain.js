const mainInAction = content => {
    [main.id, main.innerHTML] = [content.id, content.HTML];
    titleAndValidat(main.id);
};
const changeMain = toMain => {
    toMain = pages.find(page => page == (idFrom(toMain) || '<?=$home?>')) || '<?=$not_found?>';
    let content = contents.find(content => content.id == toMain);
    if (content) {
        mainInAction(content);
    } else {
        get('content', toMain)
            .then(data => {
                contents.push(content = { id: toMain, HTML: data });
                mainInAction(content);
            })
            .catch(err =>
                console.log(err));
    }
};
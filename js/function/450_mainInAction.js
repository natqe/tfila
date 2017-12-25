const mainInAction = content => {
    [main.id, main.innerHTML] = [content.id, content.HTML];
    titleAndValidat(main.id);
};
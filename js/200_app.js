
main.style.marginTop = `${header.offsetHeight + 30}px`;

sele('aside').style.height = `${window.innerHeight - header.offsetHeight - 20}px`;

sele(all, 'time', footerSmall).forEach(time => time.textContent = new Date().getFullYear());

mainTreat(main.id);

loadPFromHash();

if (location.hash) shiftWindow();

window.addEventListener("hashchange", shiftWindow);

window.addEventListener('popstate', () => {
    sele('main').id === idFrom(location.pathname) || changeMain(idFrom(location.pathname));
    sele(all, `article[data-type="טקסט"]:not([id='${decodeURI(location.hash.replace("#", ""))}'])`).forEach(article => setOldP(sele(article, 'p')));
    if (location.hash) loadPFromHash();
});

headerNavContact.addEventListener('click', e => {
    e.stopPropagation();
    const windowContact = window.open('contact', '_blank', 'height=300,width=300, top=220, left=500, scrollbars=no, resizable=no');
    headerNavContact.addEventListener('click', () => windowContact.close());
});

headerNavSectionDiv.addEventListener('click', toggleNav);

sele(all, 'a:not([href^="#"]):not([href^="http"]):not([href^="javascript:void(0)"])', headerNav).forEach(a => a.addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();
    if (a.pathname !== location.pathname) {
        changeMain(a.pathname);
        history.pushState({}, '', a.pathname);
    }
    if (a.pathname !== '/' || headerNav.classList.contains('showingLi')) toggleNav();
}));

sele(all, 'abbr', headerNav).forEach(abbr => abbr.addEventListener('click', () => {
    headerNav.classList.add('searchMode');
    headerNavInput.focus();
    headerNavInput.addEventListener('blur', () => headerNav.classList.remove('searchMode'), { once: true });
}));

headerNavInput.addEventListener('keyup', () => {
    const search = headerNavInput.value ? `חיפוש-${headerNavInput.value.trim().replace(/\s+/g, '-')}` : '/';
    changeMain(search);
    history.pushState({}, '', search);
});

setTimeout(() => pages.forEach(page =>
    contents.find(content => content.id === page) || get('content', page).then(data => contents.push({ id: page, HTML: data }))
), 5000);

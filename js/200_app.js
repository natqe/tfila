
main.style.marginTop = `${header.offsetHeight + 30}px`;

if (location.hash) {
    shiftWindow();
    const locationHash = decodeURI(location.hash);
    const mainAsideA = sele(mainAside, `nav u a[href="${locationHash}"]`);
    if (mainAsideA && sele(mainSection, locationHash)) {
        mainAsideA.classList.add('active');
        loadPFromHash();
    }
}

if (main.id.startsWith('חיפוש-')) {
    sele(all, 'article[id][data-type]:not([id="preface"]) > p[id]', mainSection).forEach(p => p.innerHTML = markSearch(p.innerHTML));
}

mainTreat(main.id);

window.addEventListener("hashchange", shiftWindow);

window.addEventListener('popstate', () => {
    sele('main').id === idFrom(location.pathname) || changeMain(idFrom(location.pathname));
    sele(all, `article[data-type="טקסט"]:not([id='${decodeURI(location.hash.replace("#", ""))}'])`).forEach(article => setOldP(sele(article, 'p')));
    if (location.hash) loadPFromHash();
    removeSpansMark(main);
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
    if (!sele(a.parentElement, 'ul')) {
        if (a.pathname !== location.pathname) {
            changeMain(a.pathname);
            history.pushState({}, '', a.pathname);
        }
        if (a.pathname !== '/' || headerNav.classList.contains('showingLi')) toggleNav();
    }
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

pages.forEach(page => 
    setTimeout(() => contents.find(content => content.id === page) || get('content', page).then(data => contents.push({ id: page, HTML: data })), 0));

if (document.documentElement.offsetWidth > 768) {
    sele(all, 'ul:nth-of-type(1)>li>a', headerNav).forEach(a => {
        const changeFont = () => !(textWidth(a) + 2 > sele(headerNav, 'nav>ul:nth-of-type(1)>li').offsetWidth) || (a.style.fontSize = '1.5vw');
        changeFont();
        window.addEventListener('resize', changeFont);
    });
}
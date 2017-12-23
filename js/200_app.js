titleAndValidat(main.id);

sele(all, footerSmall, 'time').forEach(time => time.textContent = new Date().getFullYear());

sele(all, 'a:not([href^="#"]):not([href^="http"]):not([href^="javascript:void(0)"])').forEach(a => a.addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();
    if (a.pathname !== location.pathname) {
        changeMain(a.pathname);
        history.pushState({}, '', a.pathname);
    }
}));

this.addEventListener('popstate', () => sele('main').id === idFrom(location.pathname) || changeMain(location.pathname));

headerNavContact.addEventListener('click', e => {
    e.stopPropagation();
    const windowContact = window.open('contact', '_blank', 'height=300,width=300, top=220, left=500, scrollbars=no, resizable=no');
    headerNavContact.addEventListener('click', () => windowContact.close());
});

setTimeout(() => pages.forEach(page =>
    contents.find(content => content.id === page) || get('content', page).then(data => contents.push({ id: page, HTML: data }))
), 5000);
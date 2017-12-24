function loadPFromHash() {
    const currentPage = fPages.find(page => page.name === idFrom(location.pathname));
    if (currentPage && currentPage.type !== 'וידאו' && currentPage.type !== 'אודיו') {
        const p = !location.hash || sele(sele(decodeURI(location.hash)), '[id]');
        if (p && !isNaN(p.id)) getAndSetP(p);
    }
}
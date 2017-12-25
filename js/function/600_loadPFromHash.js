function loadPFromHash() {
    const currentPage = fPages.find(page => page.name === idFrom(location.pathname));
    if (currentPage && currentPage.type !== 'וידאו' && currentPage.type !== 'אודיו') {
        const p = location.hash ? sele(sele(decodeURI(location.hash)), '[id]'): false;
        if (p && !isNaN(p.id)) {
            const dataPara = paras.find(para => para.id === p.id);
            if (dataPara) {
                p.innerHTML = dataPara.HTML;
                p.setAttribute('setOld', dataPara.id);
            } else {
                getAndSetP(p);
            }
        }
    }
}
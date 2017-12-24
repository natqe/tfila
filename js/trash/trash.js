const headerNavInput = headerNav.querySelector('input');

function hashContent(elem) {
    if (elem) {
        elem = document.getElementById(elem);
        switch ('MAIN') {
            case elem.tagName:
                break;
            case elem.parentElement.tagName:
                elem = elem.parentElement;
                break;
            case elem.parentElement.parentElement.tagName:
                elem = elem.parentElement.parentElement;
                break;
            case elem.parentElement.parentElement.parentElement.tagName:
                elem = elem.parentElement.parentElement.parentElement;
                break;
            case elem.parentElement.parentElement.parentElement.parentElement.tagName:
                elem = elem.parentElement.parentElement.parentElement.parentElement;
                break;
            case elem.parentElement.parentElement.parentElement.parentElement.parentElement.tagName:
                elem = elem.parentElement.parentElement.parentElement.parentElement.parentElement;
                break;
            case elem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.tagName:
                elem = elem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
                break;
        }
        changeMain(elem);
    }
}
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    e.stopPropagation();
    hashContent(a.hash);
}));

headerNavInput.addEventListener('keypress', e => {
    e.stopPropagation();
    const headerNavInputValue = headerNavInput.value;
    if (e.keyCode === 13 && headerNavInputValue) {
        for (const section of document.getElementsByTagName('section')) {
            if (section.textContent.includes(headerNavInputValue)) {
                changeMain(section.parentElement);
                for (const child of section.children) if (child.textContent.includes(headerNavInputValue) && child.id) location.hash = '#' + child.id;
            }
        }
    }
});




















    const currentPage = fPages.find(page => page.name === elemId);
    if (currentPage && currentPage.type !== 'וידאו' && currentPage.type !== 'אודיו') {

        sele(all, '[data-id]').forEach(link => link.addEventListener('click', e => {
            e.stopPropagation();
            let para = paras.find(p => p.id == link.dataset.id);
            if (para) {
                const p = sele(`[id='${link.dataset.id}']`);
                if (p.getAttribute('setOld')) {
                    if(location.hash === link.hash) {
                        e.preventDefault();
                        history.pushState({}, '', location.pathname);
                    }
                    p.innerHTML = oldParas.find(old => old.id === link.dataset.id).HTML;
                    p.removeAttribute('setOld');
                } else {
                    p.innerHTML = para.HTML;
                    p.setAttribute('setOld', link.dataset.id);
                }
            } else {
                getAndSetP(sele(`[id='${link.dataset.id}']`));
            }
        }));


    }















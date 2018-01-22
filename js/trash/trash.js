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
                if (location.hash === link.hash) {
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














const controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
    triggerElement: header,
    duration: '90%',
    triggerHook: '0.9'
}).
    setClassToggle('#חסד-אל-כל-היום', 'fadeIn').
    addIndicators({
        name: 'fade scene',
        colorTrigger: 'black',
        colorStart: 'blue',
        colorEnd: 'green'
    }).
    addTo(controller);


const currentPage = fPages.find(page => page.name === idFrom(location.pathname));
if (currentPage && currentPage.type !== 'וידאו' && currentPage.type !== 'אודיו') {
}



















const searchId = `חיפוש-${headerNavInput.value.trim().replace(/\s+/g, '-')}`;
let content = contents.find(content => content.id == searchId);
if (content) {
    mainInAction(content);
} else {
    get('search', headerNavInput.value)
        .then(data => {
            contents.push(content = { id: searchId, HTML: data });
            mainInAction(content);
        })
        .catch(err =>
            console.log(err));
}
history.pushState({}, '', `?search=${headerNavInput.value}`);
console.log(main.id);

const SMController = new ScrollMagic.Controller();
const preface = sele('#preface');
if (preface) {
    new ScrollMagic.Scene({
        triggerElement: preface,
        duration: '100%',
        triggerHook: '0.95'
    }).setClassToggle(preface, 'fadeIn').
        addTo(SMController);
}



function markSearch(data) {
    if (main.id.startsWith('חיפוש-')) {
        let valGet = main.id.split('-');
        valGet.shift();
        valGet = valGet.join(' ');
        return data.replace(new RegExp("<(/)?span class='mark חיפוש-[^>]*>", 'g'), '<span>').
            replace(new RegExp(valGet, 'g'), `<span class='mark ${main.id}' >${valGet}</span>`);
    }
    return data;
}



inputEmail.addEventListener('keyup', e => {
    e.stopPropagation();
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputEmail.value)) {
        inputEmail.setCustomValidity('הכנס כתובת אימייל תקינה');
    } else {
        inputEmail.setCustomValidity('');
    }
});
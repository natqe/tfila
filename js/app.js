'use strict';
const aHashs = document.querySelectorAll('a[href^="#"]');
const mains = document.getElementsByTagName('main');
const sections = document.getElementsByTagName('section');
const header = document.querySelector('header');
const headerNav = header.querySelector('nav');
const headerNavInput = headerNav.querySelector('input');
const footer = document.querySelector('footer');
const footerH6 = footer.querySelector('h6');
const footerH6Times = footerH6.getElementsByTagName('time');
function changeMain(toMain) {
    for (const main of mains) {
        main.style.display = main !== toMain ? 'none' : 'grid';
    }
}
function hashContent(elem) {
    if (elem) {
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

for (const time of footerH6Times) {
    time.textContent = new Date().getFullYear();
}

hashContent(location.hash ? document.querySelector(location.hash) : false);

window.addEventListener('hashchange', () => hashContent(location.hash ? document.querySelector(location.hash) : false));
aHashs.forEach(a => a.addEventListener('click', () => hashContent(a.hash ? document.querySelector(a.hash) : false)));
headerNavInput.addEventListener('keypress', e => {
    const headerNavInputValue = headerNavInput.value;
    if (e.keyCode === 13 && headerNavInputValue) {
        for (const section of sections) {
            if (section.textContent.includes(headerNavInputValue)) {
                changeMain(section.parentElement);
                for (const child of section.children) {
                    const sectionChildId = child.id;
                    if (child.textContent.includes(headerNavInputValue) && sectionChildId)
                        location.hash = '#' + sectionChildId;
                }
            }
        }
    }
});
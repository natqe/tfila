'use strict';
const header = document.querySelector('header');
const headerNav = header.querySelector('nav');
const headerNavInput = headerNav.querySelector('input');
const footer = document.querySelector('footer');
const footerH6 = footer.querySelector('h6');
function changeMain(toMain) {
    for (const main of document.getElementsByTagName('main')) main.style.display = main !== toMain ? 'none' : 'grid';
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

hashContent(location.hash ? document.querySelector(location.hash) : false);
for (const time of footerH6.getElementsByTagName('time')) time.textContent = new Date().getFullYear();


window.addEventListener('hashchange', () => hashContent(location.hash ? document.querySelector(location.hash) : false));
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.stopPropagation();
        hashContent(a.hash ? document.querySelector(a.hash) : false);
    });
});
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
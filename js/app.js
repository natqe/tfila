'use strict';
const aHashs = document.querySelectorAll('a[href^="#"]');
const mains = document.getElementsByTagName('main');
const sections = document.getElementsByTagName('section');
const header = document.querySelector('header');
const headerNav = header.querySelector('nav');
const headerNavInput = headerNav.querySelector('input');
const footer = document.querySelector('footer');
const footerH6 = footer.querySelector('h6');
const footerH6Time = footerH6.querySelector('time');
const footerH6Bdi = footerH6.querySelector('bdi');
const footerH6BdiTime = footerH6Bdi.querySelector('time');
const year = new Date().getFullYear();
let locationHash = location.hash;
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

footerH6Time.textContent = year;
footerH6BdiTime.textContent = year;
hashContent(locationHash ? document.querySelector(locationHash) : false);

window.addEventListener('hashchange', () => {
    locationHash = location.hash;
    hashContent(locationHash ? document.querySelector(locationHash) : false);
});

aHashs.forEach(a => {
    a.addEventListener('click', () => {
        const aHash = a.hash;
        hashContent(aHash ? document.querySelector(aHash) : false);
    });
});

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
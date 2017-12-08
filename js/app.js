'use strict';

const header = document.querySelector('header');
const headerNav = header.querySelector('nav');
const headerNavInput = headerNav.querySelector('input');
const headerNavUl1 = headerNav.querySelector('ul:nth-of-type(1)');
const headerNavUl1Lis = headerNavUl1.getElementsByTagName('li');
const headerNavUl1Li4 = headerNavUl1Lis[3];
const headerNavUl1Li4A = headerNavUl1Li4.querySelector('a');
const footer = document.querySelector('footer');
const footerH6 = footer.querySelector('h6');
const sign_upPass = sign_up.querySelector('input[name=su_pass]');
const sign_upPassConfirm = sign_up.querySelector('input[type=password]:not([name=su_pass])');
function changeMain(toMain) {
    for (const main of document.getElementsByTagName('main')) main.style.display = main !== toMain ? 'none' : 'grid';
}
function hashContent(elem) {
    if (elem) {
        elem = document.querySelector(`[id='${elem.replace("#", "")}']`);
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
function validatePass(pass, passConf) {
    pass.onchange = pass.value !== passConf.value ? passConf.setCustomValidity('סיסמא אינה תואמת') : passConf.setCustomValidity('');
    passConf.onkeyup = pass.value !== passConf.value ? passConf.setCustomValidity('סיסמא אינה תואמת') : passConf.setCustomValidity('');
}
function newWindow(theElem, pageUrl) {
    theElem.addEventListener('click', () => {
        const windowContact = window.open(pageUrl, '_blank', 'height=300,width=300, top=220, left=500, scrollbars=no, resizable=no');
        theElem.addEventListener('mousemove', () => theElem.addEventListener('click', () => windowContact.close()));
    });
}

hashContent(location.hash);
validatePass(sign_upPass, sign_upPassConfirm)
newWindow(headerNavUl1Li4A, 'contact');
for (const time of footerH6.getElementsByTagName('time')) time.textContent = new Date().getFullYear();
window.addEventListener('hashchange', () => hashContent(location.hash));
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
                for (const child of section.children)
                    if (child.textContent.includes(headerNavInputValue) && child.id) location.hash = '#' + child.id;
            }
        }
    }
});
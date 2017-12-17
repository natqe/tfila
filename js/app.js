'use strict';
const pages = ['תורה', 'תפילה', 'בית', 'התחברות', 'הרשמה'];
const title = document.title;
const header = document.querySelector('header');
const headerNav = header.querySelector('nav');
const headerNavUl1 = headerNav.querySelector('ul:nth-of-type(1)');
const headerNavUl1Lis = headerNavUl1.getElementsByTagName('li');
const headerNavUl1Li4 = headerNavUl1Lis[3];
const headerNavUl1Li4A = headerNavUl1Li4.querySelector('a');
const main = document.querySelector('main');
// const signup = document.getElementById('הרשמה');
// const signupPass = signup.querySelector('input[name=su_pass]');
// const signupPassConfirm = signup.querySelector('input[type=password]:not([name])');
const footer = document.querySelector('footer');
const footerSmall = footer.querySelector('small');
const contents = [{ id: main.id, HTML: main.innerHTML }];
function idFrom(uri) {
    return decodeURI(uri.split('/').pop());
}
function changeTitle(toTitle) {
    document.title = toTitle !== 'בית' ? `${title} | ${toTitle}` : title;
}
function mainInAction(content) {
    main.id = content.id;
    main.innerHTML = content.HTML;
    changeTitle(content.id);
}
function changeMain(toMain) {
    toMain = pages.find(page => { return page == (idFrom(toMain) || 'בית'); }) || '404';
    let content = contents.find(content => { return content.id == toMain; });
    if (content) {
        mainInAction(content);
    } else {
        fetch(`?content=${toMain}`)
            .then(res => { return res.text(); })
            .then(data => {
                mainInAction(content = { id: toMain, HTML: data });
                contents.push(content);
            })
            .catch(err => console.log(err));
    }

}
function validatePass() {
    signupPass.value !== signupPassConfirm.value ? signupPassConfirm.setCustomValidity('סיסמא אינה תואמת') : signupPassConfirm.setCustomValidity('');
}

changeTitle(main.id);
for (const time of footerSmall.getElementsByTagName('time')) time.textContent = new Date().getFullYear();
document.querySelectorAll('a:not([href^="#"]):not([href^="http"]):not([href^="javascript:void(0)"])').forEach(a => a.addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();
    changeMain(a.pathname);
    history.pushState({}, '', a.pathname);
}));
this.addEventListener('popstate', () => changeMain(location.pathname));
headerNavUl1Li4A.addEventListener('click', e => {
    e.stopPropagation();
    const windowContact = window.open('contact', '_blank', 'height=300,width=300, top=220, left=500, scrollbars=no, resizable=no');
    headerNavUl1Li4A.addEventListener('click', () => windowContact.close());
});
document.querySelectorAll('input[type=email]').forEach(inputEmail => inputEmail.addEventListener('keyup', e => {
    e.stopPropagation();
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputEmail.value)) {
        inputEmail.setCustomValidity('הכנס כתובת אימייל תקינה');
    } else {
        inputEmail.setCustomValidity('');
    }

}));
setTimeout(() => pages.forEach(page =>
    contents.find(content => { return content.id === page; }) ||
    fetch(`?content=${page}`).then(res => { return res.text(); }).then(data => contents.push({ id: page, HTML: data }))
), 5000);
// signupPass.onchange = validatePass;
// signupPassConfirm.onkeyup = validatePass;




        // const xhr = new XMLHttpRequest();
        // xhr.open('GET', `?${toMain}`);
        // xhr.onload = () => {
        //     mainInAction(content = { id: toMain, HTML: xhr.responseText });
        //     contents.push(content);
        // };
        // xhr.send();



// const xhr = new XMLHttpRequest();
// xhr.open('GET', encodeURI('?תורה'));
// xhr.onload = () => console.log(xhr.responseText);
// xhr.send();

// fetch();

// let alreadyLoaded = [];

// function (arguments) {
//     alreadyLoaded.push('id');
// }

// function callAjax(url, callback){
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = () => xhr.readyState == 4 && xhr.status == 200 ? callback(xhr.responseText) : console.log(`Error:  ${xhr.status}`) ;
//     xhr.open('GET', url, true);
//     xhr.send();
// }


// callAjax(url, callback);





// const headerNavInput = headerNav.querySelector('input');

// function hashContent(elem) {
//     if (elem) {
//         elem = document.getElementById(elem);
//         switch ('MAIN') {
//             case elem.tagName:
//                 break;
//             case elem.parentElement.tagName:
//                 elem = elem.parentElement;
//                 break;
//             case elem.parentElement.parentElement.tagName:
//                 elem = elem.parentElement.parentElement;
//                 break;
//             case elem.parentElement.parentElement.parentElement.tagName:
//                 elem = elem.parentElement.parentElement.parentElement;
//                 break;
//             case elem.parentElement.parentElement.parentElement.parentElement.tagName:
//                 elem = elem.parentElement.parentElement.parentElement.parentElement;
//                 break;
//             case elem.parentElement.parentElement.parentElement.parentElement.parentElement.tagName:
//                 elem = elem.parentElement.parentElement.parentElement.parentElement.parentElement;
//                 break;
//             case elem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.tagName:
//                 elem = elem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
//                 break;
//         }
//         changeMain(elem);
//     }
// }
// document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
//     e.stopPropagation();
//     hashContent(a.hash);
// }));

// headerNavInput.addEventListener('keypress', e => {
//     e.stopPropagation();
//     const headerNavInputValue = headerNavInput.value;
//     if (e.keyCode === 13 && headerNavInputValue) {
//         for (const section of document.getElementsByTagName('section')) {
//             if (section.textContent.includes(headerNavInputValue)) {
//                 changeMain(section.parentElement);
//                 for (const child of section.children) if (child.textContent.includes(headerNavInputValue) && child.id) location.hash = '#' + child.id;
//             }
//         }
//     }
// });
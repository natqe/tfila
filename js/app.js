'use strict';
const title = document.title;
const header = document.querySelector('header');
const headerNav = header.querySelector('nav');
const headerNavContact = headerNav.querySelector('[href^="javascript:void(0)"]');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const footerSmall = footer.querySelector('small');
const contents = [{ id: main.id, HTML: main.innerHTML }];
const pages =<?= json_encode($pages) ?>;
function idFrom(uri) {
    return decodeURI(uri.split('/').pop());
}
function titleAndValidat(elemId) {
    document.title = elemId !== '<?= $home ?>' ? `${title} | ${elemId}` : title;
<?php if(!isset($_SESSION['user'])): ?>
    if (elemId === '<?= $sign_up ?>') {
        const signup = document.getElementById('<?= $sign_up ?>');
        const signupPass = signup.querySelector('input[name=su_pass]');
        const signupPassConfirm = signup.querySelector('input[type=password]:not([name])');
        function validatePass() {
            signupPass.value !== signupPassConfirm.value ? signupPassConfirm.setCustomValidity('סיסמא אינה תואמת') : signupPassConfirm.setCustomValidity('');
        }
        signupPass.onchange = validatePass;
        signupPassConfirm.onkeyup = validatePass;
    }

    switch (elemId) {
        case '<?= $sign_up ?>':
        case '<?= $sign_in ?>':
            const inputEmail = document.querySelector('input[type=email]');
            inputEmail.addEventListener('keyup', e => {
                e.stopPropagation();
                if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputEmail.value)) {
                    inputEmail.setCustomValidity('הכנס כתובת אימייל תקינה');
                } else {
                    inputEmail.setCustomValidity('');
                }
            })
    }
<?php endif; ?>
}
function mainInAction(content) {
    main.id = content.id;
    main.innerHTML = content.HTML;
    titleAndValidat(content.id);
}
function changeMain(toMain) {
    toMain = pages.find(page => { return page == (idFrom(toMain) || '<?= $home ?>'); }) || '<?= $not_found ?>';
    let content = contents.find(content => { return content.id == toMain; });
    if (content) {
        mainInAction(content);
    } else {
        fetch(`?content=${toMain}`)
            .then(res => {
                return res.text();
            })
            .then(data => {
                contents.push(content = { id: toMain, HTML: data });
                mainInAction(content);
            })
            .catch(err => console.log(err));
    }

}

titleAndValidat(main.id);
for (const time of footerSmall.getElementsByTagName('time')) time.textContent = new Date().getFullYear();
document.querySelectorAll('a:not([href^="#"]):not([href^="http"]):not([href^="javascript:void(0)"])').forEach(a => a.addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();
    const aPathname = a.pathname;
    if (aPathname !== location.pathname) {
        changeMain(aPathname);
        history.pushState({}, '', aPathname);
    }
}));
this.addEventListener('popstate', () => document.querySelector('main').id === idFrom(location.pathname) || changeMain(location.pathname));
headerNavContact.addEventListener('click', e => {
    e.stopPropagation();
    const windowContact = window.open('contact', '_blank', 'height=300,width=300, top=220, left=500, scrollbars=no, resizable=no');
    headerNavContact.addEventListener('click', () => windowContact.close());
});
setTimeout(() => pages.forEach(page =>
    contents.find(content => { return content.id === page; }) ||
    fetch(`?content=${page}`).then(res => { return res.text(); }).then(data => contents.push({ id: page, HTML: data }))
), 5000);



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
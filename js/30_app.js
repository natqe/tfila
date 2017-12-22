titleAndValidat(main.id);

sele(all, footerSmall, 'time').forEach(time => time.textContent = new Date().getFullYear());

sele(all, 'a:not([href^="#"]):not([href^="http"]):not([href^="javascript:void(0)"])').forEach(a => a.addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();
    if (a.pathname !== location.pathname) {
        changeMain(a.pathname);
        history.pushState({}, '', a.pathname);
    }
}));

this.addEventListener('popstate', () => sele('main').id === idFrom(location.pathname) || changeMain(location.pathname));

headerNavContact.addEventListener('click', e => {
    e.stopPropagation();
    const windowContact = window.open('contact', '_blank', 'height=300,width=300, top=220, left=500, scrollbars=no, resizable=no');
    headerNavContact.addEventListener('click', () => windowContact.close());
});

setTimeout(() => pages.forEach(page =>
    contents.find(content => content.id === page) || get('content', page).then(data => contents.push({ id: page, HTML: data }))
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
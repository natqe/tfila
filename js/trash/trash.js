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
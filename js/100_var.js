
const all = '*';
const title = document.title.split('|')[0].trim();
const [header, main, footer] = sele('header', 'main', 'footer');
const headerNav = sele(header, 'nav');
let [mainSection, mainAside] = sele(main, 'section', 'aside');
const [headerNavSection, headerNavContact, headerNavInput] = sele(headerNav, 'section', '[href^="javascript:void(0)"]', 'input[type="search"]');
const [headerNavSectionDiv, headerNavSectionPicture] = sele(headerNavSection, 'div', 'picture');
// const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const [pages, contents, oldParas, paras] = [<?= json_encode($pages) ?>, [{ id: main.id, HTML: main.innerHTML }], [], []];
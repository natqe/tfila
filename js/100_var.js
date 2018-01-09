
const all = '*';
const title = document.title;
const [header, main, footer] = sele('header', 'main', 'footer');
const headerNav = sele(header, 'nav');
const footerSmall = sele(footer, 'small');
const [headerNavSection, headerNavContact, headerNavInput] = sele(headerNav, 'section', '[href^="javascript:void(0)"]', 'input[type="search"]');
const [headerNavSectionDiv, headerNavSectionPicture] = sele(headerNavSection, 'div', 'picture');
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const SMController = new ScrollMagic.Controller();
const [pages, contents, oldParas, paras] = [<?= json_encode($pages) ?>, [{ id: main.id, HTML: main.innerHTML }], [], []];
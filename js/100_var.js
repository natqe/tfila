const all = '*';
const animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
const title = document.title;
const[header, main, footer] = sele('header', 'main', 'footer');
const[headerNav, footerSmall] = [sele(header, 'nav'), sele(footer, 'small')];
const headerNavH1 = sele(headerNav, 'h1');
const headerNavH1Div = sele(headerNavH1, 'div');
const headerNavContact = sele(headerNav, '[href^="javascript:void(0)"]');
const SMController = new ScrollMagic.Controller();
//the store
const[pages, fPages, contents, oldParas, paras] = 
[<?=json_encode($pages)?>, <?=json_encode($fetch_pages)?>, [{ id: main.id, HTML: main.innerHTML }], [], []];
const all = 'all'; 
const title = document.title;
const[header, main, footer] = sele('header', 'main', 'footer');
const[headerNav, footerSmall] = [sele(header, 'nav'), sele(footer, 'small')];
const headerNavContact = sele(headerNav, '[href^="javascript:void(0)"]');
const[pages, fPages, contents, oldParas, paras] = 
[<?=json_encode($pages)?>, <?=json_encode($fetch_pages)?>, [{ id: main.id, HTML: main.innerHTML }], [], []];
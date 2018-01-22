
function mainTreat(mainId) {
    mainAside = sele(main, 'aside');
    mainSection = sele(main, 'section');
    const mainAsideNav = sele(mainAside, 'nav');
    document.documentElement.scrollTop = 0;
    mainAside.style.top = `${header.offsetHeight - 30}px`;
    mainAside.style.height = `${window.innerHeight}px`;
    sele(all, 'a[href^="#"]').forEach(a => a.addEventListener('click', e => {
        if (location.hash && location.hash === a.hash) {
            e.preventDefault();
            history.pushState({}, '', location.pathname);
            if (a.dataset.type === 'טקסט') setOldP(sele('.setOld'));
        }
        const asideA = a.parentElement.tagName === 'U' && a.parentElement.parentElement === mainAsideNav ?
            a :
            sele(mainAsideNav, `u a[href="${a.getAttribute('href')}"]`);
        if (!asideA.classList.contains('active')) {
            const oldActive = sele(mainAsideNav, 'u a.active');
            if (oldActive) oldActive.classList.remove('active');
        }
        asideA.classList.toggle('active');
    }));

    '<?php if(!isset($_SESSION["user"])):?>';

    if (mainId === '<?=$sign_up?>') {
        const [signupPass, signupPassConfirm] = sele(sele("[id='<?=$sign_up?>']"), 'input[name=su_pass]', 'input[type=password]:not([name])');
        signupPass.onchange = signupPassConfirm.onkeyup =
            () => signupPass.value !== signupPassConfirm.value ?
                signupPassConfirm.setCustomValidity('סיסמא אינה תואמת') :
                signupPassConfirm.setCustomValidity('');
    }

    '<?php endif;?>';

    const removeActivesFromNav= ()=> sele(all, '.active', headerNav).forEach(oldActive => oldActive.classList.remove('active'));
    if (!main.id.startsWith('חיפוש-')) {
        const menuAParent = main.id !== 'בית' ? sele(`ul>li>a[href='${main.id}']`, headerNav).parentElement : headerNavSection;
        if (!menuAParent.classList.contains('active')) {
            removeActivesFromNav();
            menuAParent.classList.add('active');
            if (menuAParent.parentElement.parentElement.tagName === 'LI') menuAParent.parentElement.parentElement.classList.add('active');
        }
    } else {
        removeActivesFromNav();
    }

    sele(all, 'article[data-type="טקסט"]:not([id="preface"]) > p[id]', mainSection).forEach(p =>
        setTimeout(() =>
            paras.some(para => para.id === p.id) || get('p_from', p.id).then(data => paras.push({ id: p.id, HTML: data })).catch(err => { throw err }), 0));

}
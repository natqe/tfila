
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

    switch (mainId) {
        case '<?=$sign_up?>':
        case '<?=$sign_in?>':
            const inputEmail = sele('input[type=email]');
            inputEmail.focus();
            inputEmail.addEventListener('keyup', e => {
                e.stopPropagation();
                if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputEmail.value)) {
                    inputEmail.setCustomValidity('הכנס כתובת אימייל תקינה');
                } else {
                    inputEmail.setCustomValidity('');
                }
            });
    }

    '<?php endif;?>';
    sele(all, 'article[data-type="טקסט"]:not([id="preface"]) > p[id]', mainSection).forEach(p =>
        setTimeout(() =>
            paras.find(para => para.id === p.id) || get('p_from', p.id).then(data => paras.push({ id: p.id, HTML: data })).catch(err => console.log(err)), 0));
          
}
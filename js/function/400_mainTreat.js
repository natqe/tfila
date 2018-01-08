
function mainTreat(mainId) {

    document.title = mainId !== '<?=$home?>' ? `${title} | ${mainId}` : title;

    document.documentElement.scrollTop = 0;

    sele(all, 'a[href^="#"]').forEach(a => a.addEventListener('click', e => {
        if (location.hash && location.hash === a.hash) {
            e.preventDefault();
            history.pushState({}, '', location.pathname);
            if (a.dataset.type === 'טקסט') setOldP(sele('.setOld'));
        }
    }));

    const preface = sele('#preface');
    if (preface) {
        new ScrollMagic.Scene({
            triggerElement: preface,
            duration: '100%',
            triggerHook: '0.95'
        }).setClassToggle(preface, 'fadeIn').
            addTo(SMController);
    }


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

    setTimeout(() => sele(all, 'article[data-type="טקסט"]').forEach(articleText => {
        const p = sele(articleText, 'p');
        paras.find(para => para.id === p.id) || get('p_from', p.id).then(data => paras.push({ id: p.id, HTML: data })).catch(err => console.log(err));
    }), 0);
}
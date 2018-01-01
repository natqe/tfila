
function titleAndValidat(elemId) {

    document.title = elemId !== '<?=$home?>' ? `${title} | ${elemId}` : title;
    document.documentElement.scrollTop = 0;

    '<?php if(!isset($_SESSION["user"])):?>';

    if (elemId === '<?=$sign_up?>') {
        const signup = sele("[id='<?=$sign_up?>']");
        const [signupPass, signupPassConfirm] = sele(signup, 'input[name=su_pass]', 'input[type=password]:not([name])');
        [signupPass.onchange, signupPassConfirm.onkeyup] =
            [() => signupPass.value !== signupPassConfirm.value ?
                signupPassConfirm.setCustomValidity('סיסמא אינה תואמת') :
                signupPassConfirm.setCustomValidity('')];
    }

    switch (elemId) {
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

    const currentPage = fPages.find(page => page.name === elemId);
    if (currentPage && currentPage.type !== 'וידאו' && currentPage.type !== 'אודיו') {

        const mainArticle = sele(main, 'article');
        new ScrollMagic.Scene({
            triggerElement: mainArticle,
            duration: '100%',
            triggerHook: '0.95'
        }).setClassToggle(mainArticle, 'fadeInDown').
            addTo(SMController);

        sele(all, 'a[href^="#"]').forEach(a => a.addEventListener('click', e => {
            if (location.hash && location.hash === a.hash) {
                e.preventDefault();
                history.pushState({}, '', location.pathname);
                setOldP(sele('.setOld'));
            }
        }));
    }

}
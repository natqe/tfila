const get = (name, val, format) => fetch(`?${name}=${val}`).then(res => format === 'json' ? res.json() : res.text());

const idFrom = uri => decodeURI(uri.split('/').pop());

const titleAndValidat = elemId => {
    console.log('from titleAndValidat');
    document.title = elemId !== '<?=$home?>' ? `${title} | ${elemId}` : title;
    '<?php if(!isset($_SESSION["user"])):?>';
    if (elemId === '<?= $sign_up ?>') {
        const signup = sele("[id='<?=$sign_up?>']");
        const [signupPass, signupPassConfirm] = sele(signup, 'input[name=su_pass]', 'input[type=password]:not([name])');
        [signupPass.onchange, signupPassConfirm.onkeyup] = [() => signupPass.value !== signupPassConfirm.value ?
            signupPassConfirm.setCustomValidity('סיסמא אינה תואמת') :
            signupPassConfirm.setCustomValidity('')];
    }
    switch (elemId) {
        case '<?= $sign_up ?>':
        case '<?= $sign_in ?>':
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
        sele(all, '[data-id]').forEach(link => link.addEventListener('click', e => {
            e.stopPropagation();
            let para = paras.find(p => p.id == link.dataset.id);
            if (para) {
                const p = sele(`[id='${link.dataset.id}']`);
                if (p.innerHTML === para.HTML) {
                    p.innerHTML = oldParas.find(old => old.id === link.dataset.id).HTML;
                } else {
                    p.innerHTML = para.HTML;
                }
            }else {
                get('p_from', link.dataset.id).then(data => {
                    paras.push(para = { id: link.dataset.id, HTML: data });
                    const p = sele(`[id='${para.id}']`);
                    oldParas.push({ id: link.dataset.id, HTML: p.innerHTML });
                    p.innerHTML = para.HTML;
                }).catch(err =>
                    console.log(err));
            }
        }));
    }
};
const mainInAction = content => {
    [main.id, main.innerHTML] = [content.id, content.HTML];
    titleAndValidat(main.id);
};
const changeMain = toMain => {
    toMain = pages.find(page => page == (idFrom(toMain) || '<?=$home?>')) || '<?=$not_found?>';
    let content = contents.find(content => content.id == toMain);
    if (content) {
        mainInAction(content);
    } else {
        get('content', toMain)
            .then(data => {
                contents.push(content = { id: toMain, HTML: data });
                mainInAction(content);
            })
            .catch(err =>
                console.log(err));
    }
};


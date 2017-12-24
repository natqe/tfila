function getAndSetP (p) {
    get('p_from', p.id).then(data => {
        paras.push({ id: p.id, HTML: data });
        oldParas.push({ id: p.id, HTML: p.innerHTML });
        p.innerHTML = data;
        p.setAttribute('setOld', p.id);
    }).catch(err =>
        console.log(err));
}

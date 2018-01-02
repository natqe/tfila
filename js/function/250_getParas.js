
function getParas() {
    sele(all, 'article[id]').forEach(article => {
        const p = sele(article, '[id]');
        paras.find(para => para.id === p.id) || get('p_from', p.id).then(data => paras.push({ id: p.id, HTML: data })).catch(err => console.log(err));
    });
}
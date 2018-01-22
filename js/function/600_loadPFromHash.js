
function loadPFromHash() {
    const article = sele(decodeURI(location.hash));
    if (article) {
        if (article.dataset.type === 'טקסט') {
            const p = sele(article, 'p');
            oldParas.push({ id: p.id, HTML: p.innerHTML });
            const dataPara = paras.find(para => para.id === p.id);
            if (dataPara) {

                p.innerHTML = markSearch(dataPara.HTML);
                unmark(p);

            } else {
                get('p_from', p.id).then(data => {
                    paras.push({ id: p.id, HTML: data });

                    p.innerHTML = markSearch(data);

                    unmark(p);

                    p.scrollIntoView();
                    scrollBy(0, -(header.offsetHeight + 70));
                }).catch(err =>
                    console.log(err));
            }
            p.classList.add('setOld');
        } else {
            article.scrollIntoView();
            scrollBy(0, -(header.offsetHeight + 70));
        }
    }
}
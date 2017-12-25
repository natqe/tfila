
function setOldP(theP) {
    const oldPara = oldParas.find(old => old.id === theP.id);
    if (oldPara) {
        theP.innerHTML = oldPara.HTML;
        theP.removeAttribute('setOld');
    }
}
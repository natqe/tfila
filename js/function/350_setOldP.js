function setOldP(theP) {
    if (theP) {
        const oldPara = oldParas.find(old => old.id === theP.id);
        if (oldPara) {
            theP.innerHTML = oldPara.HTML;
            theP.classList.remove('setOld');
        }
    }
}
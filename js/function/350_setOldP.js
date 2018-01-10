
function setOldP(theP) {
    if (theP) {
        const oldPara = oldParas.find(old => old.id === theP.id);
        if (oldPara) {
            theP.classList.remove('setOld');
            theP.innerHTML = markSearch(oldPara.HTML);
            removeSpansMark(theP);
        }
    }
}
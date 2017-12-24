function setOldP(theP) {
    theP.innerHTML = oldParas.find(old => old.id === theP.id).HTML;
    theP.removeAttribute('setOld');
}
function toggleNav() {
    headerNav.classList.toggle('showingLi');
    headerNavSectionDiv.classList.toggle('change');
    headerNav.classList.contains('showingLi') ?
        [main, footer].forEach(elem => elem.addEventListener('click', toggleNav, { once: true })) :
        [main, footer].forEach(elem => elem.removeEventListener('click', toggleNav));
}
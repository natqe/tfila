function toggleNav() {
    headerNav.classList.toggle('showingLi');
    headerNavH1Div.classList.toggle('change');
    headerNav.classList.contains('showingLi') ? main.addEventListener('click', toggleNav, { once: true }) : main.removeEventListener('click', toggleNav);
}
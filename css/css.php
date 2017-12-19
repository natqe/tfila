body>header>nav>ul:nth-of-type(1){
    grid-template-columns: repeat(<?= count($fetch_pages)+1?>, 1fr);
}
<?php

require_once 'secure/pdo.php';

$fetch_pages = $pdo->query('SELECT * FROM pages ORDER BY created_at')->fetchAll();

$pages = array_column($fetch_pages, 'name');
$pages[] = $home = 'בית';
$pages[] = $not_found = '404';
if (!isset($_SESSION['user'])) {
    $pages[] = $sign_in = 'התחברות';
    $pages[] = $sign_up = 'הרשמה';
}

$types = ['תוכן', 'אודיו', 'וידאו', 'פקט'];

$request_page = ($_GET['content'] ?? ltrim(urldecode($_SERVER['REQUEST_URI']), '/')) ?: $home;

if (isset($_GET['content'])) {
    if (in_array($_GET['content'], $pages)) {
        require_once "html/body/main.html";
    }
} else {

?>
<!DOCTYPE html>
<html lang="he">
<head><?php require_once 'html/head.html'?></head>
<body>
    <header><?php require_once 'html/body/header.html'?></header>
    <main id="<?=$request_page?>"><?php require_once "html/body/main.html"?></main>
    <footer><?php require_once 'html/body/footer.html'?></footer>
    <script><?php require_once 'js/app.js'?></script>
    <noscript>Your browser does not support JavaScript!</noscript>
</body>
</html>
<?php

}

?>
<?php foreach (glob('php\\*.php') as $file) require_once $file;

if (isset($_GET['p_from'])) (require_once 'html/body/main/section/article/p.html') and die;

$fetch_pages = $pdo->query('SELECT * FROM pages ORDER BY created_at')->fetchAll();

$pages = $pages_from_db = array_column($fetch_pages, 'name');
$pages[] = $home = 'בית';
$pages[] = $not_found = '404';
if (!isset($_SESSION['user'])) {
    $pages[] = $sign_in = 'התחברות';
    $pages[] = $sign_up = 'הרשמה';
}

$request_page = ($_GET['content'] ?? ltrim(urldecode($_SERVER['REQUEST_URI']), '/')) ?: $home;
if (!in_array($request_page, $pages)) $request_page = $not_found;

if (isset($_GET['content'])) {
    if (in_array($_GET['content'], $pages)) require_once "html/body/main.html";
} else {
?>
<!DOCTYPE html>
<html lang=he>
<head><?php require_once 'html/head.html'?></head>
<body>
    <header><?php require_once 'html/body/header.html'?></header>
    <main id=<?=$request_page?>><?php require_once "html/body/main.html"?></main>
    <footer><?php require_once 'html/body/footer.html'?></footer>
    <script><?php foreach (array_merge(glob('js\\function\\*.js'), glob('js\\*.js')) as $file) require_once $file;?></script>
    <noscript>Your browser does not support JavaScript!</noscript>
</body>
</html>
<?php
}
// const TYPES = ['תוכן', 'אודיו', 'וידאו', 'פקט'];
?>

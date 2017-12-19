<?php
$pdo = new PDO('mysql:host=localhost;dbname=tfila;charset=utf8', 'root' , '');
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
$fetch_pages = $pdo->query('SELECT * FROM pages')->fetchAll();
$fetch_articles = $pdo->query('SELECT * FROM articles')->fetchAll();
foreach ($fetch_pages as $array) {
    $pages[] = $array['name'];
}
// print_r($fetch_articles);
// $stmt = $pdo->query('SELECT * FROM articles');

// while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
//     echo $row['title']."<br>";
// }

// print_r($pages);
// die;
$pages[] = $home = 'בית';
$pages[] = $not_found = '404';
$pages[] = $sign_in = 'התחברות';
$pages[] = $sign_up = 'הרשמה';
$request_page = ltrim(urldecode($_GET['content'] ?? $_SERVER['REQUEST_URI']), '/') ?: $home;
if ($request_page !== $home && !in_array($request_page, $pages)) $request_page=$not_found;
if(isset($_GET['content'])) {
    if (in_array($_GET['content'], $pages)) require_once "html/body/main.html";
}else{ ?>
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
<?php }?>
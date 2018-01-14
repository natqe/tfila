<?php foreach (glob('php/*.php') as $file) require_once $file;

// error_reporting(0);

// echo var_export(); die; //for tests

if (isset($_GET['p_from'])) {
    $prepare_p = $pdo->prepare("SELECT body FROM articles WHERE id = ? ");
    $prepare_p->execute([$_GET['p_from']]);
    die($prepare_p->fetch()['body']);
}

$fetch_pages = $pdo->query('SELECT * FROM pages ORDER BY created_at')->fetchAll();

$pages = $pages_from_db = array_column($fetch_pages, 'name');
$pages[] = $home = 'בית';
$pages[] = $not_found = '404';
if (!isset($_SESSION['user'])) {
    $pages[] = $sign_in = 'התחברות';
    $pages[] = $sign_up = 'הרשמה';
}

$search = 'חיפוש-';

$request_page = ($_GET['content'] ?? $_GET['search'] ?? ltrim(urldecode($_SERVER['REQUEST_URI']), '/')) ?: $home;

$search_str = isset($_GET['search']) || substr($request_page, 0, strlen($search)) === $search ?
    str_replace('-', ' ', $_GET['search'] ?? substr($request_page, strlen($search), strlen($request_page))) :
    false;
if(!strlen($search_str)) $search_str = false;

if (!in_array($request_page, $pages) && !$search_str) $request_page = $not_found;

if(isset($_GET['search'])){
    if ($search_str) require_once "html/body/main.html";
}elseif (isset($_GET['content'])) {
    if (in_array($_GET['content'], $pages)) require_once "html/body/main.html";
} else {
    $fetch_sub_menus = $pdo->query('SELECT * FROM sub_menu')->fetchAll();
    if ($request_page === $not_found) http_response_code(404);
    $year = date('Y');
    foreach (array_unique(array_column($fetch_sub_menus, 'below')) as $catgory) {
        $categories[]['name'] = $catgory;
    }
    $merge_cats_pages = array_merge($categories, $fetch_pages);
?>
<!DOCTYPE html>
<html lang=he>
<head><?php require_once 'html/head.html'?></head>
<body>
    <header><?php require_once 'html/body/header.html'?></header>
    <main id=<?=$request_page?>><?php require_once "html/body/main.html"?></main>
    <footer><?php require_once 'html/body/footer.html'?></footer>
    <noscript>Your browser does not support JavaScript!</noscript>
</body>
</html>
<?php
}
?>

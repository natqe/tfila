<?php
// session_start();
$uri = $_SERVER['REQUEST_URI'] === '/' ? 'בית' : ltrim(urldecode($_SERVER['REQUEST_URI']), '/');
// echo '<pre>';
// print_r($_SERVER) ;
// echo '<br><br>', $_SERVER['HTTP_USER_AGENT'],'</pre>';
// die;
?>
<?php if(isset($_GET['content'])) { 
    require_once "html/body/{$_GET['content']}.html";
}else{ ?>
<!DOCTYPE html>
<html lang="he">
<head>
    <?php require_once 'html/head.html'?>
</head>
<?php ?>
<body>
    <header>
        <?php require_once 'html/body/header.html'?>
    </header>
    <main id=<?=$uri?>>
        <?php include "html/body/$uri.html"?>
    </main>
    <footer>
        <?php require_once 'html/body/footer.html'?>
    </footer>
    <script>
        <?php require_once 'js/app.js'?>
    </script>
</body>
</html>
<?php }?>
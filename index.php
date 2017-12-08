<?php
session_start();
// $base_url = (isset($_SERVER['HTTPS']) ? "https" : "http") .'://' .$_SERVER['HTTP_HOST'] . '/';
?>
<!DOCTYPE html>
<html lang="he">

<head>
    <?php include 'html/head.php';?>
</head>

<body>
    <header>
        <?php include 'html/body/header.php';?>
    </header>
    <main id=home>
        <?php include 'html/body/home.php';?>
    </main>
    <main id="tora">
        <?php include 'html/body/tora.php';?>
    </main>
    <main id="tfila">
        <?php include 'html/body/tfila.php';?>
    </main>

    <?php if(!isset($_SESSION['user'])){ ?>
    <main id="sign_in">
        <?php include 'html/body/sign-in.php';?>
    </main>
    <main id="sign_up">
        <?php include 'html/body/sign-up.php';?>
    </main>
    <?php }; ?>
    <main id="404">
        <?php include 'html/body/404.php';?>
    </main>
    <footer>
        <?php include 'html/body/footer.php';?>
    </footer>
    <script src="js/app.js"></script>
</body>

</html>
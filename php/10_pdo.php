<?php
try{
  $pdo = new PDO('mysql:host=localhost;dbname=tfila;charset=utf8', 'root' , '');
  $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
  $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e){
  die("<script>console.log('Connection failed: {$e->getMessage()}')</script>");
}

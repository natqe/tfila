<?php
$pdo = new PDO('mysql:host=localhost;dbname=tfila;charset=utf8', 'root' , '');
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
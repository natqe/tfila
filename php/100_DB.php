<?php

class DB extends PDO{

  function __construct() {
    parent::__construct('mysql:host=localhost;dbname=tfila;charset=utf8', 'root' , '');
    $this->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    $this->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    $this->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  }
  
  function select(string $select, string $from, string $where = '', array $secure = [], string $orderBy = '', bool $all = true){
    if($where) $where = "WHERE $where";
    if($orderBy) $orderBy = "ORDER BY $orderBy";
    $query = "SELECT $select FROM $from $where $orderBy";
    if (!count($secure)) {
      return $all ? $this->query($query)->fetchAll() : $this->query($query)->fetch();
    } else {
      $prepare = $this->prepare($query);
      $prepare->execute($secure);
      return $all ? $prepare->fetchAll() : $prepare->fetch();
    }
  }
}

try{
  $db = new DB;
}catch(PDOException $e){
  die("<script>throw 'DB: Connection failed: {$e->getMessage()}'</script>");
}

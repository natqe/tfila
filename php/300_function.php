<?php
function title_from($name){
  return str_replace('-', ' ', $name);
}

function link_from($name){
  return str_replace(' ', '-', $name);
}
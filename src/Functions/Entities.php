<?php

namespace App\Functions\Entities;

class GlobalEntityManager {
  private $em;
  private $entity;
  public function __construct($EntityManager, $entity) {
    $this->em = $EntityManager;
    $this->entity = $entity;
  }

  private function prepareGetMethods() {
    $methods = $this->methodsToJson();
    $res = [];
    function isGetMethod($var) {
      return preg_match('/^get/', $var, $matches);
    }

    foreach($methods as $method) {
      isGetMethod($method) == true ? $res[] =  $method : null;
    }
    return $res;
  }

  public function methodsToJson() {
    return get_class_methods($this->entity);
  }

  public function exportData() {
    $entities = $this->em->findAll();
    $methods = $this->prepareGetMethods();
    $res = [];
    foreach ($entities as $entity) {
      $e = [];
      foreach ($methods as $method) {
        $name = strtolower(preg_replace('/get/', '', $method));
        $e["$name"] = $entity->{"$method"}();
      }
      $res[] = $e;
    }
    return $res;
  }
}
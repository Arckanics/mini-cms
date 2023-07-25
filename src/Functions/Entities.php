<?php

namespace App\Functions;
use App\Entity\Articles;
use App\Entity\Pages;
use App\Entity\Settings;
class Entities {
  private $repo;
  private $entity;

  private $entities;

  private $em;
  public function __construct($repo, $entity, $EntityManager) {
    $this->repo = $repo;
    $this->entity = $entity;
    $this->em = $EntityManager;
    $this->entities = $repo->findAll();
  }

  private function prepareGetMethods() {
    $methods = $this->methodsToJson();
    $res = [];
    function isGetMethod($var) {
      return preg_match('/^get|^is/', $var, $matches);
    }

    foreach($methods as $method) {
      isGetMethod($method) == true ? $res[] =  $method : null;
    }
    return $res;
  }

  public function methodsToJson() {
    return get_class_methods($this->entity);
  }

  public function exportData($sort = null) : array {
    $entities = $this->entities;
    $methods = $this->prepareGetMethods();
    $res = [];
    foreach ($entities as $entity) {
      $e = [];
      foreach ($methods as $method) {
        $name = preg_replace('/^get|^is/', '', $method);
        $req = $entity->{"$method"}();
        if (gettype($req) === "object") {
          if (preg_match('/Pages|Articles|Settings/', get_class($req))) {
            $req = $req->getId();
          }
        }
        $name = strtolower($name);
        $e["$name"] = $req;
      }
      $res[] = $e;
    }
    return $res;
  }

  public function exportSortBy($key = null, $desc = false) : array {
    if (!$key) {
      return $this->exportData();
    }

    $sort = (!$desc) ? 'ASC' : 'DESC';
    
    $this->entities = $this->repo->createQueryBuilder('v')
      ->orderBy("v.$key", $sort)
      ->getQuery()
      ->getResult();

    return $this->exportData();
    
  }
}
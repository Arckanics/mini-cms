<?php

namespace App\Controller;

use App\Entity\Settings;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    #[Route('/{route}', name: 'app_index')]
    public function index(Request $req, EntityManagerInterface $em, String $route = ""): Response
    {
      $ajax = $req->headers->get('XmlHttpRequest');
      if (!$ajax || $ajax === false) {
        $settings = $em->getRepository(Settings::class)->find(1);
        
        return $this->render('/base.html.twig', [
          "path" => $route,
          "author" => $settings->getMetaAuthor(),
          "desc" => $settings->getMetaDesc(),
          "title" => $settings->getMetaSiteName(),
          
        ]);
      }
      return $this->json(["0" => "Accueil"]);
    }
}

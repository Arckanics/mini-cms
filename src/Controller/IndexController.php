<?php

namespace App\Controller;

use App\Entity\Articles;
use App\Entity\Pages;
use App\Entity\Settings;
use App\Entity\Social;
use App\Functions\Entities\ExtEntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    #[Route('/request/{target}', name: 'app_request')]
    function requests(Request $req, EntityManagerInterface $em, String $target): Response 
    {
      switch ($target) {
        case "page-list":
          $repo = $em->getRepository(Pages::class);
          $res = $repo->getAllBySortAsc();
          $landing = $em->getRepository(Settings::class)->find(1);
          return new JsonResponse(
            [
              "data" => $res,
              "landing" => $landing->getLandingPage()->getId(),
              "target" => $target
            ]);
        case "page":
          $body = $req->query->all();
          $repo = $em->getRepository(Articles::class);
          $res = $repo->getAllBySortAsc();
          return new JsonResponse(
            [
              "data" => $res
            ]);
        case "socials":
          $repo = $em->getRepository(Social::class);
          $gem = new ExtEntityManager($repo, Social::class, $em);
          return $this->json($gem->exportData(),200);
        default:
          break;
      }

      return new JsonResponse([
        "msg" => "Not Found",
        "target" => $target
      ], 404);
      
    }

    #[Route('/{route}', name: 'app_index')]
    public function index(Request $req, EntityManagerInterface $em, String $route = ""): Response
    {
      
        $settings = $em->getRepository(Settings::class)->find(1);
        
        return $this->render('/base.html.twig', [
          "path" => $route,
          "author" => $settings->getMetaAuthor(),
          "desc" => $settings->getMetaDesc(),
          "title" => $settings->getMetaSiteName(),
          "logo" => $settings->getLogo()
        ]);
    }
    
}

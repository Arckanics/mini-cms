<?php

namespace App\Controller;

use App\Entity\Settings;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;


#[IsGranted('ROLE_ADMIN')]
#[Route('/mini-admin', name: 'app_admin_base')]

class AdminController extends AbstractController
{
    

    private function isXmlHttpReq(Request $req): bool {
      return $req->headers->get('XMLHttpRequest') == 'true';
    }

    #[Route('/', name: 'app_admin')]
    public function index(Request $req, EntityManagerInterface $em): Response
    {

      if ($this->isXmlHttpReq($req)) {
        $Settings = $em->getRepository(Settings::class);
        $res = $Settings->find(1);
        return $this->json(['url' => '/', 'data' => [
          'Author' => $res->getMetaAuthor(),
          'Description' => $res->getMetaDesc(),
          'SiteName' => $res->getMetaSiteName(),
          'Landing' => $res->getLandingPage()
        ] ], 200);
      }

      return $this->render('admin/index.html.twig', [
        'url' => 'Settings',
      ]);
    }

    #[Route('/pages', name: 'app_admin_pages')]
    public function pages(Request $req): Response
    {
      return $this->render('admin/index.html.twig', [
        'url' => 'Pages',
      ]);
    }
    #[Route('/articles', name: 'app_admin_articles')]
    public function articles(Request $req): Response
    {
      return $this->render('admin/index.html.twig', [
        'url' => 'Articles',
      ]);
    }
}

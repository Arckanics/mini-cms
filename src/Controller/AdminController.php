<?php

namespace App\Controller;

use App\Entity\Settings;
use App\Entity\Pages;
use App\Entity\Articles;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use App\Functions\Entities\ExtEntityManager;


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
        $res = $em->getRepository(Settings::class)->find(1);
        $Pages = $em->getRepository(Pages::class);
        $gem = new ExtEntityManager($Pages, Pages::class);
        return $this->json([
          'Author' => $res->getMetaAuthor(),
          'Description' => $res->getMetaDesc(),
          'SiteName' => $res->getMetaSiteName(),
          'Landing' => $res->getLandingPage()->getId(),
          'Pages' => $gem->exportData()
        ], 200);
      }

      return $this->render('admin/index.html.twig', [
        'url' => 'Settings',
      ]);
    }

    #[Route('/pages', name: 'app_admin_pages')]
    public function pages(Request $req, EntityManagerInterface $em): Response
    {
      if ($this->isXmlHttpReq($req)) {
        $pages = $em->getRepository(Pages::class);
        $gem = new ExtEntityManager($pages, Pages::class);
        return $this->json($gem->exportData(), 200);
      }
      return $this->render('admin/index.html.twig', [
        'url' => 'Pages',
      ]);
    }

    #[Route('/articles', name: 'app_admin_articles')]
    public function articles(Request $req, EntityManagerInterface $em): Response
    {
      if ($this->isXmlHttpReq($req)) {
        $article = $em->getRepository(Articles::class);
        $gem = new ExtEntityManager($article, Articles::class);
        return $this->json($gem->exportData(), 200);
      }
      return $this->render('admin/index.html.twig', [
        'url' => 'Articles',
      ]);
    }

    #[Route('/refresh', name: 'app_admin_refresh')]
    public function refresh(Request $req): Response
    {
      return $this->json(['status' => Response::HTTP_ACCEPTED]);
    }

}

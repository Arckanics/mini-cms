<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;


#[Route('/mini-admin', name: 'app_admin_base')]
class AdminController extends AbstractController
{
    #[IsGranted('ROLE_ADMIN')]
    #[Route('/', name: 'app_admin')]
    public function index(): Response
    {
      return $this->render('admin/index.html.twig', [
        'url' => 'Settings',
      ]);
    }

    #[Route('/pages', name: 'app_admin_pages')]
    public function pages(): Response
    {
      return $this->render('admin/index.html.twig', [
        'url' => 'Pages',
      ]);
    }
    #[Route('/articles', name: 'app_admin_articles')]
    public function articles(): Response
    {
      return $this->render('admin/index.html.twig', [
        'url' => 'Articles',
      ]);
    }
}

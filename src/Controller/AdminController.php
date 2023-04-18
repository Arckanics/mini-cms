<?php

namespace App\Controller;

use App\Entity\Settings;
use App\Entity\Pages;
use App\Entity\Articles;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use App\Functions\Entities\ExtEntityManager;
use DateTime;
use Symfony\Component\HttpFoundation\JsonResponse;

#[IsGranted('ROLE_ADMIN')]
#[Route('/mini-admin', name: 'app_admin_base')]

class AdminController extends AbstractController
{
    

    private function refreshSession(Session $session) {
      $ttl = 7200;
      if (time() - $session->getMetadataBag()->getLastUsed() > $ttl) {
        echo "expire";
        $session->invalidate(0);
        return false;
      } 
      $session->migrate(false, $ttl);
      return true;
    }

    private function formatDate(string $date_str): DateTime {
      return DateTime::createFromFormat('Y-m-d H:i:s', $date_str);
    }

    // Route pour le landing sur settings

    #[Route('/', name: 'app_admin')]
    public function index(Session $session): Response | JsonResponse
    {
      if (!$this->refreshSession($session)) {
        return $this->redirectToRoute('app_logout');
      }
      return $this->render('admin/index.html.twig', [
        'url' => 'Settings',
      ]);
    }

    // Route pour le landing sur pages

    #[Route('/pages', name: 'app_admin_pages')]
    public function pages(Session $session): Response | JsonResponse
    {
      if (!$this->refreshSession($session)) {
        return $this->redirectToRoute('app_logout');
      }
      return $this->render('admin/index.html.twig', [
        'url' => 'Pages',
      ]);
    }

    // Route pour le landing sur articles

    #[Route('/articles', name: 'app_admin_articles')]
    public function articles(Session $session): Response | JsonResponse
    {
      if (!$this->refreshSession($session)) {
        return $this->redirectToRoute('app_logout');
      }
      return $this->render('admin/index.html.twig', [
        'url' => 'Articles',
      ]);
    }

    // Route pour gérer toutes les requêtes de l'ui admin

    #[Route('/request', name: 'app_admin_request')]
    public function request(Request $req, EntityManagerInterface $em, Session $session): Response | JsonResponse
    {
      if (!$this->refreshSession($session)) {
        return new JsonResponse(['redirect' => '/logout'], 302);
      }
      if ($req->getMethod() === "GET") {
        $body = $req->query->all();
        $default = ['page' => 'settings'];
        if (!isset($body['page'])) { $body = $default; }
        switch ($body['page']) {
          case 'pages':
            $pages = $em->getRepository(Pages::class);
            $gem = new ExtEntityManager($pages, Pages::class, $em);
            return new JsonResponse($gem->exportData(), 200);
          case 'articles':
            $article = $em->getRepository(Articles::class);
            $gem = new ExtEntityManager($article, Articles::class, $em);
            return new JsonResponse($gem->exportData(), 200);
          case 'settings':
          default:
            $res = $em->getRepository(Settings::class)->find(1);
            $Pages = $em->getRepository(Pages::class);
            $gem = new ExtEntityManager($Pages, Pages::class, $em);
            return new JsonResponse([
              'Author' => $res->getMetaAuthor(),
              'Description' => $res->getMetaDesc(),
              'SiteName' => $res->getMetaSiteName(),
              'Landing' => $res->getLandingPage()->getId(),
              'Pages' => $gem->exportData()
            ], 200);
        }
      }
      if ($req->getMethod() === "PUT") {
        $body = json_decode($req->getContent(), true);
        $data = $body["data"];
        $pages = $em->getRepository(Pages::class);
        $articles = $em->getRepository(Articles::class);
        switch ($body['where']) {
          case 'pages':
            $gem = new ExtEntityManager($pages, Pages::class, $em);
            return new JsonResponse($gem->exportData(), 200);
          case 'articles':
            $article = $articles->find($data["id"]);
            $article->setContent($data["content"]);
            $article->setIsDynamic($data["isdynamic"]);
            $article->setPage($pages->find($data["page"]));
            $article->setPublishBegin($this->formatDate($data["publishbegin"]));
            $article->setPublishEnd($this->formatDate($data["publishend"]));
            $article->setPublished($data["published"]);
            $article->setSort($data["sort"]);
            $article->setTitle($data["title"]);
            $em->flush();
            $gem = new ExtEntityManager($articles, Articles::class, $em);
            return new JsonResponse($gem->exportData(), 200);
          case 'settings':
          default:
            $res = $em->getRepository(Settings::class)->find(1);
            $Pages = $em->getRepository(Pages::class);
            $gem = new ExtEntityManager($Pages, Pages::class, $em);
            return new JsonResponse([
              'Author' => $res->getMetaAuthor(),
              'Description' => $res->getMetaDesc(),
              'SiteName' => $res->getMetaSiteName(),
              'Landing' => $res->getLandingPage()->getId(),
              'Pages' => $gem->exportData()
            ], 200);
        }
      }
      return new JsonResponse(['error', 'Not Found'], 404);
    }

    #[Route('/fileupload', name: 'app_admin_fileupload')]
    public function fileUpload(Request $req): Response|JsonResponse {
      $path = '/uploads/img';
      $uploaded = $req->files->get("image");
      $destination = $this->getParameter('kernel.project_dir').'\/public\/'.$path;
      $name = "[".uniqid()."]-".$uploaded->getClientOriginalName();
      $uploaded->move($destination, $name);
      return $this->json([
        "name" => $name,
        "originalName" => $uploaded->getClientOriginalName(),
        "path" => $path
      ],200);
    }

    #[Route('/imgbrowser', name: 'app_admin_imgbrowser')]
    public function imgBrowser(Request $req): Response|JsonResponse {
      $path = $this->getParameter('kernel.project_dir').'/public/uploads/img';
      $fileList = [];
      if ($handle = opendir($path)) {
        while (false !== ($entry = readdir($handle))) {
            if ($entry != "." && $entry != "..") {
                $fileList[] = $entry;
            }
        }
        closedir($handle);
      }

      return $this->json([
        "path" => '/uploads/img',
        "files" => $fileList
      ], 200);
      
    }

}

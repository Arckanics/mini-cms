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
use DateTimeImmutable;
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
            $page = $pages->find($data['id']);
            $page->setUrl($data['url']);
            $page->setTitle($data['title']);
            $em->flush();
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
            $settings = $em->getRepository(Settings::class)->find(1);
            $settings->setLandingPage($pages->find($data["Landing"]));
            $settings->setMetaAuthor($data["Author"]);
            $settings->setMetaDesc($data["Description"]);
            $settings->setMetaSiteName($data["SiteName"]);
            $em->flush();
            $gem = new ExtEntityManager($pages, Pages::class, $em);
            return new JsonResponse([
              'Author' => $settings->getMetaAuthor(),
              'Description' => $settings->getMetaDesc(),
              'SiteName' => $settings->getMetaSiteName(),
              'Landing' => $settings->getLandingPage()->getId(),
              'Pages' => $gem->exportData()
            ], 200);
        }
      }
      if ($req->getMethod() === "POST") {
        $body = json_decode($req->getContent(), true);
        $data = $body["data"];
        $pages = $em->getRepository(Pages::class);
        $articles = $em->getRepository(Articles::class);
        switch ($body['where']) {
          case 'pages':
            if (strlen($data["title"]) == 0 || !isset($data["title"])) {
              return new JsonResponse(["error" => "Titre manquant!"], 428);
            }
            $page = new Pages();
            $page->setTitle($data["title"]);
            $page->setUrl($data["title"]);
            $page->setSort(count($pages->findAll()));
            $em->persist($page);
            $em->flush();
            $gem = new ExtEntityManager($pages, Pages::class, $em);
            return new JsonResponse($gem->exportData(), 200);
          case 'articles':
            $createdAt = new DateTimeImmutable("now");
            $article = new Articles();
            $article->setCreatedAt($createdAt);
            $article->setContent($data["content"]);
            $article->setIsDynamic($data["isdynamic"]);
            $article->setPage($pages->find($data["page"]));
            $article->setPublishBegin($this->formatDate($data["publishbegin"]));
            $article->setPublishEnd($this->formatDate($data["publishend"]));
            $article->setPublished($data["published"]);
            $article->setSort($data["sort"]);
            $article->setTitle($data["title"]);
            $em->persist($article);
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
      if ($req->getMethod() === "DELETE") {
        $body = $req->query->all();
        $data = json_decode($req->getContent());
        $pages = $em->getRepository(Pages::class);
        $articles = $em->getRepository(Articles::class);
        
        switch ($data->where) {
          case 'pages':
            $page = $pages->find($data->data);
            $name = $page->getTitle();
            $settings = $page->getSettings();
            $childrens = $page->getArticles()->count();
            if ($childrens > 0) {
              $count = $childrens > 1 ? "articles attachés " : "article attaché ";
              return new JsonResponse(['error' => $count.'à cette page "'.$name.'"!'], 428);
            }
            if (isset($settings)) {
              return new JsonResponse(['error' => 'Impossible de supprimer la page d\'accueil!'], 428);
            }
            $em->remove($page);
            $em->flush();
            $gem = new ExtEntityManager($pages, Pages::class, $em);
            return new JsonResponse($gem->exportData(), 200);
          case 'articles':
            $article = $articles->find($data->data);
            $em->remove($article);
            $em->flush();
            $gem = new ExtEntityManager($articles, Articles::class, $em);
            return new JsonResponse($gem->exportData(), 200);
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

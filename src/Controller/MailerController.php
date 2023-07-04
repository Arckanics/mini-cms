<?php

namespace App\Controller;

use App\Entity\Admin;
use App\Functions\Entities\ExtEntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/mini-admin', name: 'app_admin_base')]
class MailerController extends AbstractController
{
  #[Route('/reset-pass', name: 'app_admin_reset_pass')]
  public function resetPass(): Response | JsonResponse
  {
    return $this->render("/admin/index.html.twig", [
      "url" => "Reset Pass"
    ]);
  }

  #[Route('/check-mail', name: 'app_admin_check_mail')]
  public function checkMail(MailerInterface $mailer, Request $req, EntityManagerInterface $em): Response | JsonResponse
  {


    if (!$req->isXmlHttpRequest()) {
      return $this->redirectToRoute('app_admin_baseapp_admin_reset_pass');
    }

    $data = json_decode($req->getContent());


    // $mail = new Email(null,null);
    // $mail
    //   ->from("no-reply@mini-cms.fr")
    //   ->to("alexis.fritsch68@gmail.com")
    //   ->subject("Symfony Mailer")
    //   ->text("Cool")
    //   ->html($this->renderView('/email.html.twig'))
    // ;

    // $mailer->send($mail);

    $repo = $em->getRepository(Admin::class);

    $user = $repo->findOneBy(["email" => $data->email]);

    if ($user) {
      return $this->json([
        "msg" => "email envoyé !",
        "type" => "success"
      ], 202);
    }

    return $this->json([
      "msg" => "aucuns utilisateurs avec le mail: \"$data->email\"",
      "type" => "danger"
    ], 404);
  }
}

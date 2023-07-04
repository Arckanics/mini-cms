<?php

namespace App\Controller;
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
  public function resetPass() : Response | JsonResponse {
    return $this->render("/admin/index.html.twig", [
      "url" => "Reset Pass"
    ]);
  }

  #[Route('/check-mail', name: 'app_admin_check_mail')]
  public function checkMail(MailerInterface $mailer, Request $req) : Response | JsonResponse {


    if (!$req->isXmlHttpRequest()) {
      return $this->redirectToRoute('app_admin_baseapp_admin_reset_pass');
    }

    // $mail = new Email(null,null);
    // $mail
    //   ->from("no-reply@mini-cms.fr")
    //   ->to("alexis.fritsch68@gmail.com")
    //   ->subject("Symfony Mailer")
    //   ->text("Cool")
    //   ->html($this->renderView('/email.html.twig'))
    // ;

    // $mailer->send($mail);


    return $this->json([
      "isXHR" => 'true'
    ]);
  }

  
}
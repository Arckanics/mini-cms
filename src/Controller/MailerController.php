<?php

namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/mini-admin', name: 'app_admin_base')]
class MailerController extends AbstractController
{
  #[Route('/reset-pass', name: 'app_admin_reset_pass')]
  public function resetPass() : Response | JsonResponse {
    return $this->json([]);
  }

  #[Route('/check-mail', name: 'app_admin_check_mail')]
  public function checkMail(MailerInterface $mailer) : Response | JsonResponse {
    $mail = new Email(null,null);
    $mail
      ->from("no-reply@mini-cms.fr")
      ->to("alexis.fritsch68@gmail.com")
      ->subject("Symfony Mailer")
      ->text("Cool")
      ->html("<p>Symfony mailer</p>")
    ;

    $mailer->send($mail);
    return $this->json([]);
  }

  
}
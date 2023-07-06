<?php

namespace App\Controller;

use App\Entity\Admin;
use App\Entity\ResetToken;
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
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;

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
  public function checkMail(MailerInterface $mailer, Request $req, EntityManagerInterface $em, TokenGeneratorInterface $token): Response | JsonResponse
  {


    if (!$req->isXmlHttpRequest()) {
      return $this->redirectToRoute('app_admin_baseapp_admin_reset_pass');
    }

    $data = json_decode($req->getContent());



    $repo = $em->getRepository(Admin::class);
    $user = $repo->findOneBy(["email" => $data->email]);

    if ($user) {


      $key = urlencode($token->generateToken());

      $reset_token = new ResetToken();
      $reset_token->setUser($user);
      $reset_token->setToken($key);
      $em->persist($reset_token);
      $em->flush();

      $email = $user->getEmail();
      $host = $req->getHttpHost();
      $token = $reset_token->getToken();
      $httpState = $req->isSecure() ? "https" : "http";
      

      $url = "$httpState://$host/mini-admin/new-password?token=$token";

      $mail = new Email(null,null);
      $mail
        ->from("no-reply@mini-cms.fr")
        ->to($email)
        ->subject("Symfony Mailer")
        ->text($this->renderView('/emails/txt/reset.txt'))
        ->html($this->renderView('/emails/html/reset.html.twig', ["reset" => $url]))
      ;

      $mailer->send($mail);


      return $this->json([
        "msg" => "email envoyé ! \nvérifiez votre boîte mail ()",
        "type" => "success",
      ], 202);
    }

    return $this->json([
      "msg" => "aucuns utilisateurs avec le mail: \"$data->email\"",
      "type" => "danger"
    ], 404);
  }
}

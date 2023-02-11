<?php

namespace App\Controller;

use ErrorException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class AdminSecurityController extends AbstractController
{
    #[Route(path: '/mini-admin/login', name: 'app_login')]
    public function login(AuthenticationUtils $authenticationUtils, Request $request): Response|JsonResponse
    {
      
          if ($this->getUser()) {
            return $this->redirectToRoute('app_admin_baseapp_admin');
          }
          $error = $authenticationUtils->getLastAuthenticationError();
          
          if ($error) {
            $error = $error->getMessage();
          }

          $lastUsername = $authenticationUtils->getLastUsername();
  
          return $this->render('admin/index.html.twig', [
            'url' => 'Login',
            'last_username' => $lastUsername,
            'error'         => $error
          ]);
    }

    #[Route(path: '/mini-admin/logout', name: 'app_logout')]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}

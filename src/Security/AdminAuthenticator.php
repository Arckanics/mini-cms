<?php

namespace App\Security;

use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Http\Authenticator\AbstractLoginFormAuthenticator;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\CsrfTokenBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Credentials\PasswordCredentials;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;
use Symfony\Component\Security\Http\Util\TargetPathTrait;

class AdminAuthenticator extends AbstractLoginFormAuthenticator
{
  use TargetPathTrait;

  public const LOGIN_ROUTE = 'app_login';

  public function __construct(private UrlGeneratorInterface $urlGenerator)
  {
    $this->urlGenerator = $urlGenerator;
  }

  public function authenticate(Request $request): Passport
  {
    $XMLRequest = json_decode($request->getContent());
    if ($XMLRequest) {
      $email = $XMLRequest->email ? $XMLRequest->email : '';
      $password = $XMLRequest->password ? $XMLRequest->password : '';
      $token = $XMLRequest->_token ? $XMLRequest->_token : '';
    } else {
      $email = $request->request->get('email', '');
      $password = $request->request->get('password', '');
      $token = $request->request->get('_token');
    }
    $token = new CsrfTokenBadge('authenticate', $token);

    $request->getSession()->set(Security::LAST_USERNAME, $email);
    
    return new Passport(
      new UserBadge($email),
      new PasswordCredentials($password),
      [
        $token,
      ]
    );
  }

  public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
  {
    $XMLRequest = json_decode($request->getContent());
    if (!$XMLRequest) {
      if ($targetPath = $this->getTargetPath($request->getSession(), $firewallName)) {
        $response = new RedirectResponse($targetPath);
        return $response;
      }
      $response = new RedirectResponse($this->urlGenerator->generate('app_admin_baseapp_admin'));
      return $response;
    }

    function fixURL ($url): string {
      $filterURL = "/\/[^\/]+$|\/$/";
      preg_match($filterURL, $url, $matches);
      return $matches[0];
    }


    $response = [ 'url' => fixURL($this->urlGenerator->generate('app_admin_baseapp_admin')) ];
    if ($targetPath = $this->getTargetPath($request->getSession(), $firewallName)) {
      $response = [ 'url' => fixURL($targetPath) ];
    }
    // For example:
    $send = new JsonResponse($response);
    return $send;

    
    // throw new \Exception('TODO: provide a valid redirect inside '.__FILE__);
  }

  protected function getLoginUrl(Request $request): string
  {
    return $this->urlGenerator->generate(self::LOGIN_ROUTE);
  }
}

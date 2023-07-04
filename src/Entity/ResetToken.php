<?php

namespace App\Entity;

use App\Repository\ResetTokenRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ResetTokenRepository::class)]
class ResetToken
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $Token = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?Admin $User = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getToken(): ?string
    {
        return $this->Token;
    }

    public function setToken(string $Token): self
    {
        $this->Token = $Token;

        return $this;
    }

    public function getUser(): ?Admin
    {
        return $this->User;
    }

    public function setUser(?Admin $User): self
    {
        $this->User = $User;

        return $this;
    }
}

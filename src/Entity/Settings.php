<?php

namespace App\Entity;

use App\Repository\SettingsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SettingsRepository::class)]
class Settings
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $MetaAuthor = null;

    #[ORM\Column(length: 255)]
    private ?string $MetaDesc = null;

    #[ORM\Column(length: 255)]
    private ?string $MetaSiteName = null;

    #[ORM\OneToOne(inversedBy: 'settings', cascade: ['persist', 'remove'])]
    private ?Pages $LandingPage = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMetaAuthor(): ?string
    {
        return $this->MetaAuthor;
    }

    public function setMetaAuthor(string $MetaAuthor): self
    {
        $this->MetaAuthor = $MetaAuthor;

        return $this;
    }

    public function getMetaDesc(): ?string
    {
        return $this->MetaDesc;
    }

    public function setMetaDesc(string $MetaDesc): self
    {
        $this->MetaDesc = $MetaDesc;

        return $this;
    }

    public function getMetaSiteName(): ?string
    {
        return $this->MetaSiteName;
    }

    public function setMetaSiteName(string $MetaSiteName): self
    {
        $this->MetaSiteName = $MetaSiteName;

        return $this;
    }

    public function getLandingPage(): ?Pages
    {
        return $this->LandingPage;
    }

    public function setLandingPage(?Pages $LandingPage): self
    {
        $this->LandingPage = $LandingPage;

        return $this;
    }
}

<?php

namespace App\Entity;

use App\Repository\ArticlesRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ArticlesRepository::class)]
class Articles
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $Title = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $Content = null;

    #[ORM\ManyToOne(inversedBy: 'articles')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Pages $Page = null;

    #[ORM\Column]
    private ?bool $Published = false;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $PublishBegin = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $PublishEnd = null;

    #[ORM\Column]
    private ?bool $isDynamic = false;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->Title;
    }

    public function setTitle(string $Title): self
    {
        $this->Title = $Title;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->Content;
    }

    public function setContent(string $Content): self
    {
        $this->Content = $Content;

        return $this;
    }

    public function getPage(): ?Pages
    {
        return $this->Page;
    }

    public function setPage(?Pages $Page): self
    {
        $this->Page = $Page;

        return $this;
    }

    public function isPublished(): ?bool
    {
        return $this->Published;
    }

    public function setPublished(bool $Published): self
    {
        $this->Published = $Published;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getPublishBegin(): ?\DateTimeInterface
    {
        return $this->PublishBegin;
    }

    public function setPublishBegin(?\DateTimeInterface $PublishBegin): self
    {
        $this->PublishBegin = $PublishBegin;

        return $this;
    }

    public function getPublishEnd(): ?\DateTimeInterface
    {
        return $this->PublishEnd;
    }

    public function setPublishEnd(?\DateTimeInterface $PublishEnd): self
    {
        $this->PublishEnd = $PublishEnd;

        return $this;
    }

    public function isIsDynamic(): ?bool
    {
        return $this->isDynamic;
    }

    public function setIsDynamic(bool $isDynamic): self
    {
        $this->isDynamic = $isDynamic;

        return $this;
    }
}

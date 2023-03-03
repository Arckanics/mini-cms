<?php

namespace App\Entity;

use App\Repository\PagesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PagesRepository::class)]
class Pages
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $Title = null;

    #[ORM\OneToMany(mappedBy: 'Page', targetEntity: Articles::class)]
    private Collection $articles;

    #[ORM\OneToOne(mappedBy: 'LandingPage', cascade: ['persist', 'remove'])]
    private ?Settings $settings = null;

    #[ORM\Column]
    private ?int $sort = null;

    public function __construct()
    {
        $this->articles = new ArrayCollection();
    }

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

    /**
     * @return Collection<int, Articles>
     */
    public function getArticles(): Collection
    {
        return $this->articles;
    }

    public function addArticle(Articles $article): self
    {
        if (!$this->articles->contains($article)) {
            $this->articles->add($article);
            $article->setPage($this);
        }

        return $this;
    }

    public function removeArticle(Articles $article): self
    {
        if ($this->articles->removeElement($article)) {
            // set the owning side to null (unless already changed)
            if ($article->getPage() === $this) {
                $article->setPage(null);
            }
        }

        return $this;
    }

    public function getSettings(): ?Settings
    {
        return $this->settings;
    }

    public function setSettings(?Settings $settings): self
    {
        // unset the owning side of the relation if necessary
        if ($settings === null && $this->settings !== null) {
            $this->settings->setLandingPage(null);
        }

        // set the owning side of the relation if necessary
        if ($settings !== null && $settings->getLandingPage() !== $this) {
            $settings->setLandingPage($this);
        }

        $this->settings = $settings;

        return $this;
    }

    public function getSort(): ?int
    {
        return $this->sort;
    }

    public function setSort(int $sort): self
    {
        $this->sort = $sort;

        return $this;
    }

}

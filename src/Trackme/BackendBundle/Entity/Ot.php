<?php

/*
 * This file is part of the TrackmeBackendBundle package.
 *
 * (c) Gonzalo Moreno <goncab380@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Trackme\BackendBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * Ot
 *
 * @ORM\Table(name="ot")
 * @ORM\Entity(repositoryClass="Trackme\BackendBundle\Entity\OtRepository")
 */
class Ot
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var \User
     *
     * @ORM\ManyToOne(targetEntity="User", inversedBy="ot")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     * })
     */
    private $user;

    /**
     * @var float
     *
     * @ORM\Column(name="total_km", type="float", nullable=true)
     */
    private $totalKm;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_start", type="datetime")
     */
    private $dateStart;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_end", type="datetime", nullable=true)
     */
    private $dateEnd;

    /**
     * @var \DateTime
     * @Gedmo\Timestampable(on="create")
     * @ORM\Column(name="created_at", type="datetime", nullable=true)
     */
    private $created_at;

    /**
     * @var \DateTime
     * @Gedmo\Timestampable(on="update")
     * @ORM\Column(name="updated_at", type="datetime", nullable=true)
     */
    private $updated_at;

    /**
     * @var string
     * @Gedmo\Blameable(on="create")
     * @ORM\Column(name="created_by", type="string", length=255, nullable=true)
     */
    private $created_by;

    /**
     * @var string
     * @Gedmo\Blameable(on="update")
     * @ORM\Column(name="updated_by", type="string", length=255, nullable=true)
     */
    private $updated_by;

    /**
     * @var \Doctrine\Common\Collections\Collection $coordinates
     * @ORM\OneToMany(targetEntity="Coordinate", mappedBy="ot", cascade={"persist", "remove"})
     */
    private $coordinates;

    public function __toString()
    {
        return sprintf("%d - %s (%s)", $this->getId(), $this->getUser(), $this->getDateStart()->format('Y-m-d H:i:s'));
    }

    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set totalKm
     *
     * @param  float $totalKm
     * @return Ot
     */
    public function setTotalKm($totalKm)
    {
        $this->totalKm = $totalKm;

        return $this;
    }

    /**
     * Get totalKm
     *
     * @return float
     */
    public function getTotalKm()
    {
        return $this->totalKm;
    }

    /**
     * Set dateStart
     *
     * @param  \DateTime $dateStart
     * @return Ot
     */
    public function setDateStart($dateStart)
    {
        $this->dateStart = $dateStart;

        return $this;
    }

    /**
     * Get dateStart
     *
     * @return \DateTime
     */
    public function getDateStart()
    {
        return $this->dateStart;
    }

    /**
     * Set dateEnd
     *
     * @param  \DateTime $dateEnd
     * @return Ot
     */
    public function setDateEnd($dateEnd)
    {
        $this->dateEnd = $dateEnd;

        return $this;
    }

    /**
     * Get dateEnd
     *
     * @return \DateTime
     */
    public function getDateEnd()
    {
        return $this->dateEnd;
    }

    /**
     * Set created_at
     *
     * @param  \DateTime $createdAt
     * @return Ot
     */
    public function setCreatedAt($createdAt)
    {
        $this->created_at = $createdAt;

        return $this;
    }

    /**
     * Get created_at
     *
     * @return \DateTime
     */
    public function getCreatedAt()
    {
        return $this->created_at;
    }

    /**
     * Set updated_at
     *
     * @param  \DateTime $updatedAt
     * @return Ot
     */
    public function setUpdatedAt($updatedAt)
    {
        $this->updated_at = $updatedAt;

        return $this;
    }

    /**
     * Get updated_at
     *
     * @return \DateTime
     */
    public function getUpdatedAt()
    {
        return $this->updated_at;
    }

    /**
     * Set created_by
     *
     * @param  string $createdBy
     * @return Ot
     */
    public function setCreatedBy($createdBy)
    {
        $this->created_by = $createdBy;

        return $this;
    }

    /**
     * Get created_by
     *
     * @return string
     */
    public function getCreatedBy()
    {
        return $this->created_by;
    }

    /**
     * Set updated_by
     *
     * @param  string $updatedBy
     * @return Ot
     */
    public function setUpdatedBy($updatedBy)
    {
        $this->updated_by = $updatedBy;

        return $this;
    }

    /**
     * Get updated_by
     *
     * @return string
     */
    public function getUpdatedBy()
    {
        return $this->updated_by;
    }

    /**
     * Set user
     *
     * @param  \Trackme\BackendBundle\Entity\User $user
     * @return Ot
     */
    public function setUser(\Trackme\BackendBundle\Entity\User $user = null)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Get user
     *
     * @return \Trackme\BackendBundle\Entity\User
     */
    public function getUser()
    {
        return $this->user;
    }

    public function isActive()
    {
        if ($this->getDateEnd() == null) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->coordinates = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Add coordinates
     *
     * @param  \Trackme\BackendBundle\Entity\Coordinate $coordinates
     * @return Ot
     */
    public function addCoordinate(\Trackme\BackendBundle\Entity\Coordinate $coordinates)
    {
        $this->coordinates[] = $coordinates;

        return $this;
    }

    /**
     * Remove coordinates
     *
     * @param \Trackme\BackendBundle\Entity\Coordinate $coordinates
     */
    public function removeCoordinate(\Trackme\BackendBundle\Entity\Coordinate $coordinates)
    {
        $this->coordinates->removeElement($coordinates);
    }

    /**
     * Get coordinates
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getCoordinates()
    {
        return $this->coordinates;
    }
}
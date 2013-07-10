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
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * Vehicle
 *
 * @ORM\Table(name="vehicle")
 * @ORM\Entity
 * @UniqueEntity("code")
 */
class Vehicle
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="manufacturer", type="string", length=255, nullable=false)
     */
    private $manufacturer;

    /**
     * @var string
     *
     * @ORM\Column(name="model", type="string", length=255, nullable=false)
     */
    private $model;

    /**
     * @var string
     *
     * @ORM\Column(name="code", type="string", length=255, nullable=true, unique=true)
     */
    private $code;

    /**
     * @var string
     *
     * @ORM\Column(name="type", type="string", length=255, nullable=true)
     */
    private $type;

    /**
     * @var string
     *
     * @ORM\Column(name="fuel", type="string", length=255, nullable=true)
     */
    private $fuel;

    /**
     * @var float
     *
     * @ORM\Column(name="kilometer_per_liter", type="decimal", nullable=true)
     */
    private $kilometerPerLiter;

    /**
     * @var \Business
     *
     * @ORM\ManyToOne(targetEntity="Business")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="business_id", referencedColumnName="id")
     * })
     */
    private $business;

    /**
     * @var \Doctrine\Common\Collections\Collection $issues
     * @ORM\OneToMany(targetEntity="VehicleMantention", mappedBy="vehicle", cascade={"persist", "remove"})
     */
    private $issues;

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
     * Constructor
     */
    public function __construct()
    {
        $this->issues = new \Doctrine\Common\Collections\ArrayCollection();
    }

    public function __toString()
    {
        return sprintf("%s - %s %s", $this->getCode(), $this->getManufacturer(), $this->getModel());
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
     * Set manufacturer
     *
     * @param  string  $manufacturer
     * @return Vehicle
     */
    public function setManufacturer($manufacturer)
    {
        $this->manufacturer = $manufacturer;

        return $this;
    }

    /**
     * Get manufacturer
     *
     * @return string
     */
    public function getManufacturer()
    {
        return $this->manufacturer;
    }

    /**
     * Set model
     *
     * @param  string  $model
     * @return Vehicle
     */
    public function setModel($model)
    {
        $this->model = $model;

        return $this;
    }

    /**
     * Get model
     *
     * @return string
     */
    public function getModel()
    {
        return $this->model;
    }

    /**
     * Set code
     *
     * @param  string  $code
     * @return Vehicle
     */
    public function setCode($code)
    {
        $this->code = $code;

        return $this;
    }

    /**
     * Get code
     *
     * @return string
     */
    public function getCode()
    {
        return $this->code;
    }

    /**
     * Set type
     *
     * @param  string  $type
     * @return Vehicle
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * Get type
     *
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Set fuel
     *
     * @param  string  $fuel
     * @return Vehicle
     */
    public function setFuel($fuel)
    {
        $this->fuel = $fuel;

        return $this;
    }

    /**
     * Get fuel
     *
     * @return string
     */
    public function getFuel()
    {
        return $this->fuel;
    }

    /**
     * Set kilometerPerLiter
     *
     * @param  float   $kilometerPerLiter
     * @return Vehicle
     */
    public function setKilometerPerLiter($kilometerPerLiter)
    {
        $this->kilometerPerLiter = $kilometerPerLiter;

        return $this;
    }

    /**
     * Get kilometerPerLiter
     *
     * @return float
     */
    public function getKilometerPerLiter()
    {
        return $this->kilometerPerLiter;
    }

    /**
     * Add issues
     *
     * @param  \Trackme\BackendBundle\Entity\VehicleMantention $issues
     * @return Vehicle
     */
    public function addIssue(\Trackme\BackendBundle\Entity\VehicleMantention $issues)
    {
        $this->issues[] = $issues;
        $issues->setVehicle($this);

        return $this;
    }

    /**
     * Remove issues
     *
     * @param \Trackme\BackendBundle\Entity\VehicleMantention $issues
     */
    public function removeIssue(\Trackme\BackendBundle\Entity\VehicleMantention $issues)
    {
        $issues->setVehicle(null);
        $this->issues->removeElement($issues);
    }

    /**
     * Get issues
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getIssues()
    {
        return $this->issues;
    }

    /**
     * Set business
     *
     * @param  \Trackme\BackendBundle\Entity\Business $business
     * @return Vehicle
     */
    public function setBusiness(\Trackme\BackendBundle\Entity\Business $business = null)
    {
        $this->business = $business;

        return $this;
    }

    /**
     * Get business
     *
     * @return \Trackme\BackendBundle\Entity\Business
     */
    public function getBusiness()
    {
        return $this->business;
    }

    /**
     * Set created_at
     *
     * @param  \DateTime $createdAt
     * @return Vehicle
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
     * @return Vehicle
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
     * @param  string  $createdBy
     * @return Vehicle
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
     * @param  string  $updatedBy
     * @return Vehicle
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
}

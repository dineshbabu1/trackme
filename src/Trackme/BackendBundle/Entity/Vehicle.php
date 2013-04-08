<?php

namespace Trackme\BackendBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Vehicle
 */
class Vehicle
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var string
     */
    private $manufacturer;

    /**
     * @var string
     */
    private $model;

    /**
     * @var string
     */
    private $type;

    /**
     * @var float
     */
    private $kilometerPerLiter;


    public function __toString() {
        return $this->getManufacturer()." - ".$this->getModel();
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
     * @param string $manufacturer
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
     * @param string $model
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
     * Set type
     *
     * @param string $type
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
     * Set kilometerPerLiter
     *
     * @param float $kilometerPerLiter
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
     * @var \Trackme\BackendBundle\Entity\Business
     */
    private $business;


    /**
     * Set business
     *
     * @param \Trackme\BackendBundle\Entity\Business $business
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
     * @var string
     */
    private $code;


    /**
     * Set code
     *
     * @param string $code
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
     * @var \Doctrine\Common\Collections\Collection
     */
    private $issues;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->issues = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Add issues
     *
     * @param \Trackme\BackendBundle\Entity\VehicleMantention $issues
     * @return Vehicle
     */
    public function addIssue(\Trackme\BackendBundle\Entity\VehicleMantention $issues)
    {
        $this->issues[] = $issues;

        return $this;
    }

    /**
     * Remove issues
     *
     * @param \Trackme\BackendBundle\Entity\VehicleMantention $issues
     */
    public function removeIssue(\Trackme\BackendBundle\Entity\VehicleMantention $issues)
    {
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
     * @var string
     */
    private $fuel;


    /**
     * Set fuel
     *
     * @param string $fuel
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
}

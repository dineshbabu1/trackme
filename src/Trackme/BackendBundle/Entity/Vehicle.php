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
     * @var \Trackme\BackendBundle\Entity\User
     */
    private $User;


    /**
     * Set User
     *
     * @param \Trackme\BackendBundle\Entity\User $user
     * @return Vehicle
     */
    public function setUser(\Trackme\BackendBundle\Entity\User $user = null)
    {
        $this->User = $user;

        return $this;
    }

    /**
     * Get User
     *
     * @return \Trackme\BackendBundle\Entity\User 
     */
    public function getUser()
    {
        return $this->User;
    }
}

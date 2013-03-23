<?php

namespace Trackme\BackendBundle\Entity;

use FOS\UserBundle\Entity\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="fos_user")
 */
class User extends BaseUser
{
    /**
     * @var integer
     */
    protected $id;

    /**
     * @var integer
     */
    private $businessId;


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
     * Set businessId
     *
     * @param integer $businessId
     * @return User
     */
    public function setBusinessId($businessId)
    {
        $this->businessId = $businessId;
    
        return $this;
    }

    /**
     * Get businessId
     *
     * @return integer 
     */
    public function getBusinessId()
    {
        return $this->businessId;
    }
    /**
     * @var \Trackme\BackendBundle\Entity\Business
     */
    private $business;


    /**
     * Set business
     *
     * @param \Trackme\BackendBundle\Entity\Business $business
     * @return User
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
     * @var boolean
     */
    private $emailable;


    /**
     * Set emailable
     *
     * @param boolean $emailable
     * @return User
     */
    public function setEmailable($emailable)
    {
        $this->emailable = $emailable;
    
        return $this;
    }

    /**
     * Get emailable
     *
     * @return boolean 
     */
    public function getEmailable()
    {
        return $this->emailable;
    }
    /**
     * @var string
     */
    private $name;

    /**
     * @var string
     */
    private $last_name;


    /**
     * Set name
     *
     * @param string $name
     * @return User
     */
    public function setName($name)
    {
        $this->name = $name;
    
        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set last_name
     *
     * @param string $lastName
     * @return User
     */
    public function setLastName($lastName)
    {
        $this->last_name = $lastName;
    
        return $this;
    }

    /**
     * Get last_name
     *
     * @return string 
     */
    public function getLastName()
    {
        return $this->last_name;
    }
}

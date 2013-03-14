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
}

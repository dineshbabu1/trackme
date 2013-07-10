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

use FOS\UserBundle\Entity\User as BaseUser;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * @ORM\Entity
 * @ORM\Table(name="fos_user")
 * @UniqueEntity("vehicle")
 */
class User extends BaseUser
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    protected $id;

    /**
     * @var \Business
     *
     * @ORM\ManyToOne(targetEntity="Business", inversedBy="users")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="business_id", referencedColumnName="id")
     * })
     */
    private $business;

    /**
     * @var boolean
     *
     * @ORM\Column(name="emailable", type="boolean", nullable=true)
     */
    private $emailable;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255, nullable=true)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="last_name", type="string", length=255, nullable=true)
     */
    private $last_name;

    /**
     * @var string
     *
     * @ORM\Column(name="phone", type="string", length=255, nullable=true)
     */
    private $phone;
    
    /**
     * @ORM\OneToOne(targetEntity="Vehicle", mappedBy="user")
     */
    private $vehicle;


    /**
     * @ORM\ManyToMany(targetEntity="Group")
     * @ORM\JoinTable(name="fos_user_group",
     *      joinColumns={@ORM\JoinColumn(name="user_id", referencedColumnName="id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="group_id", referencedColumnName="id")}
     * )
     */
    protected $groups;

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
     * @var \Doctrine\Common\Collections\Collection $ot
     * @ORM\OneToMany(targetEntity="Ot", mappedBy="user", cascade={"persist", "remove"})
     */
    private $ot;

    /**
     * @var string
     * @Gedmo\Blameable(on="update")
     * @ORM\Column(name="updated_by", type="string", length=255, nullable=true)
     */
    private $updated_by;

    public function __toString()
    {
        return sprintf("%s", $this->getUsername());
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
     * Set name
     *
     * @param  string $name
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
     * @param  string $lastName
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

    /**
     * Set phone
     *
     * @param  string $phone
     * @return User
     */
    public function setPhone($phone)
    {
        $this->phone = $phone;

        return $this;
    }

    /**
     * Get phone
     *
     * @return string
     */
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * Set emailable
     *
     * @param  boolean $emailable
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
     * Set business
     *
     * @param  \Trackme\BackendBundle\Entity\Business $business
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
     * Constructor
     */
    public function __construct()
    {
        parent::__construct();
        $this->groups = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Set created_at
     *
     * @param  \DateTime $createdAt
     * @return User
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
     * @return User
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
     * @return User
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
     * @return User
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
     * Get groups
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getGroups()
    {
        return $this->groups;
    }

    /**
     * Add ot
     *
     * @param  \Trackme\BackendBundle\Entity\Ot $ot
     * @return User
     */
    public function addOt(\Trackme\BackendBundle\Entity\Ot $ot)
    {
        $this->ot[] = $ot;

        return $this;
    }

    /**
     * Remove ot
     *
     * @param \Trackme\BackendBundle\Entity\Ot $ot
     */
    public function removeOt(\Trackme\BackendBundle\Entity\Ot $ot)
    {
        $this->ot->removeElement($ot);
    }

    /**
     * Get ot
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getOt()
    {
        return $this->ot;
    }

    /**
     * Check if user has ot started
     * @return boolean
     */
    public function hasOtActive()
    {
        foreach ($this->getOt() as $ot) {
            if ($ot->isActive()) {
                return $ot;
            }
        }

        return false;
    }

    /**
     * Get full name
     * @return string
     */
    public function getNombreCompleto()
    {
        return sprintf("%s %s", $this->getName(), $this->getLastName());
    }

    /**
     * Return position refresh time as seconds
     * @return int
     */
    public function getPositionRefresh()
    {
        if ($this->getBusiness()) {
            return $this->getBusiness()->getPlan()->getRefreshTime();
        }

        return 90; // Defecto
    }

    /**
     * Return id of user of my business
     * @return array
     */
    public function getColegas()
    {
        $user_ids = array();
        foreach ($this->getBusiness()->getUsers() as $user) {
            $user_ids[] = $user->getId();
        }
        
        return $user_ids;
    }
    
    public function getBusinessVehicles()
    {
        
    }

    /**
     * Set vehicle
     *
     * @param \Trackme\BackendBundle\Entity\Vehicle $vehicle
     * @return User
     */
    public function setVehicle(\Trackme\BackendBundle\Entity\Vehicle $vehicle = null)
    {
        $this->vehicle = $vehicle;
    
        return $this;
    }

    /**
     * Get vehicle
     *
     * @return \Trackme\BackendBundle\Entity\Vehicle 
     */
    public function getVehicle()
    {
        return $this->vehicle;
    }
    
    public function getIcon()
    {
        if ($this->getVehicle()) {
            switch ($this->getVehicle()->getType()) {
                case "Auto":
                    return "car.png";
                    break;
                case "Bus":
                    return "bus.png";
                    break;
                case "Camión":
                    return "truck.png";
                    break;
                case "Motocicleta":
                    return "ducati-diavel.png";
                    break;
                default:
                    return "car.png";
                    break;
            } 
        } else {
            return "pie.png";
        }
    }

}
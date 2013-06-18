<?php

namespace Trackme\BackendBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * Business
 *
 * @ORM\Table(name="business")
 * @ORM\Entity(repositoryClass="Trackme\BackendBundle\Entity\BusinessRepository")
 */
class Business
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
     * @ORM\Column(name="name", type="string", length=255, nullable=false)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=255, nullable=true)
     */
    private $email;

    /**
     * @var string
     *
     * @ORM\Column(name="phone", type="string", length=255, nullable=true)
     */
    private $phone;

    /**
     * @var boolean
     *
     * @ORM\Column(name="enabled", type="boolean", nullable=true)
     */
    private $enabled;

    /**
     * @var string
     *
     * @ORM\Column(name="token", type="string", length=255, nullable=true)
     */
    private $token;

    /**
     * @var \ClientState
     *
     * @ORM\ManyToOne(targetEntity="ClientState")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="state_id", referencedColumnName="id")
     * })
     */
    private $state;

    /**
     * @var \Doctrine\Common\Collections\Collection $users
     * @ORM\OneToMany(targetEntity="User", mappedBy="business", cascade={"persist", "remove"})
     */
    private $users;

    /**
     * @ORM\OneToMany(targetEntity="Subscription", mappedBy="business", cascade={"persist"})
     */
    private $subscription;

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
     * @param  string   $name
     * @return Business
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
     * Set email
     *
     * @param  string   $email
     * @return Business
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set phone
     *
     * @param  string   $phone
     * @return Business
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
     * Set enabled
     *
     * @param  boolean  $enabled
     * @return Business
     */
    public function setEnabled($enabled)
    {
        $this->enabled = $enabled;

        return $this;
    }

    /**
     * Get enabled
     *
     * @return boolean
     */
    public function getEnabled()
    {
        return $this->enabled;
    }

    /**
     * Set token
     *
     * @param  string   $token
     * @return Business
     */
    public function setToken($token)
    {
        $this->token = $token;

        return $this;
    }

    /**
     * Get token
     *
     * @return string
     */
    public function getToken()
    {
        return $this->token;
    }

    /**
     * Set state
     *
     * @param  \Trackme\BackendBundle\Entity\ClientState $state
     * @return Business
     */
    public function setState(\Trackme\BackendBundle\Entity\ClientState $state = null)
    {
        $this->state = $state;

        return $this;
    }

    /**
     * Get state
     *
     * @return \Trackme\BackendBundle\Entity\ClientState
     */
    public function getState()
    {
        return $this->state;
    }

    public function __toString()
    {
        return $this->getName();
    }
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->users = new \Doctrine\Common\Collections\ArrayCollection();
        $this->token = base_convert(sha1(uniqid(mt_rand(), true)), 16, 36);
        $this->enabled = true;
    }

    /**
     * Add users
     *
     * @param  \Trackme\BackendBundle\Entity\User $users
     * @return Business
     */
    public function addUser(\Trackme\BackendBundle\Entity\User $users)
    {
        $this->users[] = $users;
        $users->setBusiness($this);

        return $this;
    }

    /**
     * Remove users
     *
     * @param \Trackme\BackendBundle\Entity\User $users
     */
    public function removeUser(\Trackme\BackendBundle\Entity\User $users)
    {
        $this->users->removeElement($users);
    }

    /**
     * Get users
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getUsers()
    {
        return $this->users;
    }

    /**
     * Set created_at
     *
     * @param  \DateTime $createdAt
     * @return Business
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
     * @return Business
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
     * @param  string   $createdBy
     * @return Business
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
     * @param  string   $updatedBy
     * @return Business
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

    public function getRoleByState()
    {
        if ($this->getState()->getName() == 'Básico') {
            return 'ROLE_BASICO';
        } else {
            return 'ROLE_'.strtoupper($this->getState()->getName());
        }
    }

    

    public function getIdUsers()
    {
        $users = array();
        foreach ($this->getUsers() as $user) {
            $users[] = $user->getId();
        }

        return $users;
    }

    /**
     * Add subscription
     *
     * @param \Trackme\BackendBundle\Entity\Subscription $subscription
     * @return Business
     */
    public function addSubscription(\Trackme\BackendBundle\Entity\Subscription $subscription)
    {
        $this->subscription[] = $subscription;

        return $this;
    }

    /**
     * Remove subscription
     *
     * @param \Trackme\BackendBundle\Entity\Subscription $subscription
     */
    public function removeSubscription(\Trackme\BackendBundle\Entity\Subscription $subscription)
    {
        $this->subscription->removeElement($subscription);
    }

    /**
     * Get subscription
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getSubscription()
    {
        return $this->subscription;
    }
}

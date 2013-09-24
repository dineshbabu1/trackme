<?php

/*
 * This file is part of the TrackmeBackendBundle package.
 *
 * (c) Gonzalo Moreno C. <goncab380@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Trackme\BackendBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Plan
 *
 * @ORM\Table(name="plan")
 * @ORM\Entity
 */
class Plan
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
     * @ORM\Column(name="description", type="text", nullable=true)
     */
    private $description;

    /**
     * @var boolean
     *
     * @ORM\Column(name="featured", type="boolean", nullable=false)
     */
    private $featured;

    /**
     * @var float
     *
     * @ORM\Column(name="price", type="float", nullable=false)
     */
    private $price;

    /**
     * @ORM\Column(name="users_limit", type="integer", nullable=false)
     */
    private $users_limit;

    /**
     * @ORM\Column(name="refresh_time", type="integer", nullable=false)
     */
    private $refresh_time;

    /**
     * Plan to string
     * @return string
     */
    public function __toString()
    {
        return sprintf('%s', $this->getName());
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
     * @return Plan
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
     * Set description
     *
     * @param  string $description
     * @return Plan
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set featured
     *
     * @param  boolean $featured
     * @return Plan
     */
    public function setFeatured($featured)
    {
        $this->featured = $featured;

        return $this;
    }

    /**
     * Get featured
     *
     * @return boolean
     */
    public function getFeatured()
    {
        return $this->featured;
    }

    /**
     * Set price
     *
     * @param  float $price
     * @return Plan
     */
    public function setPrice($price)
    {
        $this->price = $price;

        return $this;
    }

    /**
     * Get price
     *
     * @return float
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Set refresh_time
     *
     * @param  integer $refreshTime
     * @return Plan
     */
    public function setRefreshTime($refreshTime)
    {
        $this->refresh_time = $refreshTime;

        return $this;
    }

    /**
     * Get refresh_time
     *
     * @return integer
     */
    public function getRefreshTime()
    {
        return $this->refresh_time;
    }

    /**
     * Set users_limit
     *
     * @param  integer $usersLimit
     * @return Plan
     */
    public function setUsersLimit($usersLimit)
    {
        $this->users_limit = $usersLimit;

        return $this;
    }

    /**
     * Get users_limit
     *
     * @return integer
     */
    public function getUsersLimit()
    {
        return $this->users_limit;
    }
}

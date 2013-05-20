<?php

namespace Trackme\BackendBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Vehiclemantention
 *
 * @ORM\Table(name="vehiclemantention")
 * @ORM\Entity
 */
class Vehiclemantention
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
     * @var \DateTime
     *
     * @ORM\Column(name="date_from", type="date", nullable=true)
     */
    private $dateFrom;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_to", type="date", nullable=true)
     */
    private $dateTo;

    /**
     * @var string
     *
     * @ORM\Column(name="problem", type="text", nullable=true)
     */
    private $problem;

    /**
     * @var string
     *
     * @ORM\Column(name="solution", type="text", nullable=true)
     */
    private $solution;

    /**
     * @var boolean
     *
     * @ORM\Column(name="fixed", type="boolean", nullable=true)
     */
    private $fixed;

    /**
     * @var string
     *
     * @ORM\Column(name="more_info", type="text", nullable=true)
     */
    private $moreInfo;

    /**
     * @var \Vehicle
     *
     * @ORM\ManyToOne(targetEntity="Vehicle")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="vehicle_id", referencedColumnName="id")
     * })
     */
    private $vehicle;

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
     * Set dateFrom
     *
     * @param \DateTime $dateFrom
     * @return VehicleMantention
     */
    public function setDateFrom($dateFrom)
    {
        $this->dateFrom = $dateFrom;
    
        return $this;
    }

    /**
     * Get dateFrom
     *
     * @return \DateTime 
     */
    public function getDateFrom()
    {
        return $this->dateFrom;
    }

    /**
     * Set dateTo
     *
     * @param \DateTime $dateTo
     * @return VehicleMantention
     */
    public function setDateTo($dateTo)
    {
        $this->dateTo = $dateTo;
    
        return $this;
    }

    /**
     * Get dateTo
     *
     * @return \DateTime 
     */
    public function getDateTo()
    {
        return $this->dateTo;
    }

    /**
     * Set problem
     *
     * @param string $problem
     * @return VehicleMantention
     */
    public function setProblem($problem)
    {
        $this->problem = $problem;
    
        return $this;
    }

    /**
     * Get problem
     *
     * @return string 
     */
    public function getProblem()
    {
        return $this->problem;
    }

    /**
     * Set solution
     *
     * @param string $solution
     * @return VehicleMantention
     */
    public function setSolution($solution)
    {
        $this->solution = $solution;
    
        return $this;
    }

    /**
     * Get solution
     *
     * @return string 
     */
    public function getSolution()
    {
        return $this->solution;
    }

    /**
     * Set fixed
     *
     * @param boolean $fixed
     * @return VehicleMantention
     */
    public function setFixed($fixed)
    {
        $this->fixed = $fixed;
    
        return $this;
    }

    /**
     * Get fixed
     *
     * @return boolean 
     */
    public function getFixed()
    {
        return $this->fixed;
    }

    /**
     * Set moreInfo
     *
     * @param string $moreInfo
     * @return VehicleMantention
     */
    public function setMoreInfo($moreInfo)
    {
        $this->moreInfo = $moreInfo;
    
        return $this;
    }

    /**
     * Get moreInfo
     *
     * @return string 
     */
    public function getMoreInfo()
    {
        return $this->moreInfo;
    }

    /**
     * Set vehicle
     *
     * @param \Trackme\BackendBundle\Entity\Vehicle $vehicle
     * @return VehicleMantention
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
}

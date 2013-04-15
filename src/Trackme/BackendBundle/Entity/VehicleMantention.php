<?php

/*
 * Copyright 2013 Gonzalo Moreno <goncab380@hotmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

namespace Trackme\BackendBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * VehicleMantention
 */
class VehicleMantention
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var \DateTime
     */
    private $dateFrom;

    /**
     * @var \DateTime
     */
    private $dateTo;

    /**
     * @var string
     */
    private $problem;

    /**
     * @var string
     */
    private $solution;

    /**
     * @var boolean
     */
    private $fixed;

    /**
     * @var string
     */
    private $moreInfo;


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
     * @var \Trackme\BackendBundle\Entity\Vehicle
     */
    private $vehicle;


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
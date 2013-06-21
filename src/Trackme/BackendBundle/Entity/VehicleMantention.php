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
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * Vehiclemantention
 *
 * @ORM\Table(name="vehicle_mantention")
 * @ORM\Entity
 */
class VehicleMantention
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
     * @ORM\ManyToOne(targetEntity="Vehicle", inversedBy="issues")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="vehicle_id", referencedColumnName="id")
     * })
     */
    private $vehicle;

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
     * Set dateFrom
     *
     * @param  \DateTime         $dateFrom
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
     * @param  \DateTime         $dateTo
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
     * @param  string            $problem
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
     * @param  string            $solution
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
     * @param  boolean           $fixed
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
     * @param  string            $moreInfo
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
     * @param  \Trackme\BackendBundle\Entity\Vehicle $vehicle
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

    /**
     * Set created_at
     *
     * @param  \DateTime         $createdAt
     * @return Vehiclemantention
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
     * @param  \DateTime         $updatedAt
     * @return Vehiclemantention
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
     * @param  string            $createdBy
     * @return Vehiclemantention
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
     * @param  string            $updatedBy
     * @return Vehiclemantention
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

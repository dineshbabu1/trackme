<?php

namespace Trackme\BackendBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * PlanAttribute
 */
class PlanAttribute
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var string
     */
    private $value;

    /**
     * @var string
     */
    private $enabled;


    public function __toString() {
        return $this->getValue();
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
     * Set value
     *
     * @param string $value
     * @return PlanAttribute
     */
    public function setValue($value)
    {
        $this->value = $value;
    
        return $this;
    }

    /**
     * Get value
     *
     * @return string 
     */
    public function getValue()
    {
        return $this->value;
    }

    /**
     * Set enabled
     *
     * @param string $enabled
     * @return PlanAttribute
     */
    public function setEnabled($enabled)
    {
        $this->enabled = $enabled;
    
        return $this;
    }

    /**
     * Get enabled
     *
     * @return string 
     */
    public function getEnabled()
    {
        return $this->enabled;
    }
    /**
     * @var integer
     */
    private $order;

    /**
     * @var \Trackme\BackendBundle\Entity\Plan
     */
    private $plan;


    /**
     * Set order
     *
     * @param integer $order
     * @return PlanAttribute
     */
    public function setOrder($order)
    {
        $this->order = $order;
    
        return $this;
    }

    /**
     * Get order
     *
     * @return integer 
     */
    public function getOrder()
    {
        return $this->order;
    }

    /**
     * Set plan
     *
     * @param \Trackme\BackendBundle\Entity\Plan $plan
     * @return PlanAttribute
     */
    public function setPlan(\Trackme\BackendBundle\Entity\Plan $plan = null)
    {
        $this->plan = $plan;
    
        return $this;
    }

    /**
     * Get plan
     *
     * @return \Trackme\BackendBundle\Entity\Plan 
     */
    public function getPlan()
    {
        return $this->plan;
    }
}

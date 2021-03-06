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
 * Page
 *
 * @ORM\Table(name="page")
 * @ORM\Entity
 */
class Page
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
     * @ORM\Column(name="title", type="string", length=255, nullable=false)
     */
    private $title;

    /**
     * @var string
     *
     * @ORM\Column(name="content", type="text", nullable=false)
     */
    private $content;

    /**
     * @var string
     *
     * @ORM\Column(name="menu", type="string", length=255, nullable=false)
     */
    private $menu;

    /**
     * @var integer
     *
     * @ORM\Column(name="weigth", type="integer", nullable=false)
     */
    private $weigth;

    /**
     * @var boolean
     *
     * @ORM\Column(name="enabled", type="boolean", nullable=false)
     */
    private $enabled;

    /**
     * @var string
     *
     * @ORM\Column(name="url", type="string", length=255, nullable=false)
     */
    private $url;

    /**
     *
     * @var boolean
     *
     * @ORM\Column(name="in_header", type="boolean", nullable=true)
     */
    private $in_header;

    /**
     *
     * @var boolean
     *
     * @ORM\Column(name="in_footer", type="boolean", nullable=true)
     */
    private $in_footer;

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
     * Set title
     *
     * @param  string $title
     * @return Page
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set content
     *
     * @param  string $content
     * @return Page
     */
    public function setContent($content)
    {
        $this->content = $content;

        return $this;
    }

    /**
     * Get content
     *
     * @return string
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * Set menu
     *
     * @param  string $menu
     * @return Page
     */
    public function setMenu($menu)
    {
        $this->menu = $menu;

        return $this;
    }

    /**
     * Get menu
     *
     * @return string
     */
    public function getMenu()
    {
        return $this->menu;
    }

    /**
     * Set weigth
     *
     * @param  integer $weigth
     * @return Page
     */
    public function setWeigth($weigth)
    {
        $this->weigth = $weigth;

        return $this;
    }

    /**
     * Get weigth
     *
     * @return integer
     */
    public function getWeigth()
    {
        return $this->weigth;
    }

    /**
     * Set enabled
     *
     * @param  boolean $enabled
     * @return Page
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
     * Set url
     *
     * @param  string $url
     * @return Page
     */
    public function setUrl($url)
    {
        $this->url = $url;

        return $this;
    }

    /**
     * Get url
     *
     * @return string
     */
    public function getUrl()
    {
        return $this->url;
    }

    /**
     * Set in_header
     *
     * @param  boolean $inHeader
     * @return Page
     */
    public function setInHeader($inHeader)
    {
        $this->in_header = $inHeader;

        return $this;
    }

    /**
     * Get in_header
     *
     * @return boolean
     */
    public function getInHeader()
    {
        return $this->in_header;
    }

    /**
     * Set in_footer
     *
     * @param  boolean $inFooter
     * @return Page
     */
    public function setInFooter($inFooter)
    {
        $this->in_footer = $inFooter;

        return $this;
    }

    /**
     * Get in_footer
     *
     * @return boolean
     */
    public function getInFooter()
    {
        return $this->in_footer;
    }
}

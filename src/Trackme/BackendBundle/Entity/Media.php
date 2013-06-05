<?php

namespace Trackme\BackendBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Admingenerator\GeneratorBundle\Model\FileInterface;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Media
 *
 * @ORM\Table(name="media")
 * @ORM\Entity
 * @Vich\Uploadable
 */
class Media implements FileInterface
{

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @Assert\File(
     *     maxSize="10M",
     *     mimeTypes={"image/png", "image/jpeg", "image/pjpeg"}
     * )
     * @Vich\UploadableField(mapping="image_file", fileNameProperty="path")
     *
     * @var File $file
     */
    protected $file;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * 
     */
    protected $path;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     *
     * @var string $name
     */
    protected $name;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    protected $enabled;

    /**
     * @ORM\Column(type="string", length=255)
     */
    protected $alt;

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
     * Set path
     *
     * @param string $path
     * @return Media
     */
    public function setPath($path)
    {
        $this->path = $path;

        return $this;
    }

    /**
     * Get path
     *
     * @return string 
     */
    public function getPath()
    {
        return $this->path;
    }

    /**
     * Set name
     *
     * @param string $name
     * @return Media
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
     * Get mimeType
     *
     * @return string 
     */
    public function getMimeType()
    {
        return $this->file->getMimeType();
    }

    /**
     * Get size
     *
     * @return integer
     */
    public function getSize()
    {
        return $this->file->getSize();
    }

    /**
     * @inheritDoc
     */
    public function getPreview()
    {
        return true;
    }

    /**
     * @inheritDoc
     */
    public function getFile()
    {
        return $this->file;
    }

    public function setFile(\Symfony\Component\HttpFoundation\File\File $file = null)
    {
        $this->file = $file;

        return $this;
    }

    public function setParent($parent){
        return null;
    }

    public function getParent(){
        return null;
    }


    /**
     * Set enabled
     *
     * @param boolean $enabled
     * @return Media
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
     * Set alt
     *
     * @param string $alt
     * @return Media
     */
    public function setAlt($alt)
    {
        $this->alt = $alt;

        return $this;
    }

    /**
     * Get alt
     *
     * @return string 
     */
    public function getAlt()
    {
        return $this->alt;
    }
}

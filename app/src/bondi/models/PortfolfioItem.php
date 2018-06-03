<?php

namespace Bondi;

use SilverStripe\ORM\DataObject;

/**
 * PortfolioItem DataObject
 * To be used with an extension of ModelAdmin
 */

class PortfolfioItem extends DataObject {

    private static $table_name = 'PortfolfioItem';

    private static $create_table_options = [
        'MySQLDatabase' => 'ENGINE=MyISAM'
    ];

    private static $db = [
        'Descriptor' => 'HTMLText',
        'SortOrder' => 'Int'
    ];

    private static $default_sort = 'SortOrder';

    /*
     * Format: thisRef=>className
    */
    private static $has_one = [
        'PortfolioPage' => 'PortfolioPage',
        'Image' => 'Image'
    ];

    private static $summary_fields = [
        'ThumbnailImage' => 'Thumbnail'
    ];

    /**
     * @return Image|string
     */
    public function getThumbnailImage(){
        if ($this->Image()->ID) {
            return $this->Image()->CroppedImage(70, 39);
        }
        return '(none)';
    }

    /*
    * CMS Fields
    */
    public function getCMSfields() {

        //Image
        $sizeMB = 2; // 2 MB
        $size = $sizeMB * 1024 * 1024; // 2 MB in bytes
        $imageField = UploadField::create('Image','Upload an image');
        $imageField->setFolderName('Portfolio');
        $imageField->getValidator()->setAllowedExtensions(['png','jpeg','jpg','gif']);
        $imageField->getValidator()->setAllowedMaxFileSize($size);
        $imageField->setDescription('Max file size: 2mb');

        //The rest of the fields
        $fields = FieldList::create(TabSet::create('Root')); // More complex DataObject that requires tabbed sections
        $fields->addFieldsToTab('Root.Main', array(
                $imageField,
                HtmlEditorField::create('Descriptor')->setRows(5)
                
            )
        );
        

        return $fields;
    }

}
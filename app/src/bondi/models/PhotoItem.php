<?php

namespace Bondi;

use SilverStripe\ORM\DataObject;

/**
 * SurveyAnswers DataObject
 */

class PhotoItem extends DataObject
{
    private static $table_name = 'PhotoItem';

    private static $create_table_options = [
        'MySQLDatabase' => 'ENGINE=MyISAM'
    ];

    private static $db = [
        'Description' => 'HTMLText',
    ];

    private static $has_one = [
        'Pic' => 'Image'
    ];
    
}

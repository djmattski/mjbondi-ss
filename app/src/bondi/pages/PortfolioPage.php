<?php

namespace Bondi;

use \Page;

class PortfolioPage extends Page
{
    private static $table_name = 'PortfolfioPage';
    private static $singular_name = 'Portfolio Landing Page';
    private static $plural_name = 'Portfolio Landing Pages';
    private static $description = 'Portfolio Landing Page';
    private static $allowed_children = 'none';
    private static $allowed_parents = 'CategoryPage';
    private static $can_be_root = false;

    private static $db = [
        'Title' => 'Varchar(255)',
        'Description' => 'HTMLText',
    ];

    private static $has_one = [
        'CategoryPage' => 'CategoryPage'
    ];

    private static $has_many = [
        'Items' => 'PortfolfioItem'
    ];

    // private static $extensions = ['Sortable'];

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $fields->addFieldsToTab('Root.Main', [
            TextField::create('Title'),
            HtmlEditorField::create('Content')
                ->setRows(5)
        ]);

        /*
        * New tab - Items
        */
        if ($this->ID) {
            $config = GridFieldConfig_RecordEditor::create();
            //$config->removeComponentsByType('GridFieldAddNewButton');
            $config->removeComponentsByType('GridFieldAddExistingAutoCompleter');
            $config->addComponent(new GridFieldSortableRows('SortOrder'));
            $config->addComponent(new GridFieldDeleteAction());
            $gridField = new GridField(
                'Items',
                'Items',
                $this->Items(),
                $config
            );
            $fields->addFieldsToTab('Root.Items', $gridField);
        }

        return $fields;
    }
}

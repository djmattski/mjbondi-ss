<?php

namespace Bondi;

use \Page;

class CategoryPage extends Page
{
    private static $table_name = 'CategoryPage';
    private static $db = [];

    private static $has_many = [
      'PortfolioPages' => 'PortfolioPage'
    ];
}

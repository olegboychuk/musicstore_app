<?php
require_once dirname (__FILE__). '/../core/Model/GenreModel.php';
require_once dirname (__FILE__). '/../core/Controller/Controller.php';

class GenreController
{
    public $model;

    public function __construct()
    {
        $this->model = new GenreController();
    }

    /**
     * /*public function getAllGenres
     * /*    FETCH ALL GENRES FROM DB
     */
    public function getAllGenres()
    {
        $genres = $this->model->getAllGenres();

        if ($genres !== NULL)
            return $genres;
        else
            return false;
    }
}

?>
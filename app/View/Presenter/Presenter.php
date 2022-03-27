<?php

declare(strict_types=1);

namespace App\View\Presenter;

use Illuminate\Database\Eloquent\Model;

abstract class Presenter
{
    protected Model $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    public function __get(string $property): mixed
    {
        if (method_exists($this, $property) === true) {
            return $this->{$property}();
        }

        return $this->model->{$property};
    }
}

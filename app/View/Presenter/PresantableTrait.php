<?php

declare(strict_types=1);

namespace App\View\Presenter;

trait PresantableTrait
{
    protected ?Presenter $presenterInstance = null;

    /**
     * @throws PresenterException
     */
    public function present(): Presenter
    {
        if ($this->presenter === '' || class_exists($this->presenter) === false) {
            throw new PresenterException('Please set $presenter property');
        }

        if ($this->presenterInstance === null) {
            $this->presenterInstance = new $this->presenter($this);
        }

        return $this->presenterInstance;
    }
}

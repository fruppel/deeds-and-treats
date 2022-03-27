<?php

declare(strict_types=1);

namespace App\View\Presenter;

use App\Models\Deed;

/**
 * @property Deed $model
 */
class DeedPresenter extends Presenter
{
    public function valueInEuro(): string
    {
        $currencyFormatter = new \NumberFormatter('de-DE', \NumberFormatter::CURRENCY);

        return $currencyFormatter->format((float) $this->model->value);
    }
}

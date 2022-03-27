<?php

namespace App\Models;

use App\View\Presenter\DeedPresenter;
use App\View\Presenter\PresantableTrait;
use App\View\Presenter\PresenterInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $value
 * @mixin Builder
 * @mixin DeedPresenter
 */
class Deed extends Model implements PresenterInterface
{
    use HasFactory, PresantableTrait;

    protected $fillable = ['name', 'user_id', 'value'];
    protected string $presenter = DeedPresenter::class;
}

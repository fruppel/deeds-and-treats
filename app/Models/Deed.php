<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $value
 * @mixin Builder
 */
class Deed extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'user_id', 'value'];
}

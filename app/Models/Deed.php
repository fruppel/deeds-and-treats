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

    protected $fillable = ['name', 'user_id', 'value', 'activated_at', 'archived_at'];

    /**
     * @var array<string, string>
     */
    protected $casts = [
        'activated_at' => 'datetime',
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;

class Setting extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'theme'];

    public function user(): Relation
    {
        return $this->belongsTo(User::class);
    }
}

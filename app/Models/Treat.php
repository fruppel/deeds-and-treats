<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;

class Treat extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'costs', 'bought', 'unlocked'];

    public function user(): Relation
    {
        return $this->belongsTo(User::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeedLog extends Model
{
    use HasFactory;

    protected $fillable = ['deed_id', 'user_id', 'day', 'value'];
}

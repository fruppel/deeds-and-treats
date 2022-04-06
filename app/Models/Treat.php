<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;

/**
 * @property string $name
 * @property float $costs
 */
class Treat extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'costs', 'bought', 'unlocked'];

    public function user(): Relation
    {
        return $this->belongsTo(User::class);
    }

    public function divide(int $into): void
    {
        $originalName = $this->name;
        $this->name = $this->name . ' (1)';
        $this->costs = $this->costs / $into;
        $this->save();

        for ($i = 2; $i <= $into; $i++) {
            $copy = $this->replicate();
            $copy->name = $originalName . ' (' . $i . ')';
            $copy->save();
        }
    }

}

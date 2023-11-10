<?php

namespace App\Models;

use Carbon\CarbonImmutable;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;

/**
 * @property string $name
 * @property float $costs
 * @property int $user_id
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

    public function scopeMonthAndYear(Builder $query, int $month, int $year): Builder
    {
        $date = CarbonImmutable::createFromDate($year, $month, 1);

        return $query
            ->where('bought', '>=', $date->startOfMonth()->format('Y-m-d'))
            ->where('bought', '<=', $date->endOfMonth()->format('Y-m-d'));
    }

}

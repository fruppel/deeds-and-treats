<?php

declare(strict_types=1);

namespace App\Models;

use Carbon\CarbonImmutable;
use Illuminate\Contracts\Database\Query\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeedLog extends Model
{
    use HasFactory;
    protected $fillable = ['deed_id', 'user_id', 'day', 'value'];

    public function scopeMonthAndYear(Builder $query, int $month, int $year): Builder
    {
        $date = CarbonImmutable::createFromDate($year, $month);

        return $query
            ->where('day', '>=', $date->startOfMonth()->format('Y-m-d'))
            ->where('day', '<=', $date->endOfMonth()->format('Y-m-d'));
    }
}

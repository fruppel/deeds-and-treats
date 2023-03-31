<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Models\DeedLog;
use App\Models\Treat;
use Carbon\CarbonImmutable;

class StatisticsPerYearController extends AbstractApiController
{
    public function index(int $year)
    {
        $now = CarbonImmutable::now();
        $currentYear = $now->year;

        $monthStart = 1;
        $monthEnd = 12;

        if ($year > $currentYear) {
            $year = $currentYear;
        }

        if ($year === $currentYear) {
            $monthEnd = $now->month;
        }

        $months = [];

        for ($currentMonth = $monthStart; $currentMonth <= $monthEnd; $currentMonth++) {
            $months[$currentMonth] = [
                'sumFinishedDeeds' => (float) DeedLog::monthAndYear($currentMonth, $year)->sum('value'),
                'sumBoughtTreats' => (float) Treat::monthAndYear($currentMonth, $year)->sum('costs'),
            ];
        }

        return response()->json($months);
    }
}

<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use Carbon\CarbonImmutable;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class UserController extends AbstractApiController
{
    private const INTERSECTION_DAYS = 10;

    public function index(): JsonResponse
    {
        $user = Auth::user();
        $treats = $user->treats;
        $deedlogs = $user->deedLogs;

        return response()->json([
            'savings' => $deedlogs->sum('value'),
            'intersectionTenDays' => $user->deedLogs()
                ->where('day', '>=', CarbonImmutable::now()->subDays(self::INTERSECTION_DAYS)->format('Y-m-d'))
                ->sum('value') / self::INTERSECTION_DAYS,
            'costsAll' => $treats->sum('costs'),
            'costsSpent' => $treats->whereNotNull('unlocked')->sum('costs'),
            'costsOpen' => $treats->whereNull('unlocked')->sum('costs'),
            'activeTreat' => $user->activeTreat,
        ]);
    }
}

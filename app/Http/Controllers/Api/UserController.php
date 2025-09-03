<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Models\User;
use Carbon\CarbonImmutable;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UserController extends AbstractApiController
{
    private const INTERSECTION_DAYS_3 = 3;
    private const INTERSECTION_DAYS_10 = 10;

    public function index(): JsonResponse
    {
        $user = Auth::user();
        $treats = $user->treats;
        $deedlogs = $user->deedLogs;
        $settings = $user->settings->only(['theme']);

        return response()->json([
            'savings' => (float) $deedlogs->sum('value'),
            'intersectionThreeDays' => $user->deedLogs()
                ->where('day', '>', CarbonImmutable::now()->subDays(self::INTERSECTION_DAYS_3)->format('Y-m-d'))
                ->sum('value') / self::INTERSECTION_DAYS_3,
            'intersectionTenDays' => $user->deedLogs()
                ->where('day', '>', CarbonImmutable::now()->subDays(self::INTERSECTION_DAYS_10)->format('Y-m-d'))
                ->sum('value') / self::INTERSECTION_DAYS_10,
            'maxSavingsPerDay' => $user->activeDeeds()->sum('value'),
            'costsAll' => $treats->sum('costs'),
            'costsSpent' => $treats->whereNotNull('unlocked')->sum('costs'),
            'costsOpen' => $treats->whereNull('unlocked')->sum('costs'),
            'activeTreat' => $user->activeTreat,
            'inpaymentsSum' => (float) $user->inpayments()->sum('amount'),
            'settings' => $settings,
        ]);
    }
}

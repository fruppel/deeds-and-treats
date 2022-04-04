<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class UserController extends AbstractApiController
{
    public function index(): JsonResponse
    {
        $user = Auth::user();

        return response()->json([
            'savings' => $user->deedLogs->sum('value'),
            'costsAll' => $user->treats->sum('costs'),
            'costsSpent' => $user->treats->whereNotNull('unlocked')->sum('costs'),
            'costsOpen' => $user->treats->whereNull('unlocked')->sum('costs'),
            'activeTreat' => $user->activeTreat,
        ]);
    }
}

<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class SavingController extends AbstractApiController
{
    public function index(): JsonResponse
    {
        return response()->json(
            Auth::user()->deedLogs->sum('value')
        );
    }
}

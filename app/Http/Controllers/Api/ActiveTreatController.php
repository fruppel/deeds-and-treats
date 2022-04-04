<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Models\Treat;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class ActiveTreatController extends AbstractApiController
{
    public function store(Treat $treat): JsonResponse
    {
        Auth::user()->active_treat = $treat->id;
        Auth::user()->save();

        return response()->json();
    }

    public function destroy(): JsonResponse
    {
        Auth::user()->active_treat = null;
        Auth::user()->save();

        return response()->json();
    }
}

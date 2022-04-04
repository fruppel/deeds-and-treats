<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Models\Treat;
use Carbon\CarbonImmutable;
use Illuminate\Http\JsonResponse;

class UnlockController extends AbstractApiController
{
    public function store(Treat $treat): JsonResponse
    {

        $treat->update(['unlocked' => CarbonImmutable::now()->format('Y-m-d')]);
        $treat->user->active_treat = null;
        $treat->user->save();

        return response()->json();
    }
}

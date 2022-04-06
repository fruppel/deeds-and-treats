<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Models\Treat;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;

class TreatDivideController extends AbstractApiController
{
    public function store(Treat $treat): JsonResponse
    {
        $validated = request()->validate([
            'divideInto' => 'required|numeric|min:2'
        ]);

        $treat->divide((int) $validated['divideInto']);

        return response()->json();
    }
}

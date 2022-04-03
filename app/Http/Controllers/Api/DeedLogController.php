<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Models\DeedLog;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DeedLogController extends AbstractApiController
{
    public function index(): JsonResponse
    {
        return response()->json(
            Auth::user()
                ->deedLogs
                ->groupBy('day')
                ->map(function ($deedlog) {
                    return $deedlog->keyBy('deed_id');
                })
        );
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'deed_id' => 'required',
            'day' => 'required',
        ]);

        $user = Auth::user();
        $deed = $user->deeds()->find($validated['deed_id']);
        $validated['value'] = $deed->value;

        $deedLog = $user->deedLogs()->create($validated);

        return response()->json(compact('deedLog'));
    }

    public function destroy(DeedLog $deedLog): JsonResponse
    {
        $deedLog->delete();
        return response()->json();
    }
}

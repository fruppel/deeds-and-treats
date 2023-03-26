<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Models\Deed;
use App\Models\Treat;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TreatController extends AbstractApiController
{
    public function index(Request $request): JsonResponse
    {
        $sortBy = $request->get('sortBy', 'bought');
        $sortDirection = $request->get('sortDirection', 'asc');
        $filter = $request->get('filter', 'all');

        $result = Auth::user()->treats();

        if ($filter === 'unlocked') {
            $result = $result->whereNotNull('unlocked');
        } else if ($filter === 'not_unlocked') {
            $result = $result->whereNull('unlocked');
        }

        return response()->json(
            $result
                ->orderBy($sortBy, $sortDirection)
                ->get()
        );
    }

    public function show(int $id): JsonResponse
    {
        $treat = Auth::user()->treats()->find($id);

        return response()->json(compact('treat'));
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|max:35',
            'costs' => 'required|numeric',
            'bought' => 'date',
            'unlocked' => 'date|nullable',
        ]);

        $treat = Auth::user()->treats()->create($validated);

        return response()->json(compact('treat'));
    }

    public function update(Request $request, Treat $treat): JsonResponse
    {
        if ($request->user()->cannot('manage', $treat)) {
            return $this->notAuthorizedResponse();
        }

        $validated = $request->validate([
            'name' => 'required|max:35',
            'costs' => 'required|numeric',
            'bought' => 'date',
            'unlocked' => 'date|nullable',
        ]);

        $treat->update($validated);

        return response()->json(['treat' => $treat->fresh()]);

    }

    public function destroy(Request $request, Treat $treat): JsonResponse
    {
        if ($request->user()->cannot('manage', $treat)) {
            return $this->notAuthorizedResponse();
        }

        $treat->delete();

        return response()->json();
    }
}

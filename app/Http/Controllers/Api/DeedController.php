<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Models\Deed;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DeedController extends AbstractApiController
{
    public function index(): JsonResponse
    {
        return response()->json(['deeds' => Auth::user()->deeds]);
    }

    public function edit(int $id)
    {
        $deed = Auth::user()->deeds()->find($id);

        return response()->json(compact('deed'));
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|max:25',
            'value' => 'required|numeric',
        ]);

        $deed = Auth::user()->deeds()->create($validated);

        return response()->json(compact('deed'));
    }

    public function update(Request $request, Deed $deed): JsonResponse
    {
        if ($request->user()->cannot('manage', $deed)) {
            return $this->notAuthorizedResponse();
        }

        $validated = $request->validate([
            'name' => 'required|max:25',
            'value' => 'required|numeric',
        ]);

        $deed->update($validated);

        return response()->json(['deed' => $deed->fresh()]);

    }

    public function destroy(Request $request, Deed $deed): JsonResponse
    {
        if ($request->user()->cannot('manage', $deed)) {
            return $this->notAuthorizedResponse();
        }

        $deed->delete();

        return response()->json();
    }
}

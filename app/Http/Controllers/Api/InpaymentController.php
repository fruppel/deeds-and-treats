<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Models\Inpayment;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InpaymentController extends AbstractApiController
{
    public function index(): JsonResponse
    {
        $result = Auth::user()->inpayments();

        return response()->json(['inpayments' => $result->get()]);
    }

    public function show(int $id): JsonResponse
    {
        $inpayment = Auth::user()->inpayments()->find($id);

        return response()->json(compact('inpayment'));
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'description' => 'required|max:35',
            'amount' => 'required|numeric',
        ]);

        $inpayment = Auth::user()->inpayments()->create($validated);

        return response()->json(compact('inpayment'));
    }

    public function update(Request $request, Inpayment $inpayment): JsonResponse
    {
        if ($request->user()->cannot('manage', $inpayment)) {
            return $this->notAuthorizedResponse();
        }

        $validated = $request->validate([
            'description' => 'required|max:35',
            'amount' => 'required|numeric',
        ]);

        $inpayment->update($validated);

        return response()->json(['inpayment' => $inpayment->fresh()]);

    }

    public function destroy(Request $request, Inpayment $inpayment): JsonResponse
    {
        if ($request->user()->cannot('manage', $inpayment)) {
            return $this->notAuthorizedResponse();
        }

        $inpayment->delete();

        return response()->json();
    }
}

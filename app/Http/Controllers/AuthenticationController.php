<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class AuthenticationController
{
    public function store(LoginRequest $request): JsonResponse
    {
        $request->authenticate();

        $user = Auth::user();
        $token = $user->createToken('email')->plainTextToken;

        return response()->json([
            'user' => [
                'name' => $user->name,
                'token' => $token
            ]
        ]);
    }

    public function destroy(): JsonResponse
    {
        Auth::user()->tokens()->delete();

        return response()->json();
    }
}

<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class AbstractApiController extends Controller
{
    protected function notAuthorizedResponse(): JsonResponse
    {
        return response()->json(['error' => 'Not authorized.'], 403);
    }
}

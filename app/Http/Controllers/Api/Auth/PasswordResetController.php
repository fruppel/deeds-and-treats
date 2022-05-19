<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Api\AbstractApiController;
use Illuminate\Support\Facades\Password;
use Illuminate\Http\Request;

class PasswordResetController extends AbstractApiController
{
    public function store(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
        ]);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        return $status == Password::RESET_LINK_SENT;
    }
}

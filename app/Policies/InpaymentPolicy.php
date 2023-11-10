<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\Inpayment;
use App\Models\User;

class InpaymentPolicy
{
    public function manage(User $user, Inpayment $inpayment): bool
    {
        return $inpayment->user_id === $user->id;
    }
}

<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\Treat;
use App\Models\User;

class TreatPolicy
{
    public function manage(User $user, Treat $treat): bool
    {
        return $treat->user_id === $user->id;
    }
}

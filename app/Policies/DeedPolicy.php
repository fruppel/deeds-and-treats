<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\Deed;
use App\Models\User;

class DeedPolicy
{
    public function manage(User $user, Deed $deed): bool
    {
        return $deed->user_id === $user->id;
    }
}

<?php

declare(strict_types=1);

namespace App\Models;

use Carbon\CarbonImmutable;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;

/**
 * @property string $description
 * @property float $amount
 * @property int $user_id
 */
class Inpayment extends Model
{
    use HasFactory;

    protected $fillable = ['description', 'amount'];

    public function user(): Relation
    {
        return $this->belongsTo(User::class);
    }
}

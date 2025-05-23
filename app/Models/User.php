<?php

namespace App\Models;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Collection;
use Laravel\Sanctum\HasApiTokens;

/**
 * @property int $id
 * @property ?int $active_treat
 */
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'active_treat',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function deeds(): Relation
    {
        return $this->hasMany(Deed::class);
    }

    public function activeDeeds(): Collection
    {
        return $this->deeds->filter(function ($deed) {
            return $deed->activated_at <= CarbonImmutable::now();
        });
    }

    public function treats(): Relation
    {
        return $this->hasMany(Treat::class);
    }

    public function inpayments(): Relation
    {
        return $this->hasMany(Inpayment::class);
    }

    public function activeTreat(): Relation
    {
        return $this->hasOne(Treat::class, 'id', 'active_treat');
    }

    public function deedLogs(): Relation
    {
        return $this->hasMany(DeedLog::class);
    }

    public function settings(): Relation
    {
        return $this->hasOne(Setting::class);
    }

    protected static function booted(): void
    {
        static::created(function ($user) {
            $user->settings()->create(['theme' => 'system']);
        });

        static::deleted(function ($user) {
            $user->settings()->get()->each->delete();
        });
    }
}

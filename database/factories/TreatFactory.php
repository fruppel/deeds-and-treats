<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
 */
class TreatFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => self::factoryForModel(User::class),
            'name' => ucfirst($this->faker->word()) . ' ' . $this->faker->word(),
            'costs' => $this->faker->randomFloat(2, 5, 150),
            'bought' => $this->faker->dateTimeBetween('-1 years')->format('Y-m-d H:i:s'),
            'unlocked' => null,
        ];
    }
}

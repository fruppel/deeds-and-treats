<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
 */
class DeedFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => ucfirst($this->faker->word()),
            'user_id' => self::factoryForModel(User::class),
            'value' => $this->faker->randomElement([0.50, 1, 2, 3]),
        ];
    }
}

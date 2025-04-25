<?php

namespace Database\Seeders;

use App\Models\Deed;
use App\Models\Treat;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
         $user = User::factory()->create([
             'name' => 'Flo',
             'email' => 'ruppel.florian@gmail.com',
             'password' => Hash::make('asdasdasd'),
         ]);

         Deed::factory()->create([
             'name' => 'Sport',
             'value' => 2.0,
             'user_id' => $user->id
         ]);

         Deed::factory()->create([
             'name' => 'Essen',
             'value' => 2.0,
             'user_id' => $user->id
         ]);

         Deed::factory()->create([
             'name' => 'Spanisch',
             'value' => 1.0,
             'user_id' => $user->id
         ]);

         Treat::factory(30)->create([
             'user_id' => $user->id,
         ]);
    }
}

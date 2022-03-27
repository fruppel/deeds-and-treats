<?php

namespace Database\Seeders;

use App\Models\Deed;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
         $user = User::factory()->create([
             'name' => 'Flo',
             'email' => 'ruppel.florian@gmail.com',
             'password' => '$2y$10$3PkEMdG2ltaLYrmX3p9GLOG7svzPMIfvMt63F0R2bi7AsGrSfef0q', // asdasdasd
         ]);

         Deed::factory(3)->create(['user_id' => $user->id]);
    }
}

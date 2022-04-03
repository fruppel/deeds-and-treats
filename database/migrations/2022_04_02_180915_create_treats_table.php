<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('treats', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignIdFor(User::class);
            $table->string('name', 100);
            $table->decimal('costs', 10);
            $table->date('bought');
            $table->date('unlocked');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('treats');
    }
};

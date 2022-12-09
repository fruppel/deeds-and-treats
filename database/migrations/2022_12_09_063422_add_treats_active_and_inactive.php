<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('deeds', static function (Blueprint $table) {
            $table->timestamp('activated_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('archived_at')->nullable();
        });

        DB::table('deeds')->update(['activated_at' => DB::raw('created_at')]);
    }

    public function down(): void
    {
        Schema::table('deeds', static function (Blueprint $table) {
            $table->dropColumn('activated_at');
            $table->dropColumn('archived_at');
        });
    }
};

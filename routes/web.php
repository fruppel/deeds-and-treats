<?php

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\DeedController;
use App\Http\Controllers\Api;
use App\Http\Controllers\SpaController;
use Illuminate\Support\Facades\Route;

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

Route::middleware(['auth'])->group(callback: function () {
    Route::resource('deeds', DeedController::class)->except(['show', 'destroy', 'index']);
});

Route::middleware(['auth'])->prefix('api')->group(function () {
    Route::delete('deeds/{deed}', [Api\DeedController::class, 'destroy'])->name('api.deeds.destroy');
});

Route::get('/{any}', [SpaController::class, 'index'])->where('any', '.*');

require __DIR__.'/auth.php';

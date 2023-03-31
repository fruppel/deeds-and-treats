<?php

declare(strict_types=1);

use App\Http\Controllers\Api\ActiveTreatController;
use App\Http\Controllers\Api\Auth\PasswordResetController;
use App\Http\Controllers\Api\DeedController;
use App\Http\Controllers\Api\DeedLogController;
use App\Http\Controllers\Api\StatisticsPerYearController;
use App\Http\Controllers\Api\TreatDivideController;
use App\Http\Controllers\Api\UnlockController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\TreatController;
use App\Http\Controllers\AuthenticationController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthenticationController::class, 'store']);
Route::post('/forgot-password', [PasswordResetController::class, 'store']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthenticationController::class, 'destroy']);
    Route::get('/deeds', [DeedController::class, 'index']);
    Route::get('/deeds/{deed}/edit', [DeedController::class, 'edit']);
    Route::post('/deeds', [DeedController::class, 'store']);
    Route::patch('/deeds/{deed}', [DeedController::class, 'update']);
    Route::get('/deedlogs', [DeedLogController::class, 'index']);
    Route::post('/deedlogs', [DeedLogController::class, 'store']);
    Route::delete('/deedlogs/{deedLog}', [DeedLogController::class, 'destroy']);
    Route::get('/user', [UserController::class, 'index']);
    Route::apiResource('/treats', TreatController::class);
    Route::post('/activetreat/{treat}', [ActiveTreatController::class, 'store']);
    Route::delete('/activetreat', [ActiveTreatController::class, 'destroy']);
    Route::post('/unlock/{treat}', [UnlockController::class, 'store']);
    Route::post('/treat/divide/{treat}', [TreatDivideController::class, 'store']);
    Route::get('/statistics/{year}', [StatisticsPerYearController::class, 'index']);
});

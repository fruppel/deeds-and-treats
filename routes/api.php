<?php

use App\Http\Controllers\Api\DeedController;
use App\Http\Controllers\AuthenticationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', [AuthenticationController::class, 'store']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthenticationController::class, 'destroy']);
    Route::get('/deeds', [DeedController::class, 'index']);
    Route::get('/deeds/{deed}/edit', [DeedController::class, 'edit']);
    Route::post('/deeds', [DeedController::class, 'store']);
    Route::patch('/deeds/{deed}', [DeedController::class, 'update']);
});

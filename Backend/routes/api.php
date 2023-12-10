<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::resource('profile', UserController::class);
Route::put('profile/update/users/{iduser}',[UserController::class, 'updateUser']);
Route::put('profile/update/hobbies/{idHobbie}',[UserController::class, 'updateHobbies']);
Route::put('profile/update/frameworks/{idframework}',[UserController::class, 'updateFrameworks']);

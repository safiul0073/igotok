<?php

use App\Http\Controllers\Auth as Auth;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/locale/{locale}', function ($locale) {
    App::setLocale($locale);
    session(['locale' => $locale]);

    return redirect()->back();
});

Route::middleware('guest')->group(function () {
    Route::get('register', [Auth\RegisteredUserController::class, 'create'])
        ->name('register');
    Route::post('register', [Auth\RegisteredUserController::class, 'store']);

    Route::get('login', [Auth\AuthenticatedSessionController::class, 'create'])
        ->name('login');
    Route::post('login', [Auth\AuthenticatedSessionController::class, 'store']);
});

Route::middleware('auth')->group(function () {

    Route::post('logout', [Auth\AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');

    Route::get("/dashboard", DashboardController::class)->name('dashboard');
    Route::get("/", HomeController::class)->name('home');
    Route::resource('users', UserController::class)->only('index');
});


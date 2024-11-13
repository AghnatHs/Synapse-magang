<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\KomnewsController;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/komnews', [KomnewsController::class, 'index']);

Route::get('/api/komnews/category/{category:slug}', [CategoryController::class, 'index']);

Route::get('/api/komnews/{komnews:slug}', [KomnewsController::class, 'show']);

Route::get('{any}', function () {
    return view('welcome');
})->where('any','.*');
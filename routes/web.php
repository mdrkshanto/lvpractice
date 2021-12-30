<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

// Route::get('{any}', [HomeController::class,'index'])->where('any','.*');

// Route::get('/{any}', [HomeController::class,'index']);
Route::get('/', [HomeController::class,'index']);
Route::get('/about', [HomeController::class,'index']);
Route::get('/resume', [HomeController::class,'index']);
Route::get('/skills', [HomeController::class,'index']);
Route::get('/contact', [HomeController::class,'index']);

Route::get('/admin', [HomeController::class,'admin']);
Route::get('/dashboard', [HomeController::class,'admin']);
Route::get('/home', [HomeController::class,'admin']);
Route::get('/home-add', [HomeController::class,'admin']);
Route::get('/home-edit', [HomeController::class,'admin']);

Route::post('/home-add', [HomeController::class, 'add']);



// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';

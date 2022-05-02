<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


Route::get('/portal/{id}', [App\Http\Controllers\LandingPageController::class, 'index'])->name('portal');
Route::get('/pages', [App\Http\Controllers\LandingPageController::class, 'pages'])->name('pages');
Route::get('/addPage/{idTemplate}', [App\Http\Controllers\LandingPageController::class, 'addPage'])->name('addPage');
Route::get('/cards/get', [App\Http\Controllers\LandingPageController::class, 'getcards'])->name('getcards');
Route::get('/cursos/get/{id}', [App\Http\Controllers\LandingPageController::class, 'get_cursos'])->name('getcursos');
Route::get('/palestrantes/get/{cursos_id}', [App\Http\Controllers\LandingPageController::class, 'get_palestrante'])->name('get_palestrante');

Route::get('/staff/{id}', [App\Http\Controllers\Staff\StaffController::class, 'index'])->name('staff');


//Route::get('/pages/{page}/editor', [App\Http\Controllers\PageController::class, 'editor'])->name('editor');
Route::get('/pages/{page}/editor', [App\Http\Controllers\PageController::class, 'editor'])->name('editor');



Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

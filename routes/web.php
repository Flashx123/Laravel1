<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

Route::get('/', function () {
    return redirect()->route('tasks.index');
});

// Group all task routes
Route::prefix('tasks')->name('tasks.')->group(function () {
    Route::get('/', [TaskController::class, 'index'])->name('index');         // /tasks
    Route::get('/create', [TaskController::class, 'create'])->name('create'); // /tasks/create
    Route::post('/', [TaskController::class, 'store'])->name('store');        // POST /tasks
    Route::get('/{task}/edit', [TaskController::class, 'edit'])->name('edit'); // /tasks/{id}/edit
    Route::patch('/{task}', [TaskController::class, 'update'])->name('update'); // PATCH /tasks/{id}
    Route::delete('/{task}', [TaskController::class, 'destroy'])->name('destroy'); // DELETE /tasks/{id}
});

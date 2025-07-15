<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TaskApiController;

Route::prefix('tasks')->group(function () {
    Route::get('/', [TaskApiController::class, 'index']);      // GET /api/tasks

});

<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TaskApiController;

Route::prefix('tasks')->group(function () {
    Route::get('/', [TaskApiController::class, 'index']);      // GET /api/tasks
    Route::post('/', [TaskApiController::class, 'store']);     // POST /api/tasks
    Route::patch('/{task}', [TaskApiController::class, 'update']); // PATCH /api/tasks/{id}
    Route::delete('/{task}', [TaskApiController::class, 'destroy']); // DELETE /api/tasks/{id}
});

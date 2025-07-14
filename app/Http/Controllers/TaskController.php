<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function index()   /////Controller 2
    {
        $tasks = Task::all();
        return Inertia::render('Tasks/Index', [
            'tasks' => $tasks,
        ]);
    }

    public function create()            ////Controller 1
    {
        return Inertia::render('Tasks/Create');
    }

    public function store(Request $request)   ///Controller 3
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        Task::create($request->all());

        return redirect()->route('tasks.index');
    }

    public function edit(Task $task)      ///Controller 4
    {
        return Inertia::render('Tasks/Edit', [
            'task' => $task,
        ]);
    }

    public function update(Request $request, Task $task)  ///Controller 5
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'completed' => 'boolean',
        ]);

        $task->update($request->all());

        return redirect()->route('tasks.index');
    }

    public function destroy(Task $task)  ////Controller 6
    {
        $task->delete();
        return redirect()->route('tasks.index');
    }
}

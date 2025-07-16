<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to To-Do App</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-tr from-indigo-600 to-purple-600 text-white min-h-screen flex flex-col justify-center items-center">

    <div class="text-center px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Welcome to Your To-Do List</h1>
        <p class="text-lg md:text-xl text-white/80 mb-8">Stay organized, stay productive — one task at a time.</p>

        <div class="flex justify-center space-x-4">
            <a href="/api-view" class="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
                View Tasks via API
            </a>
            <a href="/tasks" class="bg-transparent border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-indigo-600 transition font-semibold">
                Go to Task Manager
            </a>
        </div>
    </div>

    <footer class="absolute bottom-4 text-sm text-white/70">
        Built with using Laravel + Inertia
    </footer>
</body>
</html>

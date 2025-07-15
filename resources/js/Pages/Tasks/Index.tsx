import React from 'react';
import { usePage, Link, router } from '@inertiajs/react';
import { PageProps as InertiaPageProps } from '@inertiajs/inertia';

interface Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
}

interface Props extends InertiaPageProps {
  tasks: Task[];
}

const Index: React.FC = () => {
  const { tasks } = usePage<Props>().props;

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this task?')) {
      router.delete(`/tasks/${id}`);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>

      <Link
        href="/tasks/create"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        + Create New Task
      </Link>

      <div className="mt-6">
        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks available.</p>
        ) : (
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="border rounded p-4 flex justify-between items-center"
              >
                <div>
                  <h2 className="font-semibold text-red-500">
                    {task.completed ? 'ok with LIST' : 'Nope'} {task.title}
                  </h2>
                  {task.description && (
                    <p className="text-sm text-white">{task.description}</p>
                  )}
                </div>
                <div className="flex items-center space-x-4"> {/* Add flex and space-x-4 */}
    <Link
        href={`/tasks/${task.id}/edit`}  ///To the api point
        className="text-blue-500 hover:underline"
    >
        Edit
    </Link>
    <button
        onClick={() => handleDelete(task.id)}
        className="text-red-500 hover:underline"
    >
        Delete
    </button>
</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Index;

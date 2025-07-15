import React from 'react';
import { useForm, Link } from '@inertiajs/react';

interface Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

interface Props {
  task: Task;
}

const Edit: React.FC<Props> = ({ task }) => {
  const { data, setData, patch, processing, errors } = useForm({
    title: task.title,
    description: task.description,
    completed: task.completed || false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    patch(`/tasks/${task.id}`); // PATCH request to update
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Task</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Title</label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => setData('title', e.target.value)}
            className="w-full px-4 py-2 border text-gray-800 rounded"
            required
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">Description</label>
          <textarea
            value={data.description}
            onChange={(e) => setData('description', e.target.value)}
            className="w-full px-4 py-2 border text-gray-800 rounded"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={data.completed}
            onChange={(e) => setData('completed', e.target.checked)}
          />
          <label className="text-sm">Completed</label>
        </div>

        <div className="flex justify-between items-center mt-6">
          <Link href="/tasks" className="text-blue-600 hover:underline">
            ← Back
          </Link>

          <button
            type="submit"
            disabled={processing}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            {processing ? 'Saving...' : 'Update Task'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;

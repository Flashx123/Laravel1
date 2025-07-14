import React from 'react';
import { useForm, Link } from '@inertiajs/react';

const Create: React.FC = () => {
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/tasks');
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-5 ">Create New Task</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Title</label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => setData('title', e.target.value)}
            className="w-400 px-4 py-2 border rounded"
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
            className="w-full px-4 py-2 border rounded"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        <div className="flex justify-between items-center mt-6">
          <Link
            href="/tasks"
            className="text-gray-600 hover:underline"
          >
            ← Back
          </Link>

          <button
            type="submit"
            disabled={processing}
            className="bg-green-600 text-black px-4 py-2 rounded hover:bg-green-700"
          >
            {processing ? 'Saving...' : 'Save Task'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;

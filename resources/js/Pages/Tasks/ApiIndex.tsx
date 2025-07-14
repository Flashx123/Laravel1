import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Task = {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
};

const fetchTasks = async (): Promise<Task[]> => {
  const response = await axios.get('/api/tasks');
  return response.data;
};

const ApiIndex: React.FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
  });

  if (isLoading) return <p className="p-6">Loading tasks...</p>;
  if (error) return <p className="p-6 text-red-500">Failed to load tasks.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tasks via API (TanStack Query)</h1>

      {data?.length === 0 ? (
        <p className="text-gray-500">No tasks found.</p>
      ) : (
        <ul className="space-y-4">
          {data?.map((task) => (
            <li key={task.id} className="border p-4 rounded flex justify-between">
              <div>
                <h2 className="font-semibold">
                  {task.completed ? '✅' : '⬜'} {task.title}
                </h2>
                {task.description && (
                  <p className="text-sm text-gray-600">{task.description}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApiIndex;

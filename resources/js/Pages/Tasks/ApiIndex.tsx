import React from 'react';
import { useQuery } from '@tanstack/react-query';


type Task = {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
};

const fetchTasks = async (): Promise<Task[]> => {
  const response = await fetch('/api/tasks');

  if (!response.ok) {
    throw new Error('Failed to fetch tasks');
  }

  const data = await response.json();
  console.log(data);
  return data;
};

const ApiIndex: React.FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
  });

 
  if (error) return <p className="p-6 text-red-500">Failed to load tasks.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Tasks via API (TanStack Query)</h1>

      {data?.length === 0 ? (
        <p className="text-gray-500">No tasks found.</p>
      ) : (
        <ul className="space-y-4">
          {data?.map((task) => (
            <li key={task.id} className="border p-4 rounded flex justify-between">
              <div>
                <h2 className="font-semibold">
                  {task.completed ? 'ok from the lask' : 'Nope!!!'} {task.title}
                </h2>
                {task.description && (
                  <p className="text-sm text-white">{task.description}</p>
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

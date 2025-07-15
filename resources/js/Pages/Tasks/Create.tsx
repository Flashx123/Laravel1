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
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
  <div className="w-full p-8 rounded-lg shadow-md">
    <h1 className="text-4xl font-bold mb-6 text-center">Create New Task</h1>

    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Title Field */}
      <div>
        <label className="block font-semibold mb-1">Title</label>
        <input
          type="text"
          value={data.title}
          onChange={(e) => setData('title', e.target.value)}
          className="w-full px-4 py-2 border text-gray-900 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
      </div>

      {/* Description Field */}
      <div>
        <label className="block font-semibold mb-1">Description</label>
        <textarea
          value={data.description}
          onChange={(e) => setData('description', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description}</p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center pt-4">
        <Link href="/tasks" className="text-white hover:underline">
            Back
        </Link>
        
       <button
  type="submit"
  className="
    bg-blue-200         
    text-white           
    font-semibold        
    py-2 px-4          
    rounded-md           
    shadow-md            
    hover:bg-blue-700   
    focus:outline-none   
    focus:ring-2      
    focus:ring-blue-500  
    focus:ring-offset-2  
    transition-colors    
    duration-200         
  "
>
  <Link href="/api-view" className="text-white">
    Click to query using TanStack
  </Link>
</button>
        {/* <Link href = "/api-view" className='text-white hover:underline'>Click to query sing TanStack</Link> */}




        <button
          type="submit"
          disabled={processing}
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
        >
           Save Task
        </button>
      </div>
    </form>
  </div>
</div>

  );
};

export default Create;

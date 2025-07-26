import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AcceptTask = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext);

 const updateTaskStatus = (status) => {
  const updatedData = userData.map(emp => {
    const updatedTasks = emp.tasks.map(task => {
      const isSameTask =
        task.title === data.title &&
        task.date === data.date &&
        task.description === data.description;

      if (isSameTask) {
      
        const updatedSummary = { ...emp.taskSummary };

        if (task.newTask) updatedSummary.newTask -= 1;

        if (task.active) updatedSummary.active -= 1;

        if (status === 'completed') updatedSummary.completed += 1;
        else if (status === 'failed') updatedSummary.failed += 1;

        emp.taskSummary = updatedSummary;

        return {
          ...task,
          active: false,
          completed: status === 'completed',
          failed: status === 'failed',
          newTask: false,
        };
      }

      return task;
    });

    return { ...emp, tasks: updatedTasks };
  });

  setUserData(updatedData);
  localStorage.setItem('employees', JSON.stringify(updatedData));
  alert(`Task marked as ${status}!`);
};


  return (
    <div className='flex-shrink-0 p-5 h-full w-[300px] bg-red-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
      </div> 
      <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
      <p className='text-sm mt-2'>{data.description}</p>
      <div className='flex justify-between mt-4'>
        <button 
          className='bg-green-500 py-1 px-2 text-sm'
          onClick={() => updateTaskStatus('completed')}
        >
          Mark as Completed
        </button>
        <button
          className='bg-red-500 py-1 px-2 text-sm'
          onClick={() => updateTaskStatus('failed')}
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;

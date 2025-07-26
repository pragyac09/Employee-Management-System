import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const NewTask = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const acceptTask = () => {
    const updatedData = userData.map(emp => {
      if (emp.firstName.toLowerCase() === data.assignTo.toLowerCase()) {
        const updatedTasks = emp.tasks.map(task => {
          const isSameTask =
            task.title === data.title &&
            task.date === data.date &&
            task.description === data.description;

          if (isSameTask) {
            // Update taskSummary counters
            emp.taskSummary.newTask -= 1;
            emp.taskSummary.active += 1;

            // Mark task as active
            return {
              ...task,
              newTask: false,
              active: true
            };
          }
          return task;
        });

        return { ...emp, tasks: updatedTasks };
      }
      return emp;
    });

    setUserData(updatedData);
    localStorage.setItem('employees', JSON.stringify(updatedData));
    alert("Task accepted and now active.");
  };

  return (
    <div className='flex-shrink-0 p-5 h-full w-[300px] bg-blue-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
      </div> 
      <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
      <p className='text-sm mt-2'>{data.description}</p>
      <div className='mt-4'>
        <button
          className='bg-blue-500 py-1 px-2 text-sm'
          onClick={() => {
          if (window.confirm("Are you sure you want to accept this task?")) {
          acceptTask();
          }}}>
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;

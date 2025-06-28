import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='rounded-xl py-6 px-9 w[45%] p-10 bg-red-400'>
            <h2 className='text-3xl font-semibold'>{data.taskSummary.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        
        <div className='rounded-xl py-6 px-9 w[45%] p-10 bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{data.taskSummary.completed}</h2>
            <h3 className='text-xl font-medium'>CompletedTask</h3>
        </div>
        
        <div className='rounded-xl py-6 px-9 w[45%] p-10 bg-yellow-400'>
            <h2 className='text-3xl font-semibold'>{data.taskSummary.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
        
        <div className='rounded-xl py-6 px-9 w[45%] p-10 bg-green-400'>
            <h2 className='text-3xl font-semibold'>{data.taskSummary.active}</h2>
            <h3 className='text-xl font-medium'>Active Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers
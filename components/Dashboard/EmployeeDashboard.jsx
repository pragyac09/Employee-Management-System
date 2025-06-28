import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
    
  return (
    <div>
        <div className='p-10 bg-[#1c1c1c] h-screen' >
            <Header changeUser={props.changeUser} data={props.data} />
            <TaskListNumbers data={props.data} />
            <TaskList data={props.data}/>
        </div>
    </div>
  )
}

export default EmployeeDashboard
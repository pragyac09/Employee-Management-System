import React, { useContext, useEffect, useState } from 'react';
import Header from '../other/Header';
import TaskList from '../TaskList/TaskList';
import TaskListNumbers from '../other/TaskListNumbers';
import { AuthContext } from '../../context/AuthProvider';


const EmployeeDashboard = ({ changeUser }) => {
  const [userData,setUserData] = useContext(AuthContext);
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const loggedInUserString = localStorage.getItem('loggedInUser');
    const employeesFromStorage = JSON.parse(localStorage.getItem('employees'));

    if (loggedInUserString && employeesFromStorage) {
      const loggedInUser = JSON.parse(loggedInUserString);
      const emp = employeesFromStorage.find(
        (emp) => emp.email === loggedInUser.data.email
      );
      if (emp) {
        if (!emp.tasks) emp.tasks = [];
        setEmployee(emp);
      }
    }
  }, [userData]);

  if (!employee) {
    return <div className='text-white'>Loading...</div>;
  }

  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header changeUser={changeUser} data={employee} />
      <TaskListNumbers data={employee} />
      <TaskList data={employee} />
    </div>
  );
};

export default EmployeeDashboard;


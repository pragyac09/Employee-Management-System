import React, { useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'; 
import { useContext } from 'react';
import { AuthContext } from './context/AuthProvider';

const App = () => {

  const [user,setUser] = useState(null)
  const [loggedInuserData, setloggedInUserData] = useState(null)
  const [userData,setUserData]=useContext(AuthContext)

   useEffect(() => {
  const loggedInUserString = localStorage.getItem('loggedInUser');

  if (loggedInUserString) {
    const loggedInUser = JSON.parse(loggedInUserString);
    setUser(loggedInUser.role);

    // ✅ THIS IS THE FIXED PART:
    if (loggedInUser.role === 'employee') {
      // Instead of using old data
      const latest = userData?.employees?.find(
        (emp) => emp.email === loggedInUser.data.email
      );
      setloggedInUserData(latest); // ✅ Updated employee from latest data
    } else {
      setloggedInUserData(loggedInUser.data); // Admin data unchanged
    }
  }
}, [userData?.employees]); // ✅ This ensures it runs when userData is updated


  const handleLogin = (email,password)=>{
    if(email=='admin@example.com' && password=='123'){
           setUser('admin')
          localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
   else if(userData){
          const employee = userData.find((e) => e.email == email && e.password ==password)
          
          if(employee){
            setUser('employee') 
            setloggedInUserData(employee)
          localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:employee}))  
        }
      }
        else{
        alert("Invalid Credentials")
      } 
      };
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} />: ''}
      {user == 'admin' && <AdminDashboard changeUser={setUser} /> }
       {user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInuserData} /> : null }
    </> 
  );
};
export default App


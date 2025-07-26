import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([])

  useEffect(() => {
    const localData = getLocalStorage()
    
 
    if (!localData || !localData.employees) {
      setLocalStorage() 
    }

    const { employees } = getLocalStorage()
    setUserData(employees)
  }, [])

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

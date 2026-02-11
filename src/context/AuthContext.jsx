import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

// Hardcoded users database
const USERS = {
  admin: {
    name: 'Heang',
    email: 'admin123@gmail.com',
    password: 'admin168',
    role: 'admin'
  },
  staff: [
    { name: 'Rom', email: 'staff123@gmail.com', password: 'staff1234', role: 'staff' },
    { name: 'Nisa', email: 'staff123@gmail.com', password: 'staff1234', role: 'staff' },
    { name: 'Laiheang', email: 'staff123@gmail.com', password: 'staff1234', role: 'staff' }
  ]
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    setError(null);
    
    if (email === USERS.admin.email && password === USERS.admin.password) {
      const userData = {
        id: 'admin',
        name: USERS.admin.name,
        email: USERS.admin.email,
        role: 'admin'
      };
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      return userData;
    }

    const staffUser = USERS.staff.find(u => u.email === email && u.password === password);
    if (staffUser) {
      const userData = {
        id: `staff_${staffUser.name}`,
        name: staffUser.name,
        email: staffUser.email,
        role: 'staff'
      };
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      return userData;
    }

    const error = 'Invalid email or password';
    setError(error);
    throw new Error(error);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

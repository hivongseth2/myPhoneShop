import React, { createContext, useContext, useState } from "react";

// Tạo context
const AuthContext = createContext();

// Tạo AuthProvider để cung cấp trạng thái đăng nhập
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// Tạo hook để sử dụng trạng thái đăng nhập
export const useAuth = () => {
  return useContext(AuthContext);
};

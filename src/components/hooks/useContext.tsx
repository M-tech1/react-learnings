import React, { createContext, useContext, useState } from "react";

type AuthContextType = {
  user: string | null;
  login: (usernam: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

// custom hook to use outside....
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be within an authProvider");
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  const login = (userName: string) => setUser(userName);
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

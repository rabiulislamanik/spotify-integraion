import React, { useState } from "react";
import { UserAuth } from "../custom-types/user";

type ContextProps = {
    user: UserAuth | null;
    authenticated: boolean;
    setUser: any;
};

export const AuthContext = React.createContext<Partial<ContextProps>>({});

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('UserAuth') || '{}'));

return (
    <AuthContext.Provider
     value={{
          user,
          authenticated: !!user,
          setUser
    }}>
      {children} 
   </AuthContext.Provider>
  );
}
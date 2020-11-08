import React, { useState } from "react";
import { UserAuth } from "../custom-types/user";

type ContextProps = {
    user: UserAuth | null;
    authenticated: boolean;
    setUser: any;
    loadingAuthState: boolean;
};

export const AuthContext = React.createContext<Partial<ContextProps>>({});

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('UserAuth') || '{}'));
    const [loadingAuthState, setLoadingAuthState] = useState(true);

return (
    <AuthContext.Provider
     value={{
          user,
          authenticated: user !== null,
          setUser,
          loadingAuthState
    }}>
      {children} 
   </AuthContext.Provider>
  );
}
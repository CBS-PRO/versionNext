import { createContext, useContext, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { login } from "../api";
import { User } from "../models/User";

interface AuthContextType {
  user: User | null;
  signin: (email: string, password: string) => void;
  signout: (callback: VoidFunction) => void;
  authErrors: {
    data: object;
    status: number;
  };
}

const initial_state = {
  user: null,
  signin: () => {
    return null;
  },
  signout: () => {
    return null;
  },
  authErrors: {
    data: {},
    status: 0,
  },
};

export const AuthContext = createContext<AuthContextType>(initial_state);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const userString = localStorage.getItem("user");
  const userData = userString ? JSON.parse(userString) : null;
  const [user, setUser] = useState<User | null>(userData);
  const [authErrors, setAuthErrors] = useState(initial_state.authErrors);

  const signin = async (email: string, password: string) => {
    await login(email, password)
      .then((response) => {
        if (response) {
          const user = {
            ...response.user,
          };
          setUser(user);
          setAuthErrors(initial_state.authErrors);

          const fullName = `${user.name}`;

          localStorage.setItem("access_token", response.token);
          localStorage.setItem("user", JSON.stringify(user));
        }
      })
      .catch((error) => setAuthErrors(error.response));
  };

  const signout = () => {
    setUser(null);

    // TODO remove this
    document.cookie =
      "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
  };

  const value = {
    user,
    signin,
    signout,
    authErrors,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

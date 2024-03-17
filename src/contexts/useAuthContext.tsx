"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type AuthInfo =
  | {
      id: number;
      name: string;
      token: string;
    }
  | undefined;

const AuthContext = createContext<AuthInfo>(undefined);
const SetAuthContext = createContext<Dispatch<SetStateAction<AuthInfo>>>(
  () => undefined
);

export const AuthProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [state, setState] = useState<AuthInfo>(undefined);
  return (
    <AuthContext.Provider value={state}>
      <SetAuthContext.Provider value={setState}>
        {children}
      </SetAuthContext.Provider>
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
export const useSetAuthContext = () => useContext(SetAuthContext);

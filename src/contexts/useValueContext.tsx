"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

const VALUE_CONTEXT_KEY = "value_context";

const ValueContext = createContext<string | undefined>(undefined);
const SetValueContext = createContext<
  Dispatch<SetStateAction<string | undefined>>
>(() => undefined);

export const ValueProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [value, setValue] = useState<string | undefined>(undefined);
  console.log(`ValueProvider value=${value}`);
  useEffect(() => {
    if (undefined === value) {
      const item = sessionStorage.getItem(VALUE_CONTEXT_KEY);
      if (item) {
        setValue(String(item));
      }
    } else {
      sessionStorage.setItem(VALUE_CONTEXT_KEY, value);
    }
  }, [value]);

  return (
    <ValueContext.Provider value={value}>
      <SetValueContext.Provider value={setValue}>
        {children}
      </SetValueContext.Provider>
    </ValueContext.Provider>
  );
};

export const useValueContext = () => useContext(ValueContext);
export const useSetValueContext = () => useContext(SetValueContext);

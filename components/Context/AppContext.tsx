import { createContext, useState, FC, ReactNode } from "react";

interface AppContextProps {
  isLeftBarOpen: boolean;
  toggleLeftBar: () => void;
  isRightBarOpen: boolean;
  toggleRightBar: () => void;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [isLeftBarOpen, setIsLeftBarOpen] = useState(false);
  const [isRightBarOpen, setIsRightBarOpen] = useState(false);

  const toggleLeftBar = () => {
    if (!isRightBarOpen) {
      setIsLeftBarOpen(!isLeftBarOpen);
    } else {
      setIsRightBarOpen(false);
      setIsLeftBarOpen(true);
    }
  };

  const toggleRightBar = () => {
    if (!isLeftBarOpen) {
      setIsRightBarOpen(!isRightBarOpen);
    } else {
      setIsLeftBarOpen(false);
      setIsRightBarOpen(true);
    }
  };

  return (
    <AppContext.Provider
      value={{ isLeftBarOpen, toggleLeftBar, isRightBarOpen, toggleRightBar }}
    >
      {children}
    </AppContext.Provider>
  );
};

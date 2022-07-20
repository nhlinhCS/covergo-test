import { createContext, FC, useContext, useState } from "react";

export enum AppScreen {
  Welcome = "Welcome",
  FillingInfo = "FillingInfo",
  SummaryConfirm = "SummaryConfirm",
  Error = "Error",
}

export interface SummaryInfo {
  name: string;
  age: number;
  country: string;
  insurancePackage: string;
  premium: string;
}

interface AppContextProps {
  children: React.ReactNode;
}

const useAppContextValue = () => {
  const [appScreen, setAppScreen] = useState<AppScreen>(AppScreen.Welcome);
  const [summaryInfo, setSummaryInfo] = useState<SummaryInfo | undefined>();

  return { appScreen, summaryInfo, setSummaryInfo, setAppScreen };
};

type UseAppContextValue = ReturnType<typeof useAppContextValue>;

const appContext = createContext<UseAppContextValue | null>(null);

const { Provider } = appContext;

export const AppProvider: FC<AppContextProps> = ({ children }) => {
  const value = useAppContextValue();

  return <Provider value={value}>{children}</Provider>;
};

export const useAppContext = () => {
  const ctx = useContext(appContext);
  if (!ctx) {
    throw new Error("useAppContext must be used inside an AppProvider");
  }

  return ctx;
};

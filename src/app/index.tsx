import React from "react";

import { AppProvider, useAppContext, AppScreen } from "./context";
import Welcome from "./Welcome";
import FillingInfo from "./FillingInfo";
import Error from "./Error";
import SummaryConfirm from "./SummaryConfirm";

import "./style.scss";

const AppView: React.FC = () => {
  const { appScreen } = useAppContext();

  return (
    <main>
      {appScreen === AppScreen.Welcome && <Welcome />}
      {appScreen === AppScreen.FillingInfo && <FillingInfo />}
      {appScreen === AppScreen.SummaryConfirm && <SummaryConfirm />}
      {appScreen === AppScreen.Error && <Error />}
    </main>
  );
};

const App: React.FC = () => (
  <AppProvider>
    <AppView />
  </AppProvider>
);

export default App;

import React from "react";
import { useAppContext, AppScreen } from "../context";

import "./style.scss";

const Welcome: React.FC = () => {
  const { setAppScreen } = useAppContext();

  const handleStartClick = () => {
    setAppScreen(AppScreen.FillingInfo);
  };

  return (
    <div className="welcome">
      <h1>Hello There!</h1>
      <p>Let&#39;s buy some insurance. It is going to take only a few steps</p>
      <button className="button active-button" onClick={handleStartClick}>
        Start
      </button>
    </div>
  );
};

export default Welcome;

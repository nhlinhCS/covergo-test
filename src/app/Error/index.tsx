import React, { memo } from "react";

import { useAppContext, AppScreen } from "../context";

import "./style.scss";

const Error: React.FC = () => {
  const { setAppScreen } = useAppContext();

  const handleOKButtonClick = () => setAppScreen(AppScreen.Welcome);

  return (
    <div className="error">
      <h1>Ooops</h1>
      <p>Your age is over accepted limit.</p>
      <p>We are sorry but we cannot insure you now</p>
      <button className="button active-button" onClick={handleOKButtonClick}>
        {"Ok :("}
      </button>
    </div>
  );
};

export default memo(Error);

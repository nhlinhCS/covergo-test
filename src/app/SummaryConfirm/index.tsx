import React from "react";

import { useAppContext, AppScreen } from "../context";

import "./style.scss";

const SummaryConfirm: React.FC = () => {
  const { summaryInfo, setSummaryInfo, setAppScreen } = useAppContext();

  if (!summaryInfo) return null;
  let timeOutRef: ReturnType<typeof setTimeout>;

  const handleBuyButtonClick = () => {
    window.alert("Successful");
    timeOutRef = setTimeout(() => {
      clearTimeout(timeOutRef);
      setAppScreen(AppScreen.Welcome);
      setSummaryInfo(undefined);
    }, 2000);
  };

  const handleBackButtonClick = () => {
    clearTimeout(timeOutRef);
    setSummaryInfo(undefined);
    setAppScreen(AppScreen.FillingInfo);
  };

  return (
    <div className="summary">
      <h1>Summary</h1>
      <div>
        <p>Name: {summaryInfo.name}</p>
        <p>Age: {summaryInfo?.age}</p>
        <p>Where do you live: {summaryInfo.country}</p>
        <p>Package: {summaryInfo.insurancePackage}</p>
        <p>Premium: {summaryInfo.premium}</p>
      </div>
      <div className="summary__buttons">
        <button className="button back-button" onClick={handleBackButtonClick}>
          Back
        </button>
        <button className="button active-button" onClick={handleBuyButtonClick}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default SummaryConfirm;

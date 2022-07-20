import React, { useState } from "react";

import { useAppContext, AppScreen } from "../context";
import {
  COUNTRY,
  PACKAGES,
  Package,
  STANDARD_PRICE,
  Country,
} from "./InsuranceData";

import "./style.scss";

const FillingInfo: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(50);
  const [country, setCountry] = useState<Country>(COUNTRY[0]);
  const [insurancePackage, setInsurancePackage] = useState<string>("standard");
  const { setAppScreen, setSummaryInfo } = useAppContext();

  const premium = `${country && country?.rate * 10 * age}${country.symbol}`;

  const handleBackButtonClick = () => {
    setSummaryInfo(undefined);
    setAppScreen(AppScreen.Welcome);
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(parseInt(e.target.value, 10));
  };

  const handleChangeCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = COUNTRY.find(
      ({ symbol }) => symbol === e.target.value
    );

    setCountry(selectedCountry || COUNTRY[0]);
  };

  const handleChangePackage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInsurancePackage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) {
      window.alert("Please input your name!");
      return;
    }
    if (age > 100 || age < 0) {
      return setAppScreen(AppScreen.Error);
    }

    setSummaryInfo({
      age,
      name,
      country: country?.name,
      insurancePackage:
        COUNTRY.find(({ symbol }) => {
          return symbol === insurancePackage;
        })?.name || "Standard",
      premium,
    });
    setAppScreen(AppScreen.SummaryConfirm);
  };

  const renderPackages = (item: Package) => {
    const { id, name } = item;

    let packageMore = "";

    switch (id) {
      case "safe":
        packageMore = `(${STANDARD_PRICE + STANDARD_PRICE * 0.5}${
          country?.symbol
        }, 50%)`;
        break;
      case "supper_safe":
        packageMore = `(${STANDARD_PRICE + STANDARD_PRICE * 0.75}${
          country?.symbol
        }, 75%)`;
        break;
      default:
    }

    return (
      <div key={id} className="filling-info__packages-item">
        <input
          name="package"
          type="radio"
          value={id}
          checked={id === insurancePackage}
          onChange={handleChangePackage}
        />
        <label>{`${name}${packageMore}`}</label>
      </div>
    );
  };

  return (
    <div className="filling-info">
      <h1>Tell us about yourself</h1>
      <form onSubmit={handleSubmit}>
        <div className="filling-info__inputs">
          <div className="filling-info__inputs-item">
            <label>Name</label>
            <input type="text" value={name} onChange={handleChangeName} />
          </div>
          <div className="filling-info__inputs-item">
            <label>Age</label>
            <input
              type="number"
              min="1"
              value={age.toString()}
              onChange={handleChangeAge}
            />
          </div>
          <div className="filling-info__inputs-item">
            <label>Where do you live</label>
            <select value={country?.symbol} onChange={handleChangeCurrency}>
              {COUNTRY.map((option) => (
                <option key={option.symbol} value={option.symbol}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="filling-info__package-content">
          <div className="filling-info__packages">
            {PACKAGES.map(renderPackages)}
          </div>
          <p className="filling-info__package-premium">
            Your premium is: {premium}
          </p>
          <div className="filling-info__package-buttons">
            <button
              className="button back-button"
              onClick={handleBackButtonClick}
            >
              Back
            </button>
            <button className="button active-button" type="submit">
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FillingInfo;

"use client";

import React, { useState } from "react";

const InputRadioArea = () => {
  const [selectedOption, setSelectedOption] = useState<String>("option1");
  const handleRadioChange = (value: string) => {
    setSelectedOption(value);
  };
  return (
    <div className="flex gap-4 text-sm">
      <div
        className="flex justify-center items-center cursor-pointer"
        onClick={() => handleRadioChange("option1")}
      >
        <input
          onChange={() => {
            selectedOption === "option1"
              ? handleRadioChange("option2")
              : handleRadioChange("option1");
          }}
          type="radio"
          value="option1"
          checked={selectedOption === "option1"}
          className="mr-2"
        />
        <div>Telefon numarası ile</div>
      </div>
      <div
        className="flex justify-center items-center cursor-pointer"
        onClick={() => handleRadioChange("option2")}
      >
        <input
          onChange={() => {
            selectedOption === "option1"
              ? handleRadioChange("option2")
              : handleRadioChange("option1");
          }}
          type="radio"
          value="option2"
          checked={selectedOption === "option2"}
          className="mr-2"
        />
        <div>Siteden mesaj ile</div>
      </div>
    </div>
  );
};

export default InputRadioArea;

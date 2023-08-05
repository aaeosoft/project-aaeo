import React from "react";

type Props = { title: string };

const SelectDropDown = ({ title }: Props) => {
  const content = ["Trabzon", "İstanbul", "Tekirdağ"];

  return (
    <div className="flex flex-col">
      <div className="text-sm font-semibold">{title}</div>
      <select className="border p-2 my-2">
        <option value="">Seçiniz</option>
        {content.map((val, i) => (
          <option key={i}>{val}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectDropDown;
